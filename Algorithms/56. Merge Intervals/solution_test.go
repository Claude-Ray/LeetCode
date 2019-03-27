package problem56

import (
	"reflect"
	"testing"
)

func Test_merge(t *testing.T) {
	intervals := [][][]int{
		{{0, 4}, {1, 4}},
		{{1, 3}, {1, 3}},
		{{2, 3}, {4, 5}, {6, 7}, {8, 9}, {1, 10}},
	}
	results := [][][]int{
		{{0, 4}},
		{{1, 3}},
		{{1, 10}},
	}
	for i := 0; i < len(results); i++ {
		ret := merge(genIntervals(intervals[i]))
		if !reflect.DeepEqual(ret, genIntervals(results[i])) {
			t.Error("Case", i, "error:", ret)
		}
	}
}

func genIntervals(list [][]int) []Interval {
	intervals := []Interval{}
	for i := 0; i < len(list); i++ {
		intervals = append(intervals, Interval{list[i][0], list[i][1]})
	}
	return intervals
}
