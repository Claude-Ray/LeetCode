/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function (a, b) {
  a = a % 1337;
  if (a === 1 || a === 0) return a;
  const exponent = b.reduce((sum, cur) => sum * 10n + BigInt(cur), 0n);
  const record = [a];
  const map = { [a]: 1 };
  let product = a;
  for (let i = 1; i < exponent; i++) {
    product = (product * a) % 1337;
    if (map[product]) return record[(exponent % BigInt(record.length)) - 1n];
    record.push(product);
    map[product] = 1;
  }
  return product;
};
