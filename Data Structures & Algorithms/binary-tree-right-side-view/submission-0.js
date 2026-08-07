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
     * @return {number[]}
     */
    rightSideView(root) {
    if(!root) return []
    let ans = []

    let queue = []
    queue.push(root)

    while(queue.length>0){
        let queueSize = queue.length
        ans.push(queue[queueSize-1].val)

        for(let i=0;i<queueSize;i++){
            let currNode = queue.shift()
            if(currNode.left != null) queue.push(currNode.left)
            if(currNode.right != null) queue.push(currNode.right)
        }
    }

    return ans    
    }
}
