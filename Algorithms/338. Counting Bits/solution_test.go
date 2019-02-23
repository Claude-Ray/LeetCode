package problem338

import (
	"reflect"
	"testing"
)

func Test_countBits(t *testing.T) {
	cases := []int{
		2,
		5,
	}
	results := [][]int{
		{0, 1, 1},
		{0, 1, 1, 2, 1, 2},
	}
	for i := 0; i < len(results); i++ {
		if ret := countBits(cases[i]); !reflect.DeepEqual(ret, results[i]) {
			t.Error("Case", i, "error:", ret)
		}
	}
}
