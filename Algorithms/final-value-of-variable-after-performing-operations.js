/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  const map = { 'X++': 1, '++X': 1, '--X': -1, 'X--': -1 };
  return operations.reduce((final, op) => final + map[op], 0);
};
