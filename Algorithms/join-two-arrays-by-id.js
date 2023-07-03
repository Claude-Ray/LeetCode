/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  const map = {};
  for (const item of arr1) map[item.id] = item;
  for (const item of arr2)
    map[item.id] = {
      ...map[item.id],
      ...item,
    };
  return Object.values(map);
};
