/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  if (s.length < t.length) return 0;
  const matrix = Array.from({ length: s.length + 1 }).map(() =>
    Array(t.length + 1)
      .fill(0, 1)
      .fill(1, 0, 1)
  );
  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= t.length && j <= i; j++) {
      matrix[i][j] =
        s[i - 1] === t[j - 1]
          ? matrix[i - 1][j] + matrix[i - 1][j - 1]
          : matrix[i - 1][j];
    }
  }
  return matrix[s.length][t.length];
};
