var finalValueAfterOperations = function (operations) {
  let count = 0;
  let i = 0;
  while (i < operations.length) {
    if (operations[i].includes("+")) {
      count++;
    } else {
      count--;
    }
    i++;
  }
  return count;
};
