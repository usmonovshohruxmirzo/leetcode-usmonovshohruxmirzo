var canBeEqual = function (target, arr) {
  let targetArray = target.sort();
  let array = arr.sort();
  return targetArray.every((value, index) => value === array[index]);
};
