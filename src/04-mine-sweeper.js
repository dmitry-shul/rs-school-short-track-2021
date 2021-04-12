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
  const y = [];
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].unshift(false);
    matrix[i].push(false);
  }
  for (let i = 0; i < matrix[0].length; i++) {
    y.push(false);
  }
  matrix.unshift(y);
  matrix.push(y);
  let num = 0;
  let strarr = [];
  const arrarr = [];
  for (let i = 1; i < matrix.length - 1; i++) {
    for (let k = 1; k < matrix[0].length - 1; k++) {
      if (matrix[i - 1][k - 1] === true) {
        num++;
      }
      if (matrix[i - 1][k] === true) {
        num++;
      }
      if (matrix[i - 1][k + 1] === true) {
        num++;
      }
      if (matrix[i][k - 1] === true) {
        num++;
      }
      if (matrix[i][k + 1] === true) {
        num++;
      }
      if (matrix[i + 1][k - 1] === true) {
        num++;
      }
      if (matrix[i + 1][k] === true) {
        num++;
      }
      if (matrix[i + 1][k + 1] === true) {
        num++;
      }
      strarr.push(num);
      num = 0;
    }
    arrarr.push(strarr);
    strarr = [];
  }
  return arrarr;
}

module.exports = minesweeper;
