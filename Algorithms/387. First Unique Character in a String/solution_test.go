package problem387

import "testing"

func Test_firstUniqChar(t *testing.T) {
	cases := []string{
		"leetcode",
		"loveleetcode",
	}
	results := []int{
		0,
		2,
	}

	for i := 0; i < len(results); i++ {
		if ret := firstUniqChar(cases[i]); ret != results[i] {
			t.Error("Case", i, "error:", ret)
		}
	}
}
