class Solution {
public:
  int rangeBitwiseAnd(int m, int n) {
    if (m == n)
      return m;
    if (m == 0)
      return 0;
    int res = m & n;
    if (res == 0)
      return 0;
    int diff = n - m;
    int idx = 0;
    while (diff) {
      diff >>= 1;
      ++idx;
    }
    return (res >> idx) << idx;
  }
};
