package problem371

import "testing"

func Test_getSum(t *testing.T) {
	a := []int{
		1,
		-2,
	}
	b := []int{
		2,
		3,
	}
	results := []int{
		3,
		1,
	}
	for i := 0; i < len(results); i++ {
		if ret := getSum(a[i], b[i]); ret != results[i] {
			t.Error("Case", i, "error:", ret)
		}
	}
}
