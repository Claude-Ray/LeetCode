package problem64

import (
	"testing"
)

func Test_minPathSum(t *testing.T) {
	cases := [][][]int{
		{
			{1, 3, 1},
			{1, 5, 1},
			{4, 2, 1},
		},
	}

	results := []int{
		7,
	}

	for i := 0; i < len(cases); i++ {
		if minPathSum(cases[i]) != results[i] {
			t.Error("No", i, "not equal")
		}
	}
}
