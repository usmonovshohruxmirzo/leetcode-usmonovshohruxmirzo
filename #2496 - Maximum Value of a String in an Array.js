var maximumValue = function (strs) {
  return Math.max(...strs.map((s) => (Number.isInteger(+s) ? +s : s.length)));
};
