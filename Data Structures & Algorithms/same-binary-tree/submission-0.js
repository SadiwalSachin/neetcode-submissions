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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        function helper(node1,node2){
            if(node1 == null && node2 == null) return true
            if(node1 == null && node2 != null) return false
            if(node1 !=null && node2 == null) return false

            let isLeftSame = helper(node1.left,node2.left)
            let isRightSame = helper(node1.right,node2.right)

            return (isLeftSame && isRightSame) && (node1.val==node2.val) ? true : false
        }

        return helper(p,q)
    }
}
