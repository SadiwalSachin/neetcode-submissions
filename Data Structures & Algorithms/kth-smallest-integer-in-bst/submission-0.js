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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let prevOrder = 0

        function helper(root,k){
            if(root == null) return -1

            if(root.left != null) {
                let leftAns = helper(root.left,k)
                if(leftAns != -1) return leftAns
            }

            if(prevOrder + 1 == k) return root.val
            prevOrder++

            if(root.right != null) {
                let rightAns = helper(root.right,k)
                if(rightAns != -1) return rightAns
            }

            return -1
        }

        return helper(root,k)
    }
}
