var reverseWords = function (s) {
  let strToArr = s.split(" ");
  let result = [];
  for (let i = 0; i < strToArr.length; i++) {
    result.push(strToArr[i].split("").reverse().join(""));
  }
  return result.join(" ");
};

let testCase1 = "Let's take LeetCode contest";
let testCase2 = "Mr Ding";

console.log(reverseWords(testCase1));
