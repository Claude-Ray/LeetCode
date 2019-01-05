package problem127

func ladderLength(beginWord string, endWord string, wordList []string) int {
	if beginWord == endWord {
		return 1
	}

	wordMap := map[string]bool{}
	for _, word := range wordList {
		wordMap[word] = true
	}
	if !wordMap[endWord] {
		return 0
	}

	src := map[string]bool{beginWord: true}
	dist := map[string]bool{endWord: true}
	alphabet := "abcdefghijklmnopqrstuvwxyz"
	length := 2
	for len(src) > 0 && len(dist) > 0 {
		if len(src) > len(dist) {
			src, dist = dist, src
		}
		next := map[string]bool{}
		for word := range src {
			delete(wordMap, word)
			for i := 0; i < len(word); i++ {
				for _, ch := range alphabet {
					if byte(ch) == word[i] {
						continue
					}
					newWord := word[0:i] + string(ch) + word[i+1:]
					if dist[newWord] {
						return length
					}
					if wordMap[newWord] {
						delete(wordMap, newWord)
						next[newWord] = true
					}
				}
			}
		}
		length++
		src = next
	}
	return 0
}
