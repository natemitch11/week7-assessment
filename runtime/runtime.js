const perf = require("execution-time")();

function doublerAppend(nums) {
  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.push(num);
  }
}

function doublerInsert(nums) {
  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.unshift(num);
  }
}

function getSizedArray(size) {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push(i);
  }
  return array;
}

// const tinyArray = getSizedArray(10);
// const smallArray = getSizedArray(100);
// const mediumArray = getSizedArray(1000);
// const largeArray = getSizedArray(10000);
// const extraLargeArray = getSizedArray(100000);

const arrObj = {
  tinyArray: getSizedArray(10),
  smallArray: getSizedArray(100),
  mediumArray: getSizedArray(1000),
  largeArray: getSizedArray(10000),
  extraLargeArray: getSizedArray(100000),
};

// How long does it take to double every number in a given
// array?

// Try it with first function
// perf.start();                     // Starts timer
// doublerAppend(extraLargeArray);
// let resultsAppend = perf.stop();  // Stops timer and save time results

function appendRuntime(object) {
  Object.entries(object).map(([key, value]) => {
    perf.start();
    doublerAppend(value);
    let resultsAppend = perf.stop().preciseWords;
    console.log(key, ":", resultsAppend);
  });
}

// Try it with second function
// perf.start();
// doublerInsert(extraLargeArray);
// let resultsInsert = perf.stop();

function insertRuntime(object) {
  Object.entries(object).map(([key, value]) => {
    perf.start();
    doublerInsert(value);
    let resultsInsert = perf.stop().preciseWords;
    console.log(key, ":", resultsInsert);
  });
}

console.log("----------Results for the Append tests-----------");
console.log(appendRuntime(arrObj));
console.log("----------Results for the Insert tests-----------");
console.log(insertRuntime(arrObj));
