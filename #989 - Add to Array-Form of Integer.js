let addToArrayForm = function (num, k) {
  return [...(BigInt(num.join("")) + BigInt(k)).toString()];
};
