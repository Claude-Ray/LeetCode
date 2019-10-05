#include <bitset>

class Solution {
public:
  bool isPowerOfTwo(int n) {
    if (n <= 0)
      return false;
    std::bitset<32> bn(n);
    int r = 0;
    for (int i = 0; i < 32; i++) {
      r += bn[i];
    }
    return r == 1;
  }
};
