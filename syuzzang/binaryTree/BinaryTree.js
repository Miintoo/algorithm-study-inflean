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
  
  // 트리 생성 및 노드 추가
  const bt = new BinaryTree();
  bt.root = new Node(1);
  bt.root.left = new Node(2);
  bt.root.right = new Node(3);
  bt.root.left.left = new Node(4);
  bt.root.left.right = new Node(5);
  bt.root.right.right = new Node(6);
  