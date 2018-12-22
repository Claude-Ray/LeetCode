package three_sum

import (
	"reflect"
	"testing"
)

func Test_threeSum(t *testing.T) {
	cases := [][]int{
		{-1, 0, 1, 2, -1, -4},
		{0, 0, 0, 0, 0, 0},
	}

	results := [][][]int{
		{{-1, -1, 2}, {-1, 0, 1}},
		{{0, 0, 0}},
	}

	for i := 0; i < len(cases); i++ {
		if !reflect.DeepEqual(threeSum(cases[i]), results[i]) {
			t.Error("not equal")
		}
	}
}
