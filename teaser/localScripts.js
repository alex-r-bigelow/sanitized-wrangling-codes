/* globals d3 */

// Scripts specific for the d3 side of constructing the figure; these are also
// manually called from the browser's console

const axisOffset = 40;
const layersRange = [axisOffset + 60, 400];
const horizontalRange = [60, 900];
const themeRange = [930, 980];
const timeDomain = [new Date('May 1 2019'), new Date('May 1 2020')];
const sourceTypeLayers = [
  'Meetup', 'Applied', 'Theoretical', 'Coding'
];
const codeLayers = Array.from(Array(24).keys()).map(n => `C${n + 1}`);

window.updateLogAxis = (skip = false) => {
  // Create / update the horizontal axis
  const dateToLog = d3.scaleTime()
    .domain(timeDomain)
    .range([100, 1]);
  const logToPosition = d3.scaleLog()
    .domain([100, 1])
    .range(horizontalRange);
  const timeScale = d => logToPosition(dateToLog(d));

  const tickValues = [
    new Date('May 1 2019'),
    new Date('June 1 2019'),
    new Date('July 1 2019'),
    new Date('Aug 1 2019'),
    new Date('Sept 1 2019'),
    new Date('Oct 1 2019'),
    new Date('Nov 1 2019'),
    new Date('Dec 1 2019'),
    new Date('Jan 1 2020'),
    new Date('Feb 1 2020'),
    new Date('Mar 1 2020'),
    new Date('Apr 1 2020'),
    new Date('May 1 2020')
  ].map(dateToLog);
  if (!skip) {
    const axis = d3.select('#axis').call(d3.axisBottom(logToPosition).tickValues(tickValues))
      .attr('transform', `translate(0,${axisOffset})`);
    axis.selectAll('.tick').select('text')
      .text(d => {
        const date = dateToLog.invert(d);
        return date.toLocaleDateString('en-us', { month: 'short' });
      });
  }

  return timeScale;
};

window.updateLinearAxis = (skip = false) => {
  // Create / update the horizontal axis
  const timeScale = d3.scaleTime()
    .domain(timeDomain)
    .range(horizontalRange);

  const tickValues = [
    new Date('May 1 2019'),
    new Date('June 1 2019'),
    new Date('July 1 2019'),
    new Date('Aug 1 2019'),
    new Date('Sept 1 2019'),
    new Date('Oct 1 2019'),
    new Date('Nov 1 2019'),
    new Date('Dec 1 2019'),
    new Date('Jan 1 2020'),
    new Date('Feb 1 2020'),
    new Date('Mar 1 2020'),
    new Date('Apr 1 2020'),
    new Date('May 1 2020')
  ];
  if (!skip) {
    const axis = d3.select('#axis')
      .call(d3.axisTop(timeScale).tickValues(tickValues))
      .attr('transform', `translate(0,${axisOffset})`);
    axis.selectAll('.tick').select('text')
      .text(d => {
        return d.toLocaleDateString('en-us', { month: 'short' });
      });
  }

  return timeScale;
};

window.updateLayerDividers = (skip = false) => {
  // Space the sourceTypeLayers out...
  let dummyValue = 0;
  const allLayers = sourceTypeLayers.reduce((agg, layer) => {
    dummyValue += 1;
    return agg.concat([dummyValue, layer]);
  }, []).concat([ // put some space between the code layers
    dummyValue + 1,
    dummyValue + 2,
    dummyValue + 3], codeLayers);
  const layerScale = d3.scaleBand()
    .domain(allLayers)
    .range(layersRange)
    .padding(1);

  if (!skip) {
    const ticks = d3.select('#layerDividers')
      .call(d3.axisRight(layerScale))
      .attr('transform', `translate(${horizontalRange[0]},0)`)
      .selectAll('.tick');
    ticks.select('line')
      .attr('x2', d => {
        if (typeof d === 'number') {
          return 0; // dummyValue
        } else if (sourceTypeLayers.indexOf(d) !== -1) {
          return horizontalRange[1] - horizontalRange[0];
        } else {
          return themeRange[1] - horizontalRange[0];
        }
      })
      .attr('opacity', 0.25);
    ticks.select('text')
      .attr('text-anchor', 'end')
      .attr('x', '-0.5em')
      .attr('dx', null) // Inkscape messes this up
      .attr('opacity', d => typeof d === 'number' ? 0 : 1);
    d3.select('#layerDividers .domain').remove();
  }

  return layerScale;
};

window.update = async ({
  xAxisUpdate = window.updateLinearAxis,
  skipXUpdate = false,
  skipYUpdate = false
} = {}) => {
  // Load the audit
  const audit = await d3.json('../audit.json');

  // Convert dates, create source IDs, and identify which codes and layers are
  // connected
  audit['Field Notes'].forEach(note => {
    note.id = `${note.date} (${note.meetingNo || 1})`;
    note.date = new Date(note.date);
    // Create a 1-ms offset for multiple meetings on the same day so that
    // they'll be in a consistent order when we spread them out
    if (note.meetingNo > 1) {
      note.date.setTime(note.date.getTime() + note.meetingNo);
    }

    note.codes = Object.keys(audit['Code Sources']).filter(rawCode => {
      return audit['Code Sources'][rawCode].indexOf(note.id) !== -1;
    }).map(rawCode => audit['Code Order'][rawCode]);

    note.layers = note.contexts.concat(note.codes);
  });
  // Sort the sources by date
  audit['Field Notes'].sort((a, b) => a.date - b.date);

  // Update the time scale
  const timeScale = xAxisUpdate(skipXUpdate);

  // Create an evenly spread scale to use space outside the time axis more
  // effectively
  const spreadScale = d3.scaleBand()
    .range(horizontalRange)
    .domain(audit['Field Notes'].map(d => d.id));

  // Update the layers
  const layerScale = window.updateLayerDividers(skipYUpdate);

  // Lay out sources
  let sources = d3.select('#sources').selectAll('.source')
    .data(audit['Field Notes'], d => d.id);
  sources.exit().remove();
  const sourcesEnter = sources.enter().append('g')
    .classed('source', true);
  sources = sources.merge(sourcesEnter);

  sourcesEnter.append('path');
  sources
    .attr('data-id', d => d.id)
    .attr('transform', d => {
      return `translate(${spreadScale(d.id)},0)`;
    })
    .select('path')
    .attr('d', d => {
      const timeXOffset = timeScale(d.date) - spreadScale(d.id);
      const meetupYCoord = layerScale('Meetup');
      const anchorThirds = (meetupYCoord - axisOffset) / 3;
      const bottomYCoord = Math.max(...d.layers.map(layerScale));
      return `M${timeXOffset},${axisOffset}
              C${timeXOffset},${axisOffset + anchorThirds},
               0,${meetupYCoord - anchorThirds},
               0,${meetupYCoord}
              L0,${bottomYCoord}`;
    })
    .attr('fill', 'none')
    .attr('stroke', 'black')
    .attr('opacity', d => {
      return d.layers.length === 1 && d.layers[0] === 'Meetup'
        ? 0.2 : 0.75;
    });

  // Add / lay out layer dots
  let dots = sources.selectAll('.dot').data(d => d.layers, d => d);
  dots.exit().remove();
  const dotsEnter = dots.enter().append('circle').classed('dot', true);
  dots = dots.merge(dotsEnter);

  dots
    .attr('r', d => d === 'Applied' || d === 'Theoretical' || d === 'Coding' ? 4 : 3)
    .attr('cy', d => layerScale(d))
    .attr('fill', 'black')
    .attr('opacity', d => d === 'Meetup' ? 0.25 : 0.5);

  // Create / update the theme guides
  const themeScale = d3.scalePoint()
    .domain(Object.keys(audit['Theme Codes']))
    .range(themeRange);
  const themeOffset = layerScale('C1');
  const ticks = d3.select('#themeGuides')
    .call(d3.axisTop(themeScale))
    .attr('transform', `translate(0,${themeOffset})`)
    .selectAll('.tick');
  ticks.select('line')
    .attr('y2', layerScale('C24') - themeOffset);
  d3.select('#themeGuides .domain').remove();

  // Create / lay out the theme dots
  let themes = d3.select('#themeDots').selectAll('.theme')
    .data(Object.entries(audit['Theme Codes']));
  themes.exit().remove();
  const themesEnter = themes.enter().append('g').classed('theme', true);
  themes = themes.merge(themesEnter);

  themes.attr('transform', d => `translate(${themeScale(d[0])})`);

  let themeDots = themes.selectAll('.dot')
    .data(d => d[1], d => d);
  themeDots.exit().remove();
  const themeDotsEnter = themeDots.enter().append('circle').classed('dot', true);
  themeDots = themeDots.merge(themeDotsEnter);

  themeDots.attr('r', 3)
    .attr('cy', d => layerScale(audit['Code Order'][d]))
    .attr('opacity', 0.5);
};
