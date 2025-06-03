// 깊이 우선 탐색(DFS) 알고리즘을 구현한 예제입니다.
// 그래프를 인접 리스트 형태로 표현하고, DFS를 사용하여 그래프를 탐색합니다.
// 1. 그래프는 객체 형태로 표현됩니다.
// 2. DFS 함수는 재귀적으로 호출되어 그래프를 탐색합니다.
// 3. 방문한 노드는 visited 배열에 추가됩니다.  

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
    