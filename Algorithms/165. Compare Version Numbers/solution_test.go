package problem165

import "testing"

func Test_compareVersion(t *testing.T) {
	version1 := []string{
		"0.1",
		"1.0.1",
		"7.5.2.4",
		"1",
	}
	version2 := []string{
		"1.1",
		"1",
		"7.5.3",
		"0",
	}
	results := []int{
		-1,
		1,
		-1,
		1,
	}
	for i := 0; i < len(results); i++ {
		if ret := compareVersion(version1[i], version2[i]); ret != results[i] {
			t.Error("Case", i, "error:", ret)
		}
	}
}
