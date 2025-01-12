function capitalizeTitle(title: string): string {
  const words: string[] = title.toLowerCase().split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 3) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
  }
  return words.join(" ");
}

// Test cases
console.log(capitalizeTitle("capiTalIze t1He titLe of"));
