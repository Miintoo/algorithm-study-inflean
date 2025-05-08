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
  

function dfs(root) {
    const visited = [];
  
    function traverse(node) {
      if (!node) return;
  
      visited.push(node.value);       
      traverse(node.left);             
      traverse(node.right);            
    }
  
    traverse(root);
    return visited;
  }
  
const bt = new BinaryTree();
bt.root = new Node(1);
bt.root.left = new Node(2);
bt.root.right = new Node(3);
bt.root.left.left = new Node(4);
bt.root.left.right = new Node(5);
bt.root.right.right = new Node(6);

const dfsResult = dfs(bt.root);
console.log(dfsResult);  
