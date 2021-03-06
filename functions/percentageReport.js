// ./functions/percentageReport.js
const GRID = require("./grid").GRID;
const getPercentageOfInGrid = require("./getPercentageOfInGrid").getPercentageOfInGrid;

/**
 * [percentageReport returns the proportion of rock and current grids within GRID]
 * @return {[Array]} [Array of proportions of occurrences, of rocks and currents, respectively]
 */
const percentageReport = () => {
  const percentage_of_rocks = getPercentageOfInGrid("^");
  const percentage_of_currents = getPercentageOfInGrid("~");
  
  return [percentage_of_rocks, percentage_of_currents];
};

module.exports = {
  percentageReport
};