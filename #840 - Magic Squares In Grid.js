var numMagicSquaresInside = (g, p, q, s = 0) => (
  g.forEach(
    (r, i) => (
      (p = g[i + 1]),
      (q = g[i - 1]),
      p &&
        q &&
        r.forEach(
          (c, j) =>
            c == 5 &&
            p[j] % 5 &&
            r[j - 1] % 5 &&
            q[j + 1] % 5 &&
            p[j] + q[j] == 10 &&
            r[j - 1] + r[j + 1] == 10 &&
            p[j - 1] + q[j + 1] == 10 &&
            p[j + 1] + q[j - 1] == 10 &&
            p[j - 1] + p[j] + p[j + 1] == 15 &&
            p[j - 1] + r[j - 1] + q[j - 1] == 15 &&
            ++s
        )
    )
  ),
  s
);
