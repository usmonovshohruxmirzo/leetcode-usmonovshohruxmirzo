var postorder = function (root) {
  let results = [];

  function treverse(currentNode) {
    if (currentNode) {
      if (currentNode.children) {
        for (let node of currentNode.children) {
          treverse(node);
        }
      }
      results.push(currentNode.val);
    }
  }
  treverse(root);
  return results;
};
