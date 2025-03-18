/**
 * @param {number[]} nums
 * @return {number}
 */
// var longestNiceSubarray = function (nums) {
//   let left = 0;
//   let bits = new Set();
//   let max = 0;
//   for (let right = 0; right < nums.length; right++) {
//     while ([...bits].some((num) => num & nums[right])) {
//       bits.delete(nums[left]);
//       left++;
//     }
//     bits.add(nums[right]);
//     max = Math.max(max, right - left + 1);
//   }
//   return max;
// };

var longestNiceSubarray = function (nums) {
  let l = 0,
    bitmask = 0,
    max = 0;
  for (let r = 0; r < nums.length; r++) {
    while (bitmask & nums[r]) bitmask ^= nums[l++];
    bitmask |= nums[r];
    max = Math.max(max, r - l + 1);
  }
  return max;
};

console.log(longestNiceSubarray([1, 3, 8, 48, 10]));
