package problem90

import (
	"reflect"
	"testing"
)

func Test_subsetsWithDup(t *testing.T) {
	cases := [][]int{
		{1, 2, 2},
		{1, 1, 1, 1},
	}
	results := [][][]int{
		{
			{},
			{1},
			{2},
			{1, 2},
			{2, 2},
			{1, 2, 2},
		},
		{
			{},
			{1},
			{1, 1},
			{1, 1, 1},
			{1, 1, 1, 1},
		},
	}
	for i := 0; i < len(results); i++ {
		if ret := subsetsWithDup(cases[i]); !reflect.DeepEqual(ret, results[i]) {
			t.Error("Case", i, "error:", ret)
		}
	}
}
