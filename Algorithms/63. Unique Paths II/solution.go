package problem63

func uniquePathsWithObstacles(obstacleGrid [][]int) int {
	m, n := len(obstacleGrid[0]), len(obstacleGrid)
	grid := make([][]int, n)
	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			if obstacleGrid[i][j] == 1 {
				grid[i] = append(grid[i], 0)
			} else if i == 0 && j == 0 {
				grid[i] = append(grid[i], 1)
			} else if i == 0 {
				grid[i] = append(grid[i], grid[i][j-1])
			} else if j == 0 {
				grid[i] = append(grid[i], grid[i-1][j])
			} else {
				grid[i] = append(grid[i], grid[i-1][j]+grid[i][j-1])
			}
		}
	}
	return grid[n-1][m-1]
}
