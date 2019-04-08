package problem43

import "testing"

func Test_multiply(t *testing.T) {
	num1 := []string{
		"2",
		"123",
		"9999",
	}
	num2 := []string{
		"3",
		"456",
		"9999",
	}
	results := []string{
		"6",
		"56088",
		"99980001",
	}
	for i := 0; i < len(results); i++ {
		if ret := multiply(num1[i], num2[i]); ret != results[i] {
			t.Error("Case", i, "error:", ret)
		}
	}
}
