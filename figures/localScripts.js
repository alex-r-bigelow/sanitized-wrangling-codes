/* globals d3 */

// Scripts specific for the d3 side of constructing the figure; these are also
// manually called from the browser's console

const layersHeight = 200;
const axisOffset = layersHeight + 80;
const horizontalRange = [10, 990];
const layerRightPadding = 60;
const timeRightPadding = 60;
const timeDomain = [new Date('May 1 2019'), new Date('May 1 2020')];

window.updateLogAxis = (skip = false) => {
  // Create / update the horizontal axis
  const dateToLog = d3.scaleTime()
    .domain(timeDomain)
    .range([100, 1]);
  const logToPosition = d3.scaleLog()
    .domain([100, 1])
    .range([horizontalRange[0], horizontalRange[1] - timeRightPadding]);
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
    .range([horizontalRange[0], horizontalRange[1] - timeRightPadding]);

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
      .call(d3.axisBottom(timeScale).tickValues(tickValues))
      .attr('transform', `translate(0,${axisOffset})`);
    axis.selectAll('.tick').select('text')
      .text(d => {
        return d.toLocaleDateString('en-us', { month: 'short' });
      });
  }

  return timeScale;
};

window.updateLayerDividers = (skip = false) => {
  const themeLayers = [
    'T1', 'T2', 'T3', 'T4'
  ];
  const sourceTypeLayers = [
    'Coding', 'Theoretical', 'Applied', 'Meetup'
  ];
  const allLayers = themeLayers.concat([null], sourceTypeLayers);
  const layerScale = d3.scaleBand()
    .domain(allLayers)
    .range([0, layersHeight])
    .padding(1);

  if (!skip) {
    const ticks = d3.select('#layerDividers')
      .call(d3.axisLeft(layerScale))
      .attr('transform', `translate(${horizontalRange[1]},0)`)
      .selectAll('.tick');
    ticks.select('line')
      .attr('x2', d => {
        if (d === null) {
          return 0;
        } else {
          return horizontalRange[0] - horizontalRange[1];
        }
      })
      .attr('opacity', 0.25);
    ticks.select('text')
      .attr('dy', '-0.1em');
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

    const rawCodes = Object.keys(audit['Code Sources']).filter(rawCode => {
      return audit['Code Sources'][rawCode].indexOf(note.id) !== -1;
    });

    note.themes = Object.keys(audit['Theme Codes']).map(theme => {
      return {
        theme,
        codes: rawCodes.filter(rawCode => {
          return audit['Theme Codes'][theme].indexOf(rawCode) !== -1;
        }).map(rawCode => audit['Code Order'][rawCode])
      };
    }).filter(themeObj => themeObj.codes.length > 0);

    note.layers = note.contexts.concat(note.themes.map(themeObj => themeObj.theme));
  });
  // Sort the sources by date
  audit['Field Notes'].sort((a, b) => a.date - b.date);

  // Update the time scale
  const timeScale = xAxisUpdate(skipXUpdate);

  // Create an evenly spread scale to use space outside the time axis more
  // effectively
  const spreadScale = d3.scaleBand()
    .range([horizontalRange[0], horizontalRange[1] - layerRightPadding])
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
      const anchorThirds = (axisOffset - meetupYCoord) / 3;
      const topYCoord = Math.min(...d.layers.map(layerScale));
      return `M${timeXOffset},${axisOffset}
              C${timeXOffset},${axisOffset - anchorThirds},
               0,${meetupYCoord + anchorThirds},
               0,${meetupYCoord}
              L0,${topYCoord}`;
    })
    .attr('fill', 'none')
    .attr('stroke', 'black')
    .attr('opacity', d => {
      return d.layers.length === 1 && d.layers[0] === 'Meetup'
        ? 0.2 : 0.75;
    });

  // Add / lay out context dots
  let dots = sources.selectAll('.dot').data(d => d.contexts, d => d);
  dots.exit().remove();
  const dotsEnter = dots.enter().append('circle').classed('dot', true);
  dots = dots.merge(dotsEnter);

  dots
    .attr('r', d => d === 'Meetup' ? 3 : 4)
    .attr('cy', d => layerScale(d))
    .attr('fill', 'black')
    .attr('opacity', d => d === 'Meetup' ? 0.25 : 0.5);
};
