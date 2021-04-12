/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const y = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      y.push(i);
    }
  }
  arr.sort((a, b) => a - b);
  for (let k = 0; k < arr.length; k++) {
    const i = 0;
    if (arr[i] === -1) {
      arr.splice(i, i + 1);
    }
  }
  for (let i = 0; i < y.length; i++) {
    arr.splice(y[i], 0, -1);
  }
  return arr;
}

module.exports = sortByHeight;
