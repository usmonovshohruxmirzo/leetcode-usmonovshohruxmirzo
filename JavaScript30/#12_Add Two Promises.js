/*
    Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. 
    The returned promise should resolve with the sum of the two numbers. 
*/

var addTwoPromises = async function (promise1, promise2) {
  const [val1, val2] = await Promise.all([promise1, promise2]);
  return val1 + val2;
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4
