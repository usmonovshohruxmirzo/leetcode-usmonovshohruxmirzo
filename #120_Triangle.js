let Triangle = function (triangle) {
  for (let i = 0; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (triangle[i - 1])
        triangle[i][j] =
          Math.min(
            ...[triangle?.[i - 1]?.[j - 1], triangle?.[i - 1]?.[j]].filter(
              (num) => num !== undefined
            )
          ) + triangle[i][j];
    }
  }
  return Math.min(...triangle[triangle.length - 1]);
};

console.log(Triangle([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
