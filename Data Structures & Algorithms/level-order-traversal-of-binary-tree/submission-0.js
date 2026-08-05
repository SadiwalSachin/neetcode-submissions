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
     * @return {number[][]}
     */
    levelOrder(root) {

        if(!root) return []

        let queue = []
        let ans = []
        let temp = []

        queue.push(root)
        queue.push(null)
        while(queue.length>0){
            let node = queue.shift()
            if(node != null) temp.push(node.val)
            
            if(node==null){
                ans.push(temp)
                temp = []
                if(queue.length>0){
                    queue.push(null)
                    continue
                }else{
                    break
                }
            }

            if(node.left != null) queue.push(node.left)
            if(node.right != null) queue.push(node.right)
        }

        return ans
    }
}
