function lowestCommonAncestor(root, p, q) {
    if (root === null) return null;
  
    if (root === p || root === q) return root;
  
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
  
    if (left && right) return root;
    return left || right;
  }
  class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  // 트리 구성: [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]
  const root = new TreeNode(3);
  root.left = new TreeNode(5);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(6);
  root.left.right = new TreeNode(2);
  root.right.left = new TreeNode(0);
  root.right.right = new TreeNode(8);
  root.left.right.left = new TreeNode(7);
  root.left.right.right = new TreeNode(4);
  
  // 찾고자 하는 노드
  const p = root.left.left;          // Node 6
  const q = root.left.right.right;   // Node 4
  
  const lca = lowestCommonAncestor(root, p, q);
  console.log("LCA:", lca.val);      // 결과: 5

  
//   가장 낮은 공통조상의 값을 반환하는 함수