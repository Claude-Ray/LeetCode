package problem387

func firstUniqChar(s string) int {
	counts := make([]int, 26)
	for _, char := range s {
		counts[char-'a']++
	}
	for i, char := range s {
		if counts[char-'a'] == 1 {
			return i
		}
	}
	return -1
}
