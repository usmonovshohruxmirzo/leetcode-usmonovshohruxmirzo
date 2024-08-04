var rangeSum = function (nums, n, left, right) {
  const MOD = 1000000007;
  let arr = [];

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let sum = nums.slice(i, j + 1).reduce((acc, total) => (acc += total), 0);
      arr.push(sum);
    }
  }
  arr = arr.sort((a, b) => a - b);
  let res = arr
    .slice(left - 1, right)
    .reduce((acc, total) => (acc += total), 0);

  return res % MOD;
};
