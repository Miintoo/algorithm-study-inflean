//Dfs방식
// 1. 섬의 개수를 세는 문제
// 2. 섬은 '1'로 표시되고, 물은 '0'으로 표시됨
// 3. DFS를 사용하여 섬을 탐색하고, 방문한 섬은 '0'으로 바꿔줌  

function numIslands(grid) {
    if (!grid || grid.length === 0) return 0;
  
    const rows = grid.length;
    const cols = grid[0].length;    
    let count = 0;
  
    function dfs(r, c) {
      // 범위를 벗어나거나, 물('0')이면 리턴
      if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === '0') return;
  
      grid[r][c] = '0'; // 방문 표시 (물로 바꿔줌)
  
      // 상하좌우 재귀 탐색
      dfs(r + 1, c);
      dfs(r - 1, c);
      dfs(r, c + 1);
      dfs(r, c - 1);
    }
  
    // 전체 그리드 탐색
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (grid[r][c] === '1') {
          count++;
          dfs(r, c);
        }
      }
    }
  
    return count;
  }
  const grid1 = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0']
  ];
  console.log(numIslands(grid1)); // ➜ 1
  
  const grid2 = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1']
  ];
  console.log(numIslands(grid2)); // ➜ 3
    


//   bfs방식

function numIslands(grid) {
    let numberOfIslands = 0;
    const m = grid.length;
    const n = grid[0].length;
    const visited = Array.from({ length: m }, () => Array(n).fill(false));
  
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
  
    function bfs(x, y) {
      const queue = [[x, y]];
      visited[x][y] = true;
  
      while (queue.length > 0) {
        const [curX, curY] = queue.shift();
  
        for (let i = 0; i < 4; i++) {
          const nextX = curX + dx[i];
          const nextY = curY + dy[i];
  
          if (
            nextX >= 0 && nextX < m &&
            nextY >= 0 && nextY < n &&
            grid[nextX][nextY] === '1' &&
            !visited[nextX][nextY]
          ) {
            visited[nextX][nextY] = true;
            queue.push([nextX, nextY]);
          }
        }
      }
    }
  
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === '1' && !visited[i][j]) {
          bfs(i, j);
          numberOfIslands++;
        }
      }
    }
  
    return numberOfIslands;
  }
  
  const grid3 = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0']
  ];
  console.log(numIslands(grid3)); // ➜ 1
  
  const grid4 = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1']
  ];
  console.log(numIslands(grid4)); // ➜ 3
    