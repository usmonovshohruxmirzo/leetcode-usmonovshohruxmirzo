// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

let createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};
