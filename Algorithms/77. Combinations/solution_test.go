package problem77

import (
	"reflect"
	"testing"
)

func Test_combine(t *testing.T) {
	N := []int{
		4,
		5,
	}
	K := []int{
		2,
		4,
	}
	results := [][][]int{
		{
			{1, 2},
			{1, 3},
			{1, 4},
			{2, 3},
			{2, 4},
			{3, 4},
		},
		{
			{1, 2, 3, 4},
			{1, 2, 3, 5},
			{1, 2, 4, 5},
			{1, 3, 4, 5},
			{2, 3, 4, 5},
		},
	}

	for i := 0; i < len(results); i++ {
		if !reflect.DeepEqual(combine(N[i], K[i]), results[i]) {
			t.Error("No.", i, "not equal")
		}
	}
}
