package problem64

import "math"

func minPathSum(grid [][]int) int {
	if len(grid) == 0 || len(grid[0]) == 0 {
		return 0
	}
	height, width := len(grid), len(grid[0])
	r := [][]int{{grid[0][0]}}
	for i := 0; i < height; i++ {
		for j := 0; j < width; j++ {
			if i == 0 {
				if j > 0 {
					r[i] = append(r[i], r[i][j-1]+grid[i][j])
				}
			} else if j == 0 {
				r = append(r, []int{r[i-1][j] + grid[i][j]})
			} else {
				min := math.Min(float64(r[i][j-1]), float64(r[i-1][j]))
				r[i] = append(r[i], int(min)+grid[i][j])
			}
		}
	}
	return r[height-1][width-1]
}
