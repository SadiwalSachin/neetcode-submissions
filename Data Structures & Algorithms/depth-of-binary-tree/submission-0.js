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
     * @return {number}
     */
    maxDepth(root) {

        function helper(root){
            if(root == null) return 0

            let leftHT = helper(root.left)
            let rightHT = helper(root.right)

            return Math.max(leftHT,rightHT) + 1
        }

        return helper(root)
    }
}
