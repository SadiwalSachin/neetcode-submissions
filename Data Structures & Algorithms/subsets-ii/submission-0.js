class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a,b) => a-b)
        function helper(nums,temp,ans,index){
            if(nums.length==index){
                ans.push([...temp])
                return
            }

            temp.push(nums[index])
            helper(nums,temp,ans,index+1)
            temp.pop()

            index = index + 1
            while(index<nums.length && nums[index]==nums[index-1]){
                index++
            }

            helper(nums,temp,ans,index)
        }

    let ans =  []
    helper(nums,[],ans,0)
    return ans
    }

    
}
