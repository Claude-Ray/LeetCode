package problem26

import (
	"reflect"
	"testing"
)

func Test_removeDuplicates(t *testing.T) {
	cases := [][]int{
		{1, 1, 2},
		{0, 0, 1, 1, 1, 2, 2, 3, 3, 4},
	}

	results := []int{
		2,
		5,
	}

	extResults := [][]int{
		{1, 2},
		{0, 1, 2, 3, 4},
	}

	for i := 0; i < len(cases); i++ {
		length := removeDuplicates(cases[i])
		if length != results[i] {
			t.Error("lengths are not equal")
		}
		if !reflect.DeepEqual(cases[i][:length], extResults[i]) {
			t.Error("arrays are not equal")
		}
	}
}
