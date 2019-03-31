package problem56

import "sort"

type Interval struct {
	Start int
	End   int
}

func merge(intervals []Interval) []Interval {
	if len(intervals) == 0 {
		return []Interval{}
	}
	sort.Slice(intervals, func(m, n int) bool {
		return intervals[m].Start < intervals[n].Start
	})
	results := []Interval{}
	current := intervals[0]
	for i := 1; i < len(intervals); i++ {
		if current.End >= intervals[i].Start {
			current.End = max(current.End, intervals[i].End)
		} else {
			results = append(results, current)
			current = intervals[i]
		}
	}
	results = append(results, current)
	return results
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
