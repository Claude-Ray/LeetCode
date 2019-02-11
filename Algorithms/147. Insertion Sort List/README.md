## 解法一

从左到右剥离每个节点（取节点后，Next 设为 nil），依次插入已排好序的链表，并且是从左到右比较大小。

```go
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
```

## 解法二

当某个节点已经是排好序的状态时，被剥离再重新加入`已排序链表`末尾，效率是非常低的。优化点正是不再剥离已排好序的节点，直接跳到下一个节点。

这就要求链表不能像解法一那样分为两截，操作过程中，需要不断接上被“剥离”的节点两端。
