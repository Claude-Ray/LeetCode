package problem47

import (
	"reflect"
	"testing"
)

func Test_permuteUnique(t *testing.T) {
	cases := [][]int{
		{1, 1, 2},
	}
	results := [][][]int{
		{
			{1, 1, 2},
			{1, 2, 1},
			{2, 1, 1},
		},
	}
	for i := 0; i < len(results); i++ {
		if ret := permuteUnique(cases[i]); !reflect.DeepEqual(ret, results[i]) {
			t.Error("Case", i, "error:", ret)
		}
	}
}
