package problem79

func exist(board [][]byte, word string) bool {
	for i := 0; i < len(board); i++ {
		for j := 0; j < len(board[0]); j++ {
			if board[i][j] == word[0] && search(i, j, board, word) {
				return true
			}
		}
	}
	return false
}

func search(i int, j int, board [][]byte, word string) bool {
	if i < 0 || j < 0 || i == len(board) || j == len(board[0]) || board[i][j] != word[0] {
		return false
	}
	if len(word) == 1 {
		return true
	}
	board[i][j] = '#'
	result := search(i+1, j, board, word[1:]) ||
		search(i-1, j, board, word[1:]) ||
		search(i, j+1, board, word[1:]) ||
		search(i, j-1, board, word[1:])
	if !result {
		board[i][j] = word[0]
	}
	return result
}
