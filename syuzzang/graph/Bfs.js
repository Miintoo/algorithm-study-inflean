function bfs(graph, start) {
    const visited = [start];
    const queue = [start];
  
    while (queue.length > 0) {
      const current = queue.shift();
  
      for (const neighbor of graph[current]) {
        if (!visited.includes(neighbor)) {
          visited.push(neighbor);
          queue.push(neighbor);
        }
      }
    }
  
    return visited;
  }
  const graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
  };
  
  console.log(bfs(graph, 'A')); // 출력: ['A', 'B', 'C', 'D', 'E', 'F']
    