/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var makeArrayIncreasing = function (arr1, arr2) {
  arr2.sort((a, b) => a - b);
  let record = { 0: -1 };
  for (let i = 0; i < arr1.length; i++) {
    const newRecord = {};
    for (const ops in record) {
      if (arr1[i] > record[ops])
        newRecord[ops] = newRecord[ops]
          ? Math.min(newRecord[ops], arr1[i])
          : arr1[i];
      const index = binarySearch(arr2, record[ops]);
      if (index > -1)
        newRecord[+ops + 1] = newRecord[+ops + 1]
          ? Math.min(newRecord[+ops + 1], arr2[index])
          : arr2[index];
    }
    record = newRecord;
    if (!Object.keys(record).length) return -1;
  }
  const counts = Object.keys(record);
  return counts.length ? Math.min(...counts) : -1;
};

function binarySearch(arr, target) {
  let l = 0;
  let r = arr.length - 1;
  if (arr[r] <= target) return -1;
  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    if (arr[mid] > target) r = mid;
    else l = mid + 1;
  }
  return l;
}
