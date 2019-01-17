package problem45

import (
	"reflect"
	"testing"
)

func Test_rotate(t *testing.T) {
	cases := [][][]int{
		{
			{1, 2, 3},
			{4, 5, 6},
			{7, 8, 9},
		},
	}
	results := [][][]int{
		{
			{7, 4, 1},
			{8, 5, 2},
			{9, 6, 3},
		},
	}
	for i := 0; i < len(results); i++ {
		if rotate(cases[i]); !reflect.DeepEqual(cases[i], results[i]) {
			t.Error("Case", i, "error:", cases[i])
		}
	}
}
