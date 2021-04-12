/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let uu = 0;
  const hh = matrix;
  let i = 0;
  let j = 0;

  while (i < hh.length - 1) {
    while (j < hh[i].length) {
      if (hh[i][j] === 0) {
        hh[i + 1][j] = 0;
      }
      j++;
    }
    j = 0;
    i++;
  }
  for (let k = 0; k < hh.flat().length; k++) {
    uu += hh.flat()[k];
  }
  return uu;
}

module.exports = getMatrixElementsSum;
