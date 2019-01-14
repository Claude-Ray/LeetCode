package problem46

import (
	"reflect"
	"testing"
)

func Test_permute(t *testing.T) {
	cases := [][]int{
		{1, 2, 3},
	}
	results := [][][]int{
		{
			{1, 2, 3},
			{1, 3, 2},
			{2, 1, 3},
			{2, 3, 1},
			{3, 1, 2},
			{3, 2, 1},
		},
	}
	for i := 0; i < len(results); i++ {
		if ret := permute(cases[i]); !reflect.DeepEqual(ret, results[i]) {
			t.Error("Case", i, "error:", ret)
		}
	}
}
