// ./functions/isCurrent.js
const GRID = require("./grid").GRID;
const lightCell = require("./lightCell").lightCell;

/**
 * [isCurrent returns true if the input coord for GRID yields a current]
 * @param  {[Stirng]}  coord [String value ("E5") for a GRID cell]
 * @return {Boolean}       [true if GRID cell is a current ("~")]
 */
const isCurrent = coord => lightCell(coord) === "~";

module.exports = {
  isCurrent
};