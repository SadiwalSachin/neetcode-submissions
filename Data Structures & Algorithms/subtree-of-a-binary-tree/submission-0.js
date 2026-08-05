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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        function isIdentical(node1,node2){
            if(node1 == null || node2 == null){
                return node1 == node2
            }

            let isLTS = isIdentical(node1.left,node2.left)
            let isRTS = isIdentical(node1.right,node2.right)

            return isLTS && isRTS && node1.val == node2.val
        }

        function helper(root,subRoot){

            if(root == null && subRoot == null) return true

            if(root == null && subRoot != null) return false

            if(root != null && subRoot == null) return false

            if(root.val == subRoot.val && isIdentical(root,subRoot)){ 
                return true
            }

            let isINLST = helper(root.left,subRoot)
            let isINRST = helper(root.right,subRoot)

            return isINLST || isINRST
            
        }

        return helper(root,subRoot)
    }
}
