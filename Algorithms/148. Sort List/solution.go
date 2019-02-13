package problem148

type ListNode struct {
	Val  int
	Next *ListNode
}

func sortList(head *ListNode) *ListNode {
	if head == nil || head.Next == nil {
		return head
	}
	fast, slow := head, head
	i := 0
	for fast.Next != nil {
		if i%2 == 1 {
			slow = slow.Next
		}
		fast = fast.Next
		i++
	}
	second := slow.Next
	slow.Next = nil
	return merge(sortList(head), sortList(second))
}

func merge(a *ListNode, b *ListNode) *ListNode {
	pre := &ListNode{}
	head := pre
	for a != nil && b != nil {
		if a.Val < b.Val {
			pre.Next = a
			a = a.Next
		} else {
			pre.Next = b
			b = b.Next
		}
		pre = pre.Next
	}
	if a == nil {
		pre.Next = b
	} else {
		pre.Next = a
	}
	return head.Next
}
