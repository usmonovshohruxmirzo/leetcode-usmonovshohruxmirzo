var postorderTraversal = function (root) {
  const result = [];
  function treverse(node) {
    if (!node) return;
    if (node.left) treverse(node.left);
    if (node.right) treverse(node.right);
    result.push(node.val);
  }
  treverse(root);
  return result;
};
