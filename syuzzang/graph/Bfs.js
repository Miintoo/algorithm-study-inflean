// 너비 우선 탐색(BFS) 알고리즘 구현
// 1. 그래프를 인접 리스트로 표현합니다.
// 2. BFS는 큐를 사용하여 구현합니다.
// 3. 시작 노드에서부터 인접한 노드를 방문합니다.
// 4. 방문한 노드는 visited 배열에 true로 표시합니다.
// 5. 큐에서 노드를 꺼내고 인접한 노드를 큐에 추가합니다.
// 6. 모든 노드를 방문할 때까지 반복합니다.
// 7. BFS는 최단 경로를 찾는 데 유용합니다.

function bfs(graph, start) {
    const visited = new Set();
    const queue = [start];
  
    visited.add(start);
  
    while (queue.length > 0) {
      const current = queue.shift();
  
      for (const neighbor of graph[current]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  
    return Array.from(visited); 
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
    