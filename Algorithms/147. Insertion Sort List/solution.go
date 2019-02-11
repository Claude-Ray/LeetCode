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
	sortedHead := &ListNode{Next: head}
	curPre := head
	for curPre != nil && curPre.Next != nil {
		curNode := curPre.Next
		if curNode.Val >= curPre.Val {
			curPre = curNode
			continue
		}
		curPre.Next = curNode.Next
		sNext := sortedHead.Next
		sHead := sortedHead
		for sNext.Val < curNode.Val {
			sHead = sNext
			sNext = sNext.Next
		}
		sHead.Next = curNode
		curNode.Next = sNext
	}
	return sortedHead.Next
}
