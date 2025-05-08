// Node와 BinaryTree 클래스 정의
class Node {
    constructor(value = 0, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  }
  
  // BFS 함수 정의
  function bfs(root) {
    const visited = [];
  
    if (root === null) {
      return 0;
    }
  
    const queue = [];
    queue.push(root);
  
    while (queue.length > 0) {
      const curNode = queue.shift();
      visited.push(curNode.value);
  
      if (curNode.left) {
        queue.push(curNode.left);
      }
  
      if (curNode.right) {
        queue.push(curNode.right);
      }
    }
  
    return visited;
  }
  
  // 트리 생성 및 노드 추가
  const bt = new BinaryTree();
  bt.root = new Node(1);
  bt.root.left = new Node(2);
  bt.root.right = new Node(3);
  bt.root.left.left = new Node(4);
  bt.root.left.right = new Node(5);
  bt.root.right.right = new Node(6);
  
  // ✅ BFS 실행
  const result = bfs(bt.root);
  console.log(result);  // [1, 2, 3, 4, 5, 6]
  