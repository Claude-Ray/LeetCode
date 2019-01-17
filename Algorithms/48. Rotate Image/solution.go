package problem45

func rotate(matrix [][]int) {
	length := len(matrix)
	for i := 0; i < length/2; i++ {
		end := length - i - 1
		for j := i; j < end; j++ {
			x, y := i, j
			for k := 0; k < 3; k++ {
				matrix[x][y], matrix[length-1-y][x] = matrix[length-1-y][x], matrix[x][y]
				x, y = length-1-y, x
			}
		}
	}
}
