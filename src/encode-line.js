const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arrayLetters = str.toString().split('');

  if (arrayLetters.length === 0) {
    return '';
  }

  let answer = [];
  for (let i = 0; i < arrayLetters.length; ) {
    let letter = arrayLetters[i];
    let count = 0;

    while (letter === arrayLetters[i]) {
      count += 1;
      i += 1;
    }

    if (count > 1) {
      answer.push(`${count}${letter}`);
    }else{
      answer.push(`${letter}`);
    }
  }

  return answer.join('');
}

module.exports = {
  encodeLine
};
