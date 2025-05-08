function dfs(graph, current, visited = []) {
    visited.push(current);
  
    for (const neighbor of graph[current]) {
      if (!visited.includes(neighbor)) {
        dfs(graph, neighbor, visited);
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
  
  console.log(dfs(graph, 'A')); // 출력: ['A', 'B', 'D', 'E', 'F', 'C']
    