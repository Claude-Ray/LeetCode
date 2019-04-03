package problem101

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func isSymmetric(root *TreeNode) bool {
	if root == nil {
		return true
	}
	return isSymmetricSubtree(root.Left, root.Right)
}

func isSymmetricSubtree(left, right *TreeNode) bool {
	if left == nil && right == nil {
		return true
	}
	if left == nil || right == nil {
		return false
	}
	return left.Val == right.Val &&
		isSymmetricSubtree(left.Left, right.Right) &&
		isSymmetricSubtree(left.Right, right.Left)
}
