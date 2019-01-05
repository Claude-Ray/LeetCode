package problem127

import "testing"

func Test_ladderLength(t *testing.T) {
	beginWords := []string{
		"hit",
		"hot",
		"hot",
	}
	endWords := []string{
		"cog",
		"dog",
		"dog",
	}
	wordLists := [][]string{
		{"hot", "dot", "dog", "lot", "log", "cog"},
		{"hot", "dog", "dot", "hog"},
		{"hot", "dog", "dot"},
	}
	results := []int{
		5,
		3,
		3,
	}
	for i := 0; i < len(results); i++ {
		if ret := ladderLength(beginWords[i], endWords[i], wordLists[i]); ret != results[i] {
			t.Error("Case", i, "error:", ret)
		}
	}
}
