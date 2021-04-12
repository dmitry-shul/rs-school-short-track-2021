/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  for (let i = 0; i < s1.length; i++) {
    s2.replace(s1[i], 8);
  }

  let t = s2.match(/8/g);
  if (t == null) {
    t = '';
  }

  return t.length;
}

module.exports = getCommonCharacterCount;
