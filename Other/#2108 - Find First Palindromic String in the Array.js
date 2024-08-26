var firstPalindrome = function (words) {
  let result = [];
  let fPalindrome = [];

  for (let i = 0; i < words.length; i++) {
    let rwords = words[i].split("").reverse().join("");
    result.push(rwords);

    if (result[i] === words[i]) {
      fPalindrome.push(result[i]);
      return fPalindrome[0];
    }
  }

  return "";
};
