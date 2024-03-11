/*
    Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

    arr[i] - number from the arr
    i - index of arr[i]

filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.
*/

const filter = (array, callback) => {
  const filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
};

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(filter(numbers, (value) => value <= 5));
