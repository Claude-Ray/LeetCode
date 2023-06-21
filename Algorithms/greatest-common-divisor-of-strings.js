/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  const gcdLength = gcd(str1.length, str2.length);
  const gcdStr = str1.slice(0, gcdLength);
  return canDivided(str1, gcdStr) && canDivided(str2, gcdStr) ? gcdStr : '';
};

function canDivided(s, t) {
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < t.length; j++) {
      if (s[i++] !== t[j]) return false;
    }
    i--;
  }
  return true;
}

function gcd(a, b) {
  if (b) while ((a %= b) && (b %= a));
  return a + b;
}
