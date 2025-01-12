function findGCD(nums: number[]): number {
  let a: number = Math.min(...nums);
  let b: number = Math.max(...nums);

  const euclidean = (a: number, b: number) => {
    if (b === 0) return a;
    return euclidean(b, a % b);
  };

  return euclidean(b, a);
}

// Test cases
console.log(findGCD([7, 5, 6, 8, 3]));
console.log(findGCD([3, 3]));
