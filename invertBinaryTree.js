// Invert a binary tree (mirror image)
// https://leetcode.com/problems/invert-binary-tree/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

// Recursively
var invertTree = function(root) {
  if (!root || root.length === 0) return [];
  [root.left, root.right] = [root.right, root.left];
  invertTree(root.left);
  invertTree(root.right);
  return root;
};

// Iteratively
var invertTree = function(root) {
  if (!root || root.length === 0) return root;
  let q = [root];
  while (q.length) {
    let node = q.shift();
    if (node === null) continue;
    [node.left, node.right] = [node.right, node.left];
    q.push(node.left);
    q.push(node.right);
  }
  return root;
};
