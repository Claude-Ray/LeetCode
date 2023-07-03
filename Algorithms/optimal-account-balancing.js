/**
 * @param {number[][]} transactions
 * @return {number}
 */
var minTransfers = function (transactions) {
  const person = Array(12).fill(0);
  for (const [from, to, amount] of transactions) {
    person[from] -= amount;
    person[to] += amount;
  }
  const debt = person.filter(n => n < 0).map(n => -n);
  const hold = person.filter(n => n > 0);
  const res = { min: Number.MAX_SAFE_INTEGER };
  backtracing(hold, 0, debt, 0, res);
  return res.min === Number.MAX_SAFE_INTEGER ? 0 : res.min;
};

function backtracing(hold, index, debt, step, res) {
  for (let i = 0; i < debt.length; i++) {
    if (debt[i] === 0) continue;
    const tmp = hold[index] > debt[i] ? debt[i] : hold[index];
    hold[index] -= tmp;
    debt[i] -= tmp;
    if (index === hold.length - 1 && hold[index] === 0) {
      res.min = Math.min(res.min, step + 1);
    }
    backtracing(hold, hold[index] ? index : index + 1, debt, step + 1, res);
    debt[i] += tmp;
    hold[index] += tmp;
  }
}
