package problem56

import "sort"

type Interval struct {
	Start int
	End   int
}

type IntervalSlice []Interval

func (is IntervalSlice) Len() int {
	return len(is)
}

func (is IntervalSlice) Less(m, n int) bool {
	return is[m].Start < is[n].Start
}

func (is IntervalSlice) Swap(m, n int) {
	is[m], is[n] = is[n], is[m]
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func merge(intervals []Interval) []Interval {
	sort.Sort(IntervalSlice(intervals))
	for i := 0; i < len(intervals); i++ {
		for j := i + 1; j < len(intervals); j++ {
			for j < len(intervals) && intervals[i].End >= intervals[j].Start {
				intervals[i].End = max(intervals[i].End, intervals[j].End)
				if j < len(intervals)-1 {
					intervals = append(intervals[:j], intervals[j+1:]...)
				} else {
					intervals = intervals[:j]
				}
			}
		}
	}
	return intervals
}
