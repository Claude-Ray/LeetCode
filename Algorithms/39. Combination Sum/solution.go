package problem39

import "sort"

func combinationSum(candidates []int, target int) [][]int {
	sort.Ints(candidates)
	res := [][]int{}
	backtracing(candidates, target, []int{}, &res)
	return res
}

func backtracing(candidates []int, target int, combination []int, res *[][]int) {
	if target == 0 {
		*res = append(*res, combination)
		return
	}
	if len(candidates) == 0 || target < candidates[0] {
		return
	}
	c := make([]int, len(combination))
	copy(c, combination)
	c = append(c, candidates[0])
	backtracing(candidates, target-candidates[0], c, res)
	backtracing(candidates[1:], target, combination, res)
}
