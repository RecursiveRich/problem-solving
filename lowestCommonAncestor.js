function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function lowestCommonAncestor(root, p, q) {
  // Base cases
  if (root === null) return null;
  if (root.val === p.val || root.val === q.val) return root;
  // Else recurse DFS In Order
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  if (left && right) return root;
  if (left || right) return left || right;
  return null;
}

// Write a function called lowestCommonAncestor.

// Given a binary tree, find the lowest common ancestor(LCA) of two given nodes in the tree.

// According to the definition of LCA on Wikipedia:
// The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).
// https://en.wikipedia.org/wiki/Lowest_common_ancestor

// Notes

// All three arguments: root, p, q are instances of TreeNode.

// Your return value should also be a TreeNode.

// You can assume that all the values in the tree are unique.

//     Examples

/*

         _______3______
        /              \
     __5__            __1__
    /     \          /     \
   6       2        0       8
          / \
         7   4

*/

const root = new TreeNode(3);

/* build left subtree */

const left = new TreeNode(5);
root.left = left;

const left_left = new TreeNode(6);
left.left = left_left;

const left_right = new TreeNode(2);
left.right = left_right;

const left_right_left = new TreeNode(7);
left_right.left = left_right_left;

const left_right_right = new TreeNode(4);
left_right.right = left_right_right;

/* build right subtree */

const right = new TreeNode(1);
root.right = right;

const right_left = new TreeNode(0);
right.left = right_left;

const right_right = new TreeNode(8);
right.right = right_right;

/* test examples */

// root = 3, p = 5, q = 1
lowestCommonAncestor(root, left, right);
// --> root (3) is the LCA

// root = 3, p = 2, q = 7
lowestCommonAncestor(root, left_right, left_right_left);
// --> left_right (2) is the LCA

// root = 3, p = 7, q = 6
lowestCommonAncestor(root, left_right_left, left_left);
// --> left (5) is the LCA

// root = 3, p = 8, q = 0
lowestCommonAncestor(root, right_left, right_right);
// --> right (1) is the LCA
