package problem2

import (
	"reflect"
	"testing"
)

func Test_addTwoNumbers(t *testing.T) {
	L1 := [][]int{
		{3, 2, 4},
		{8, 7, 3, 1},
		{8, 1},
	}
	L2 := [][]int{
		{5, 8, 5},
		{2, 1},
		{1, 2},
	}
	results := [][]int{
		{8, 0, 0, 1},
		{0, 9, 3, 1},
		{9, 3},
	}
	for i := 0; i < len(results); i++ {
		ret := addTwoNumbers(genList(L1[i]), genList(L2[i]))
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
