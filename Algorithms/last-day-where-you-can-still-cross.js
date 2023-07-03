/**
 * @param {number} row
 * @param {number} col
 * @param {number[][]} cells
 * @return {number}
 */
var latestDayToCross = function (row, col, cells) {
  const uf = new UnionFind(row, col);
  const grid = Array.from({ length: row }).map(() => Array(col).fill(0));
  const pos = [0, -1, 1];
  let day = 0;
  for (let [r, c] of cells) {
    const index = --r * col + --c;
    grid[r][c] = 1;
    for (const x of pos) {
      for (const y of pos) {
        const rr = r + x;
        const cc = c + y;
        if (rr >= 0 && cc >= 0 && rr < row && cc < col && grid[rr][cc]) {
          uf.union(index, rr * col + cc);
          const [left, right] = uf.getBounds(index);
          if (left === 0 && right === col - 1) return day;
        }
      }
    }
    day++;
  }
  return day;
};

class UnionFind {
  constructor(row, col) {
    this.id = [];
    this.left = [];
    this.right = [];
    let index = 0;
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        this.id[index] = index;
        this.left[index] = j;
        this.right[index] = j;
        index++;
      }
    }
  }

  find(p) {
    if (p === this.id[p]) return p;
    return (this.id[p] = this.find(this.id[p]));
  }

  union(a, b) {
    const i = this.find(a);
    const j = this.find(b);
    if (i === j) return;
    this.id[i] = j;
    this.left[j] = Math.min(this.left[i], this.left[j]);
    this.right[j] = Math.max(this.right[i], this.right[j]);
  }

  getBounds(p) {
    const root = this.find(p);
    return [this.left[root], this.right[root]];
  }
}
