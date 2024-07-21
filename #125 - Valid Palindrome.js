var isPalindrome = function (s) {
  let word = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let rword = word.split("").reverse().join("");
  if (word === rword) return true;
  else return false;
};

let testCase1 = "A man, a plan, a canal: Panama";
let testCase2 = "race a car";
let testCase3 = " ";

console.log(isPalindrome(testCase1));
console.log(isPalindrome(testCase2));
console.log(isPalindrome(testCase3));
