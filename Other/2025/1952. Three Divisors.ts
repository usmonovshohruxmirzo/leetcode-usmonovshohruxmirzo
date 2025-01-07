function isThree(n: number): boolean {
  let divisors: number = 0;
  for (let i = 1; i <= n; i++) if (n % i == 0) divisors++;
  return divisors === 3 ? true : false;
}
