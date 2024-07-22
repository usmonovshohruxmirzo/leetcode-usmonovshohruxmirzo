var mostWordsFound = function (sentences) {
  const maxWords = [];
  for (let i = 0; i < sentences.length; i++) {
    maxWords.push(sentences[i].split(" ").length);
  }
  return Math.max(...maxWords);
};
let testCase1 = [
  "alice and bob love leetcode",
  "i think so too",
  "this is great thanks very much",
];
let testCase2 = ["please wait", "continue to fight", "continue to win"];

console.log(mostWordsFound(testCase1));
