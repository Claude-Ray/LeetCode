package problem147

/**
 * Definition for singly-linked list.
 */
type ListNode struct {
	Val  int
	Next *ListNode
}

func insertionSortList(head *ListNode) *ListNode {
	if head == nil {
		return nil
	}
	sortedHead := &ListNode{}

	for head != nil {
		node := head
		head = head.Next
		node.Next = nil
		sHead := sortedHead
		for sHead != nil {
			if sHead.Next == nil {
				sHead.Next = node
				break
			}
			if sHead.Next.Val > node.Val {
				sNext := sHead.Next
				sHead.Next = node
				node.Next = sNext
				break
			}
			sHead = sHead.Next
		}
	}
	return sortedHead.Next
}
