package problem179

import (
	"testing"
)

func Test_largestNumber(t *testing.T) {
	cases := [][]int{
		{10, 2},
		{3, 30, 34, 5, 9},
		{321, 123},
		{0, 0},
		{121, 12},
		{8308, 830},
	}

	results := []string{
		"210",
		"9534330",
		"321123",
		"0",
		"12121",
		"8308830",
	}

	for i := 0; i < len(cases); i++ {
		if largestNumber(cases[i]) != results[i] {
			t.Error("No", i, "not equal")
		}
	}
}
