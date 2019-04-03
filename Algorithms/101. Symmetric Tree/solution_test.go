package problem101

import "testing"

func Test_isSymmetric(t *testing.T) {
	pre := [][]int{
		{1, 2, 3, 4, 2, 4, 3},
		{1, 2, 3, 2, 3},
		{1, 2, 3},
	}
	in := [][]int{
		{3, 2, 4, 1, 4, 2, 3},
		{2, 3, 1, 2, 3},
		{2, 1, 3},
	}
	results := []bool{
		true,
		false,
		false,
	}
	for i := 0; i < len(results); i++ {
		if ret := isSymmetric(buildTreeByPreIn(pre[i], in[i])); ret != results[i] {
			t.Error("Case", i, "error:", ret)
		}
	}
}

func buildTreeByPreIn(pre, in []int) *TreeNode {
	preLen := len(pre)
	if preLen != len(in) {
		panic("lengths of preorder and inorder are not equal")
	}
	if preLen == 0 {
		return nil
	}
	root := &TreeNode{
		Val: pre[0],
	}
	if preLen == 1 {
		return root
	}
	i := indexOf(pre[0], in)
	root.Left = buildTreeByPreIn(pre[1:i+1], in[:i])
	root.Right = buildTreeByPreIn(pre[i+1:], in[i+1:])
	return root
}

func indexOf(n int, nums []int) int {
	for k, v := range nums {
		if v == n {
			return k
		}
	}
	panic("nums index out of range")
}
