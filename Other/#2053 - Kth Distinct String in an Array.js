var kthDistinct = function (arr, k) {
  return (
    arr.filter(
      (value, index, array) => array.indexOf(value) === array.lastIndexOf(value)
    )[k - 1] || ""
  );
};
