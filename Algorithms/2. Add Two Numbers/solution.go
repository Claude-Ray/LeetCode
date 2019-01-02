package problem2

type ListNode struct {
	Val  int
	Next *ListNode
}

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	tmp1, tmp2 := l1, l2
	head := new(ListNode)
	walk := head
	carry := false
	for {
		sum := 0
		if tmp1 != nil && tmp2 != nil {
			v1, v2 := tmp1.Val, tmp2.Val
			sum = v1 + v2
			tmp1 = tmp1.Next
			tmp2 = tmp2.Next
		} else if tmp2 != nil {
			sum = tmp2.Val
			tmp2 = tmp2.Next
		} else if tmp1 != nil {
			sum = tmp1.Val
			tmp1 = tmp1.Next
		}
		if carry {
			sum += 1
			carry = false
		}
		if sum >= 10 {
			carry = true
			sum -= 10
		}
		walk.Val = sum
		if tmp1 != nil || tmp2 != nil || carry {
			walk.Next = new(ListNode)
			walk = walk.Next
		} else {
			break
		}
	}
	return head
}
