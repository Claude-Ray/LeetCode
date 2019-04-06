package problem70

import "testing"

func Test_climbStairs(t *testing.T) {
	cases := []int{
		2,
		3,
	}
	results := []int{
		2,
		3,
	}
	for i := 0; i < len(results); i++ {
		if ret := climbStairs(cases[i]); ret != results[i] {
			t.Error("Case", i, "error:", ret)
		}
	}
}
