function shortestPathBinaryMatrix(grid) {
    const row = grid.length;
    const col = grid[0].length;

    if (grid[0][0] !== 0) return -1;

    const visited = Array.from({ length: row }, () => Array(col).fill(false));

    const delta = [
        [1, 0], [-1, 0], [0, 1], [0, -1],
        [1, 1], [1, -1], [-1, 1], [-1, -1]
    ];

    const queue = [[0, 0, 1]];
    visited[0][0] = true;

    while (queue.length > 0) {
        const [cur_r, cur_c, cur_len] = queue.shift();

        if (cur_r === row - 1 && cur_c === col - 1) {
            return cur_len;
        }

        for (const [dr, dc] of delta) {
            const next_r = cur_r + dr;
            const next_c = cur_c + dc;

            if (
                next_r >= 0 && next_r < row &&
                next_c >= 0 && next_c < col &&
                grid[next_r][next_c] === 0 &&
                !visited[next_r][next_c]
            ) {
                queue.push([next_r, next_c, cur_len + 1]);
                visited[next_r][next_c] = true;
            }
        }
    }

    return -1;
}

  const grid1 = [
    [0, 0, 0],
    [1, 1, 0],
    [1, 1, 0]
  ];
  console.log(shortestPathBinaryMatrix(grid1)); // 출력: 4
  
  const grid2 = [
    [1, 0, 0],
    [1, 1, 0],
    [1, 1, 0]
  ];
  console.log(shortestPathBinaryMatrix(grid2)); // 출력: -1
    