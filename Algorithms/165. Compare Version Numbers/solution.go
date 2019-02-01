package problem165

import (
	"strconv"
	"strings"
)

func compareVersion(version1 string, version2 string) int {
	v1 := strings.Split(version1, ".")
	v2 := strings.Split(version2, ".")

	for i := 0; i < len(v1) && i < len(v2); i++ {
		n1, _ := strconv.Atoi(v1[i])
		n2, _ := strconv.Atoi(v2[i])
		if n1 > n2 {
			return 1
		}
		if n1 < n2 {
			return -1
		}
	}

	res := -1
	if len(v1) > len(v2) {
		res = 1
		v1, v2 = v2, v1
	}
	if len(v1) < len(v2) {
		for i := len(v1); i < len(v2); i++ {
			n, _ := strconv.Atoi(v2[i])
			if n > 0 {
				return res
			}
		}
	}
	return 0
}
