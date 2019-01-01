package problem63

import "testing"

func Test_uniquePaths(t *testing.T) {
	cases := [][][]int{
		{
			{0, 0, 0},
			{0, 1, 0},
			{0, 0, 0},
		},
		{
			{1, 0},
		},
	}
	results := []int{
		2,
		0,
	}

	for i := 0; i < len(results); i++ {
		if uniquePathsWithObstacles(cases[i]) != results[i] {
			t.Error("No.", i, "not equal")
		}
	}
}
