/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const uf = new UnionFind(grid);
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '0') continue;
      for (const [x, y] of [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
      ]) {
        const r = i + x;
        const c = j + y;
        if (
          r >= 0 &&
          c >= 0 &&
          r < grid.length &&
          c < grid[0].length &&
          grid[r][c] === '1'
        ) {
          uf.union(i * grid[0].length + j, r * grid[0].length + c);
        }
      }
    }
  }
  return uf.count;
};

class UnionFind {
  constructor(grid) {
    this.id = [];
    this.count = 0;
    let index = 0;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === '1') {
          this.count++;
          this.id[index] = index;
        } else {
          this.id[index] = 0;
        }
        index++;
      }
    }
  }

  find(p) {
    if (p === this.id[p]) return p;
    return (p = this.find(this.id[p]));
  }

  union(a, b) {
    const i = this.find(a);
    const j = this.find(b);
    if (i === j) return;
    this.id[i] = j;
    this.count--;
  }
}
