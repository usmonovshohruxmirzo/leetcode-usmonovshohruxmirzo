var minimumPushes = function(word) {
    let freq = Array(123).fill(0);
    for (let i = 0, n = word.length; i < n; i++) freq[word.charCodeAt(i)]++;
    return freq.sort((a ,b) => b - a).reduce((acc, f, i) => acc + Math.floor(i / 8 + 1) * f, 0);
};