/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
var FindSumPairs = function (nums1, nums2) {
  this.nums1 = nums1;
  this.nums2 = nums2;
  this.set1 = new Set(nums1);
  this.map1 = getMap(nums1);
  this.map2 = getMap(nums2);
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function (index, val) {
  if (!val) return;
  this.map2[this.nums2[index]]--;
  if (!this.map2[this.nums2[index]]) delete this.map2[this.nums2[index]];
  const n = (this.nums2[index] += val);
  this.map2[n] = this.map2[n] ? ++this.map2[n] : 1;
};

/**
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function (tot) {
  let result = 0;
  for (const num of this.set1) {
    const diff = tot - num;
    if (this.map2[diff]) {
      result += this.map1[num] * this.map2[diff];
    }
  }
  return result;
};

/**
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */

function getMap(nums) {
  const map = {};
  for (const num of nums) {
    map[num] = map[num] ? ++map[num] : 1;
  }
  return map;
}
