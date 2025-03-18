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
  let left = 0,
    bitmask = 0,
    maxLen = 0;

  for (let right = 0; right < nums.length; right++) {
    while (bitmask & nums[right]) bitmask ^= nums[left++];
    bitmask |= nums[right];
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
};

console.log(longestNiceSubarray([1, 3, 8, 48, 10]));
