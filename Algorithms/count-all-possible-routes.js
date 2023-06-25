/**
 * @param {number[]} locations
 * @param {number} start
 * @param {number} finish
 * @param {number} fuel
 * @return {number}
 */
var countRoutes = function (locations, start, finish, fuel) {
  const dp = new Array(locations.length).fill().map(() => ({}));
  return helper(locations, start, finish, fuel, dp);
};

function helper(locations, start, finish, fuel, dp) {
  if (fuel < 0) return 0;
  if (dp[start][fuel] !== undefined) return dp[start][fuel];
  let count = start === finish ? 1 : 0;
  if (fuel === 0) return count;
  const mod = 10 ** 9 + 7;
  for (let i = 0; i < locations.length; i++) {
    if (i !== start) {
      count += helper(
        locations,
        i,
        finish,
        fuel - Math.abs(locations[i] - locations[start]),
        dp
      );
      count %= mod;
    }
  }
  dp[start][fuel] = count;
  return count;
}
