function maximumWealth(accounts: number[][]): number {
  return Math.max(...accounts.map((c) => c.reduce((a, b) => a + b, 0)));
}
