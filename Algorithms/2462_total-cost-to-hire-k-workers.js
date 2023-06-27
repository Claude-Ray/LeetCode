/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function (costs, k, candidates) {
  let total = 0;
  let left = 0;
  let right = costs.length - 1;
  let leftQueue = new MyMinPriorityQueue();
  let rightQueue = new MyMinPriorityQueue();
  while (candidates-- && left <= right) {
    leftQueue.push(costs[left++]);
    left <= right && rightQueue.push(costs[right--]);
  }
  for (let i = 0; i < k; i++) {
    if (!leftQueue.size() && !rightQueue.size()) break;
    if (leftQueue.size() && rightQueue.size()) {
      if (leftQueue.peek() <= rightQueue.peek()) {
        total += leftQueue.pop();
        left <= right && leftQueue.push(costs[left++]);
      } else {
        total += rightQueue.pop();
        left <= right && rightQueue.push(costs[right--]);
      }
    } else if (leftQueue.size()) {
      total += leftQueue.pop();
    } else {
      total += rightQueue.pop();
    }
  }
  return total;
};

class MyMinPriorityQueue {
  constructor() {
    this.queue = [];
  }
  push(n) {
    let left = 0;
    let right = this.queue.length;
    // find the first one less than n
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (this.queue[mid] === n) {
        right = mid;
        break;
      } else if (this.queue[mid] < n) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    this.queue.splice(right, 0, n);
  }
  pop() {
    return this.queue.pop();
  }
  peek() {
    return this.queue[this.queue.length - 1];
  }
  size() {
    return this.queue.length;
  }
}
