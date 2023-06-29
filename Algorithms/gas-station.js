/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let index = 0;
  let tank = 0;
  let totalTank = 0;
  for (let i = 0; i < gas.length; i++) {
    tank += gas[i] - cost[i];
    totalTank += gas[i] - cost[i];
    if (tank < 0) {
      index = i + 1;
      tank = 0;
    }
  }
  return totalTank >= 0 ? index : -1;
};

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit2 = function (gas, cost) {
  if (gas.length === 1 && gas[0] >= cost[0]) return 0;
  for (let i = 0; i < gas.length; i++) {
    if (gas[i] <= cost[i]) continue;
    let tank = 0;
    for (let j = i; j < gas.length + i; j++) {
      const idx = j % gas.length;
      tank += gas[idx] - cost[idx];
      if (tank < 0) break;
    }
    if (tank >= 0) return i;
  }
  return -1;
};
