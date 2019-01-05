package problem39

import (
	"reflect"
	"testing"
)

func Test_combinationSum(t *testing.T) {
	cases := [][]int{
		{8, 7, 4, 3},
		{2, 3, 6, 7},
		{2, 3, 5},
	}

	targets := []int{
		11,
		7,
		8,
	}

	results := [][][]int{
		{{3, 4, 4}, {3, 8}, {4, 7}},
		{{2, 2, 3}, {7}},
		{{2, 2, 2, 2}, {2, 3, 3}, {3, 5}},
	}

	for i := 0; i < len(results); i++ {
		if ret := combinationSum(cases[i], targets[i]); !reflect.DeepEqual(ret, results[i]) {
			t.Error("Case", i, "error:", ret)
		}
	}
}
