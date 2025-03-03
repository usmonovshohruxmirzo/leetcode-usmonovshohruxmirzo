function countAsterisks(s: string): number {
  let count: number = 0;
  let flag: boolean = true;
  for (const char of s) {
    if (flag && char === "*") count++;
    if (char === "|") flag = !flag;
  }
  return count;
}
