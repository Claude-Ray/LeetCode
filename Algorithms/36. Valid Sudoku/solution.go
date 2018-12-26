package problem36

func isValidSudoku(board [][]byte) bool {
	for i := 0; i < 9; i++ {
		rowMap := map[byte]int{}
		colMap := map[byte]int{}
		for j := 0; j < 9; j++ {
			// check row
			nRow := board[i][j]
			if rowMap[nRow] == 1 {
				return false
			}
			if nRow != '.' {
				rowMap[nRow] = 1
			}
			// check column
			nCol := board[j][i]
			if colMap[nCol] == 1 {
				return false
			}
			if nCol != '.' {
				colMap[nCol] = 1
			}
		}
	}

	// check box
	for i := 0; i < 9; i = i + 3 {
		for j := 0; j < 9; j = j + 3 {
			box := []byte{}
			for k := 0; k < 3; k++ {
				box = append(box, board[i+k][j:j+3]...)
			}
			boxMap := map[byte]int{}
			for _, n := range box {
				if boxMap[n] == 1 {
					return false
				}
				if n != '.' {
					boxMap[n] = 1
				}
			}
		}
	}
	return true
}
