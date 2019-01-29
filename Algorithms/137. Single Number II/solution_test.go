package problem137

import "testing"

func Test_singleNumber(t *testing.T) {
	cases := [][]int{
		{2, 2, 3, 2},
		{0, 1, 0, 1, 0, 1, 99},
		{-2, -2, 1, 1, -3, 1, -3, -3, -4, -2},
	}
	results := []int{
		3,
		99,
		-4,
	}
	for i := 0; i < len(results); i++ {
		if ret := singleNumber(cases[i]); ret != results[i] {
			t.Error("Case", i, "error:", ret)
		}
	}
}
