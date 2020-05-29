/* globals d3 */

// Scripts for bridging between d3 and Inkscape / Illustrator without losing
// d3's data bindings (similar in spirit to Hanpuku, but more ad-hoc because
// Hanpuku couldn't be maintained). All scripts are executed from the browser's
// console

function parseShim (str) {
  try {
    const shimmedData = eval(str)(); // eslint-disable-line no-eval
    if (shimmedData && shimmedData.shim) {
      return shimmedData;
    }
  } catch (e) {}
  return null;
}

function saveDataBindings (selection) {
  selection.each(function () {
    const element = d3.select(this);
    if (this.__data__) {
      element.attr('data-d3', JSON.stringify(this.__data__));
    }
    saveDataBindings(element.selectAll('*'));
  });
}

function restoreDataBindings (selection) {
  selection.each(function () {
    const element = d3.select(this);
    if (element.attr('data-d3')) {
      this.__data__ = JSON.parse(element.attr('data-d3'));
    }
    restoreDataBindings(element.selectAll('*'));
  });
}

function saveIllustratorBindings (selection) {
  // Illustrator cheerfully trashes everything except for inline events... so
  // we shim any payloads that we want to preserve inside that string, including
  // d3 data bindings, any original onclick events (because we're replacing it),
  // and any custom class names
  selection.each(function () {
    const element = d3.select(this);
    if ((this.__data__ || element.attr('onclick') || element.attr('class')) &&
        (parseShim(element.attr('onclick')) === null)) {
      const shimmedData = {
        'shim': true
      };
      if (this.__data__) {
        shimmedData.d3 = this.__data__;
      }
      if (element.attr('onclick')) {
        shimmedData.onclick = element.attr('onclick');
      }
      if (element.attr('class')) {
        shimmedData.classes = element.attr('class');
      }
      element.attr('onclick', `() => { return ${JSON.stringify(shimmedData)}; }`);
    }
    saveIllustratorBindings(element.selectAll('*'));
  });
}

function restoreIllustratorBindings (selection) {
  selection.each(function () {
    const element = d3.select(this);
    if (element.attr('onclick')) {
      try {
        const shimmedData = parseShim(element.attr('onclick'));
        if (shimmedData) {
          element.attr('onclick', shimmedData.onclick || null);
          if (shimmedData.d3) {
            this.__data__ = shimmedData.d3;
          }
          if (shimmedData.classes) {
            const classList = shimmedData.classes.split(' ');
            for (const className of classList) {
              element.classed(className, true);
            }
          }
        }
      } catch (e) {}
    }
    restoreIllustratorBindings(element.selectAll('*'));
  });
}

window.copySvg = function (saveBindings = true) {
  if (saveBindings) {
    saveDataBindings(d3.select('svg'));
  }
  const el = document.createElement('textarea');
  el.value = d3.select('.figure').html();
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  if (saveBindings) {
    restoreDataBindings(d3.select('svg'));
  }
};

window.copyForIllustrator = function () {
  saveIllustratorBindings(d3.select('svg'));
  window.copySvg(false);
  restoreIllustratorBindings(d3.select('svg'));
};

window.addEventListener('load', async () => {
  const svg = d3.select('.figure')
    .html(await d3.text('figure.svg'))
    .select('svg');
  if (!svg.attr('width') && !svg.attr('height')) {
    // Illustrator cheerfully nukes width and height attributes; and we need
    // at least one for the SVG to show up in the page
    svg.attr('width', svg.attr('viewBox').split(' ')[2]);
  }
  restoreIllustratorBindings(d3.select('svg'));
  restoreDataBindings(d3.select('svg'));
});
