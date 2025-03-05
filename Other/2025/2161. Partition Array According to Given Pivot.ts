function pivotArray(nums: number[], pivot: number): number[] {
  const less: number[] = [];
  const equal: number[] = [];
  const greater: number[] = [];

  for (const num of nums) {
    if (num < pivot) less.push(num);
    else if (num == pivot) equal.push(num);
    else greater.push(num);
  }

  return [...less, ...equal, ...greater];
}
