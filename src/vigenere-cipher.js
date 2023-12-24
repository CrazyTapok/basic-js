const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isReverse = true){
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.isReverse = isReverse;
  }

  encrypt(phrase, key) {
    if (phrase === null || phrase === undefined || key === null || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    let indexKey = 0;
    let arrayLetters = phrase.split('');
    let arrayNewLetters = [];

    for (let i = 0; i < arrayLetters.length; i += 1) {
      let letterIndex = this.alphabet.indexOf(arrayLetters[i].toUpperCase());

      if (letterIndex !== -1) {
        if (indexKey >= key.length) {
          indexKey = 0;
        }

        let newIndexLetter = (letterIndex + this.alphabet.indexOf(key[indexKey].toUpperCase())) % 26;
        indexKey += 1;
        arrayNewLetters.push(this.alphabet[newIndexLetter]);
      }else{
        arrayNewLetters.push(arrayLetters[i]);
      }
    }
    let answer = this.isReverse ? arrayNewLetters.join('') : arrayNewLetters.reverse().join('');
    return answer;
  }

  decrypt(phrase, key) {
    if (phrase === null || phrase === undefined || key === null || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    let indexKey = 0;
    let arrayLetters = phrase.split('');
    let arrayNewLetters = [];

    for (let i = 0; i < arrayLetters.length; i += 1) {
      let letterIndex = this.alphabet.indexOf(arrayLetters[i].toUpperCase());

      if (letterIndex !== -1) {
        if (indexKey >= key.length) {
          indexKey = 0;
        }

        let newIndexLetter = (letterIndex - this.alphabet.indexOf(key[indexKey].toUpperCase())) % 26;

        if (newIndexLetter < 0) {
          newIndexLetter = (newIndexLetter + 26) % 26;
        }

        indexKey += 1;
        arrayNewLetters.push(this.alphabet[newIndexLetter]);
      }else{
        arrayNewLetters.push(arrayLetters[i]);
      }
    }
    let answer = this.isReverse ? arrayNewLetters.join('') : arrayNewLetters.reverse().join('');
    return answer;
  }
}

module.exports = {
  VigenereCipheringMachine
};
