package problem21

import (
	"reflect"
	"testing"
)

func Test_mergeTwoLists(t *testing.T) {
	lefts := [][]int{
		{1, 2, 4},
	}
	rights := [][]int{
		{1, 3, 4},
	}
	results := [][]int{
		{1, 1, 2, 3, 4, 4},
	}
	for i := 0; i < len(results); i++ {
		ret := getListVal(mergeTwoLists(genList(lefts[i]), genList(rights[i])))
		if !reflect.DeepEqual(ret, results[i]) {
			t.Error("Case", i, "error:", ret)
		}
	}
}

func genList(list []int) *ListNode {
	head := new(ListNode)
	walk := head
	for i, v := range list {
		walk.Val = v
		if i < len(list)-1 {
			walk.Next = new(ListNode)
			walk = walk.Next
		}
	}
	return head
}

func getListVal(head *ListNode) []int {
	t := head
	ret := []int{}
	for {
		if t == nil {
			break
		}
		ret = append(ret, t.Val)
		t = t.Next
	}
	return ret
}
