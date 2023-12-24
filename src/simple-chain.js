const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  array: [],

  getLength() {
   return this.array.length;
  },
  addLink(value) {
    let newItem = value === undefined ? '' : value;
    this.array.push(`( ${newItem} )`);
    return this;
  },
  removeLink(position) {
    if (position > this.array.length || position <= 0 || !Number.isInteger(position)) {
      this.array = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.array.splice((position - 1), 1);
    return this;
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    let answer = this.array.join('~~');
    this.array = [];
    return answer;
  }
};

module.exports = {
  chainMaker
};
