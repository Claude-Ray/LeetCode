package problem86

import (
	"reflect"
	"testing"
)

func Test_partition(t *testing.T) {
	lists := [][]int{
		{1, 4, 3, 2, 5, 2},
	}
	x := []int{
		3,
	}
	results := [][]int{
		{1, 2, 2, 4, 3, 5},
	}
	for i := 0; i < len(results); i++ {
		ret := partition(genList(lists[i]), x[i])
		if !reflect.DeepEqual(getListVal(ret), results[i]) {
			t.Error("Case", i, "error:", getListVal(ret))
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
