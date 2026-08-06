/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        
        if(!root) return null

        function helper(root){

        if(root==null) return null

        let leftRoot = root.left
        let rightRoot = root.right

        root.left = rightRoot
        root.right = leftRoot

        helper(root.left)
        helper(root.right)

        return root
        }

        return helper(root)
    }
}
