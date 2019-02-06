package problem147

import (
	"reflect"
	"testing"
)

func Test_insertionSortList(t *testing.T) {

	L1 := [][]int{
		{4, 2, 1, 3},
		{-1, 5, 3, 4, 0},
	}
	results := [][]int{
		{1, 2, 3, 4},
		{-1, 0, 3, 4, 5},
	}
	for i := 0; i < len(results); i++ {
		ret := getListVal(insertionSortList(genList(L1[i])))
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
