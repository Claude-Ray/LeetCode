/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  const map = {};
  for (let i = 0; i < secret.length; i++) {
    if (map[secret[i]]) map[secret[i]]++;
    else map[secret[i]] = 1;
  }
  let A = 0;
  let B = 0;
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === secret[i]) {
      map[guess[i]]--;
      A++;
    }
  }
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] !== secret[i] && map[guess[i]]) {
      map[guess[i]]--;
      B++;
    }
  }
  return `${A}A${B}B`;
};
