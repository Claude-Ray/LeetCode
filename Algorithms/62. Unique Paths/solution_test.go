package problem62

import "testing"

func Test_uniquePaths(t *testing.T) {
	M := []int{
		7,
		3,
	}
	N := []int{
		3,
		2,
	}
	results := []int{
		28,
		3,
	}

	for i := 0; i < len(results); i++ {
		if uniquePaths(M[i], N[i]) != results[i] {
			t.Error("No.", i, "not equal")
		}
	}
}
