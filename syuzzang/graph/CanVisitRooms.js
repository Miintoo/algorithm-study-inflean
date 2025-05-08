// dfs를 사용하여 모든 방을 방문할 수 있는지 확인하는 함수
// 1. rooms[i]는 i번째 방에서 열쇠를 찾을 수 있는 방의 리스트입니다.
// 2. rooms[0]에서 시작하여 모든 방을 방문할 수 있는지 확인합니다.  
// 3. 방문한 방은 visited 배열에 true로 표시합니다.
// 4. DFS를 사용하여 모든 방을 방문합니다.
// 5. 모든 방을 방문했는지 확인합니다.
function canVisitAllRooms(rooms) {
    const visited = new Array(rooms.length).fill(false);

    function dfs(v) {
        visited[v] = true;
        for (const next_v of rooms[v]) {
            if (!visited[next_v]) {
                dfs(next_v);
            }
        }
    }

    dfs(0);

    return visited.every(v => v === true);
}

// 테스트 예제
const rooms = [[1, 3], [2, 4], [0], [4], [], [3, 4]];
console.log(canVisitAllRooms(rooms));

// BFS 방식
// 1. rooms[i]는 i번째 방에서 열쇠를 찾을 수 있는 방의 리스트입니다.
// 2. rooms[0]에서 시작하여 모든 방을 방문할 수 있는지 확인합니다.
// 3. 방문한 방은 visited 배열에 true로 표시합니다.
// 4. BFS를 사용하여 모든 방을 방문합니다.
// 5. 모든 방을 방문했는지 확인합니다.
// 6. BFS는 큐를 사용하여 구현합니다.
function canVisitAllRooms(rooms) {
    const visited = new Array(rooms.length).fill(false);
    const queue = [];

    queue.push(0);
    visited[0] = true;

    while (queue.length > 0) {
        const cur_v = queue.shift();
        for (const next_v of rooms[cur_v]) {
            if (!visited[next_v]) {
                queue.push(next_v);
                visited[next_v] = true;
            }
        }
    }

    return visited.every(v => v === true);
}

// 테스트 예제
const rooms2 = [[1, 3], [2, 4], [0], [4], [], [3, 4]];
console.log(canVisitAllRooms(rooms2));
