package problem136

import "testing"

func Test_singleNumber(t *testing.T) {
	cases := [][]int{
		{2, 2, 1},
		{4, 1, 2, 1, 2},
	}
	results := []int{
		1,
		4,
	}
	for i := 0; i < len(results); i++ {
		if ret := singleNumber(cases[i]); ret != results[i] {
			t.Error("Case", i, "error:", ret)
		}
	}
}
