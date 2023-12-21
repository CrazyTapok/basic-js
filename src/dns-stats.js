const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let answer = {};

  for (let i = 0; i < domains.length; i += 1) {
    let array = domains[i].split('.').reverse();
    let field = '';
    for (let j = 0; j < array.length; j += 1) {
      field = field.concat(`.${array[j]}`);
      if (answer.hasOwnProperty(field)) {
        answer[field] = answer[field] + 1;
      }else{
        answer[field] = 1;
      }
    }
  }

  return answer;
}

module.exports = {
  getDNSStats
};
