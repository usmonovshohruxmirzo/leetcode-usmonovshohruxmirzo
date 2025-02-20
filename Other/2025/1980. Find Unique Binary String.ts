// Solution 1
// function findDifferentBinaryString(nums: string[]): string {
//   const answer: string[] = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i][i] == "0") answer.push("1");
//     else answer.push("0");
//   }
//   return answer.join("");
// }

// Solution 2
// function findDifferentBinaryString(nums: string[]): string {
//   let answer = "";
//   for (let i = 0; i < nums.length; i++) {
//     answer += nums[i][i] === "0" ? "1" : "0";
//   }
//   return answer;
// }

// Solution 3
function findDifferentBinaryString(nums: string[]): string {
  return nums.map((num, i) => (num[i] === "0" ? "1" : "0")).join("");
}

// Test Cases
console.log(findDifferentBinaryString(["01", "10"]));
console.log(findDifferentBinaryString(["00", "01"]));
console.log(findDifferentBinaryString(["111", "011", "001"]));
