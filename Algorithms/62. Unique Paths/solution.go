package problem62

func uniquePaths(m int, n int) int {
	grid := make([][]int, n)
	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			if i == 0 || j == 0 {
				grid[i] = append(grid[i], 1)
			} else {
				grid[i] = append(grid[i], grid[i-1][j]+grid[i][j-1])
			}
		}
	}
	return grid[n-1][m-1]
}
