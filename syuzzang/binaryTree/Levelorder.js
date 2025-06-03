// 이진 트리의 최대 깊이를 구하는 함수
// BFS(너비 우선 탐색) 알고리즘을 사용하여 구현합니다.
// 1. 트리의 루트 노드부터 시작합니다.
// 2. 각 노드의 깊이를 기록합니다.


function maxDepth(root) {
    if (root === null) return 0;
  
    let maxDepth = 0;
    const queue = [[root, 1]];
  
    while (queue.length > 0) {
      const [currentNode, currentDepth] = queue.shift();
      maxDepth = Math.max(maxDepth, currentDepth);
  
      if (currentNode.left) {
        queue.push([currentNode.left, currentDepth + 1]);
      }
      if (currentNode.right) {
        queue.push([currentNode.right, currentDepth + 1]);
      }
    }
  
    return maxDepth;
  }
  class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  // 예시 트리 생성
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  
  console.log(maxDepth(root)); // 출력: 3
    