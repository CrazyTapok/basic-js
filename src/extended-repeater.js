const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let myOptions = {};

  myOptions['repeatTimes'] = options.hasOwnProperty('repeatTimes') ? options.repeatTimes : 1;
  myOptions['separator'] = options.hasOwnProperty('separator') ? `${options.separator}` : '+';
  myOptions['addition'] = options.hasOwnProperty('addition') ? `${options.addition}` : '';
  myOptions['additionRepeatTimes'] = options.hasOwnProperty('additionRepeatTimes') ? options.additionRepeatTimes : 1;
  myOptions['additionSeparator'] = options.hasOwnProperty('additionSeparator') ? `${options.additionSeparator}` : '|';

  let array = [];
  for (let i = 0; i < myOptions.additionRepeatTimes; i += 1) {
    array.push(myOptions.addition);
  }
  let strAddition = array.join(myOptions.additionSeparator);
  array = [];
  for (let i = 0; i < myOptions.repeatTimes; i += 1) {
    array.push(`${str}${strAddition}`);
  }

  return array.join(myOptions.separator);
}

module.exports = {
  repeater
};
