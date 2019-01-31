package problem22

import (
	"reflect"
	"testing"
)

func Test_generateParenthesis(t *testing.T) {
	cases := []int{
		3,
	}
	results := [][]string{
		{
			"((()))",
			"(()())",
			"(())()",
			"()(())",
			"()()()",
		},
	}
	for i := 0; i < len(results); i++ {
		if ret := generateParenthesis(cases[i]); !reflect.DeepEqual(ret, results[i]) {
			t.Error("Case", i, "error:", ret)
		}
	}
}
