const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arrayDigit = n.toString().split('');
  let maxDigit = 0
  let indexDigit = 0;

  for (let i = 0; i < arrayDigit.length; i += 1) {
    let tmpArrayDigit = n.toString().split('');
    tmpArrayDigit.splice(i, 1);
    let newDigit = Number(tmpArrayDigit.join(''));

    if (newDigit > maxDigit) {
      maxDigit = newDigit;
      indexDigit = i;
    }
  }

  arrayDigit.splice(indexDigit, 1);

  let answer = Number(arrayDigit.join(''));

  return answer;
}

module.exports = {
  deleteDigit
};
