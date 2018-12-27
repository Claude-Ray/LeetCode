package problem179

import (
	"sort"
	"strconv"
	"strings"
)

type strSlice []string

func (s strSlice) Len() int {
	return len(s)
}

func (s strSlice) Less(i, j int) bool {
	return s[i]+s[j] > s[j]+s[i]
}

func (s strSlice) Swap(i, j int) {
	s[i], s[j] = s[j], s[i]
}

func largestNumber(nums []int) string {
	var strs strSlice
	for _, n := range nums {
		strs = append(strs, strconv.Itoa(n))
	}
	sort.Sort(strs)
	if strs[0] == "0" {
		return "0"
	}
	return strings.Join(strs, "")
}
