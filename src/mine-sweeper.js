const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let map = [];

  for (let i = 0; i < matrix.length; i += 1) {
    let row = [];
    for (let j = 0; j < matrix[0].length; j += 1) {
      row.push(0);
    }
    map.push(row);
  }

  for (let i = 0; i < matrix.length; i += 1) {
    let rowSize = matrix[0].length;
    for (let j = 0; j < rowSize; j += 1) {
      if (matrix[i][j]) {
        if (i === 0 && j === 0) {
          map[i][j+1] += 1;
          map[i+1][j+1] += 1;
          map[i+1][j] += 1;
        } else if (i === 0 && j > 0) {
          map[i][j-1] += 1;
          map[i][j+1] += 1;
          map[i+1][j-1] += 1;
          map[i+1][j] += 1;
          map[i+1][j+1] += 1;
        } else if (i === 0 && j+1 === rowSize) {
          map[i][j-1] += 1;
          map[i+1][j-1] += 1;
          map[i+1][j] += 1;
        } else if (i > 0 && j+1 === rowSize) {
          map[i-1][j] += 1;
          map[i-1][j-1] += 1;
          map[i][j-1] += 1;
          map[i+1][j-1] += 1;
          map[i+1][j] += 1;
        } else if (i+1 === matrix.length && j+1 === rowSize) {
          map[i-1][j] += 1;
          map[i-1][j-1] += 1;
          map[i][j-1] += 1;
        } else if (i+1 === matrix.length && j > 0) {
          map[i][j-1] += 1;
          map[i-1][j-1] += 1;
          map[i-1][j] += 1;
          map[i-1][j+1] += 1;
          map[i][j+1] += 1;
        } else if (i+1 === matrix.length && j === 0) {
          map[i-1][j] += 1;
          map[i-1][j+1] += 1;
          map[i][j+1] += 1;
        } else if (i > 0 && j === 0) {
          map[i-1][j] += 1;
          map[i][j+1] += 1;
          map[i-1][j] += 1;
        } else if (i > 0 && j > 0) {
          map[i-1][j] += 1;
          map[i-1][j+1] += 1;
          map[i][j+1] += 1;
          map[i+1][j+1] += 1;
          map[i+1][j] += 1;
          map[i+1][j-1] += 1;
          map[i][j-1] += 1;
          map[i-1][j-1] += 1;
        }
      }
    }
  }

  return map;
}

module.exports = {
  minesweeper
};
