const perf = require('execution-time')();

class AddCache {
  constructor() {
    this.cache = {};
  }

  sumZero(array) {
    perf.start();
    array.sort();
    for (let i = 0; i < array.length; i++) {
      if (array[i] < 0 && array.includes(array[i] * -1)) {
        let results = perf.stop().preciseWords;
        console.log("Sum Zero Runtime:", results);
        return true;
      } else if (array[i] >= 0) {
        let results = perf.stop().preciseWords;
        console.log("Sum Zero Runtime:", results);
        return false;
      }
    }
  }

  countLetters(str) {
    this.cache = {};
    str = str.toLowerCase().replace(/([^a-z])+/g, "");
    for (let i = 0; i < str.length; i++) {
      if (this.cache.hasOwnProperty(str[i])) {
        this.cache[str[i]]++;
      } else {
        this.cache[str[i]] = 0;
      }
    }
    return this.cache;
  }

  uniqueChar(string) {
    perf.start();
    let values = Object.values(this.countLetters(string)).sort().pop();
    let results = perf.stop().preciseWords;
    console.log("Unique Character Runtime:", results);
    return values === 0 ? true : false;
  }

  isPangram(string) {
    perf.start();
    let values = Object.keys(this.countLetters(string));
    let results = perf.stop().preciseWords;
    console.log("Is a Pangram Runtime:", results);
    return values.length === 26 ? true : false;
  }
}

let testArr1 = [1,2,3,4,5,6,-7,-8,-5]
let testArr2 = [1,2,3,4,5,6,-7,-8,-9]

let analysis = new AddCache()

console.log('Add to Zero?:', analysis.sumZero(testArr1)) //Should return true
console.log('Add to Zero?:',analysis.sumZero(testArr2)) //Should return false
console.log('Unique Characters?:',analysis.uniqueChar('Monday')) //Should return true
console.log('Unique Characters?:',analysis.uniqueChar('Moonday')) //Should return false
console.log('Is Pangram?:',analysis.isPangram('The quick brown fox jumps over the lazy dog!')) //Should return false
console.log('Is Pangram?:',analysis.isPangram('I like cats, but not mice')) //Should return false
