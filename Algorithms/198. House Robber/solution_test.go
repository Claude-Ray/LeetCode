package problem198

import "testing"

func Test_rob(t *testing.T) {
	cases := [][]int{
		{1, 2, 3, 1},
		{2, 7, 9, 3, 1},
	}
	results := []int{
		4,
		12,
	}
	for i := 0; i < len(results); i++ {
		if ret := rob(cases[i]); ret != results[i] {
			t.Error("Case", i, "error:", ret)
		}
	}
}
