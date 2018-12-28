package problem79

import "testing"

func Test_exist(t *testing.T) {
	board := [][]byte{
		{'A', 'B', 'C', 'E'},
		{'S', 'F', 'C', 'S'},
		{'A', 'D', 'E', 'E'},
	}
	cases := []string{
		"ABCCED",
		"SEE",
		"ABCB",
	}
	results := []bool{
		true,
		true,
		false,
	}

	for i := 0; i < len(cases); i++ {
		if exist(deepCopy(board), cases[i]) != results[i] {
			t.Error("No.", i, "not equal")
		}
	}
}

func deepCopy(board [][]byte) [][]byte {
	duplicate := make([][]byte, len(board))
	for i, row := range board {
		duplicate[i] = make([]byte, len(row))
		copy(duplicate[i], row)
	}
	return duplicate
}
