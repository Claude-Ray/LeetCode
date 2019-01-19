package problem86

type ListNode struct {
	Val  int
	Next *ListNode
}

func partition(head *ListNode, x int) *ListNode {
	less := new(ListNode)
	more := new(ListNode)
	newHead := less
	mid := more
	node := head
	for node != nil {
		if node.Val < x {
			less.Next = new(ListNode)
			less = less.Next
			less.Val = node.Val
		} else {
			more.Next = new(ListNode)
			more = more.Next
			more.Val = node.Val
		}
		node = node.Next
	}
	less.Next = mid.Next
	return newHead.Next
}
