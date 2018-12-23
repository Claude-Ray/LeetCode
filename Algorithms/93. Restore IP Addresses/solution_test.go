package problem93

import (
	"reflect"
	"testing"
)

func Test_restoreIpAddresses(t *testing.T) {
	cases := []string{
		"25525511135",
		"0000",
		"00000",
		"010010",
	}

	results := [][]string{
		{"255.255.11.135", "255.255.111.35"},
		{"0.0.0.0"},
		{},
		{"0.10.0.10", "0.100.1.0"},
	}

	for i := 0; i < len(cases); i++ {
		if !reflect.DeepEqual(restoreIpAddresses(cases[i]), results[i]) {
			t.Error("not equal")
		}
	}
}
