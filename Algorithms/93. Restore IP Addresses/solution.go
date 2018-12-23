package problem93

import (
	"strconv"
	"strings"
)

func restoreIpAddresses(s string) []string {
	slice := []string{}
	return getIp(slice, s)
}

func getIp(slice []string, s string) []string {
	ips := []string{}
	if len(slice) == 4 {
		if len(s) == 0 {
			return []string{strings.Join(slice, ".")}
		} else {
			return []string{}
		}
	}

	for i := 1; i <= 3 && len(s) >= i; i++ {
		bit, _ := strconv.Atoi(s[:i])
		if bit < 256 {
			slices := getIp(append(slice, s[:i]), s[i:])
			ips = append(ips, slices...)
			if bit == 0 {
				break
			}
		}
	}
	return ips
}
