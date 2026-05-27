class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let ans = []
        let map = []

        function helper(nums,ans,map,temp){
            if(temp.length==nums.length){
                return ans.push([...temp])
            }

            for(let i=0;i<nums.length;i++){
                if(!map[i]){
                    map[i] = true
                    temp.push(nums[i])
                    helper(nums,ans,map,temp)
                    temp.pop()
                    map[i] = false
                }
            }
        }

        helper(nums,ans,map,[])
        return ans
    }
}
