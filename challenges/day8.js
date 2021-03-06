// ./day8.js

// ## Challenge #8
// There are also areas where the currents are too strong for boats to be
// effective, and boats run the risk of being smashed up against the
// rocks if they get caught here. Strong currents are indicated with the
// ~ symbol.

// Write a function called isCurrent() which will take in a coordinate in
// the form of 'A4' and return a true or a false boolean value depending
// on whether there is a strong current in that cell or not. (Example:
// isCurrent('E2'); would return true)

const GRID = [
      ["", "", "", "^", "", "", "", "", "", ""],
      ["", "", "v", "", "~", "", "", "", "", ""],
      ["", "v", "", "", "^", "^", "", "", "", ""],
      ["", "", "", "", "^", "^", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "v", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "^", "~", "~", "", "", "", "^", "", ""],
      ["", "^", "", "~", "~", "", "", "", "", ""],
      ["", "^", "", "", "~", "~", "", "", "", ""],
    ];

const isCurrent = coordinate => {
  const convertColumn = coordinate => {
    const letters = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
    const coord_letter = coordinate[0].toUpperCase();
    const col_index = letters.indexOf(coord_letter);
    
    return col_index;
  };
  const convertRow = coordinate => {
    const coord_num = coordinate.length === 3 ? 9 : coordinate[1] - 1;
    
    return coord_num;
  };
  const lightCell = coord => {
    const grid_row = convertRow(coord);
    const row_col = convertColumn(coord);
    
    return GRID[grid_row][row_col];
  };
  const current = "~";
  const is_current = lightCell(coordinate) === current;
  
  return is_current;
};

for (i = 1; i < 11; i++) {
  console.log(isCurrent("E" + i));
}