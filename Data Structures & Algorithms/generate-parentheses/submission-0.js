class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
    function genrate(n,open,close,temp,ans){

    if(temp.length==2*n){
        ans.push(temp)
        return
    }

    if(open<n){
        temp = temp + "("
        genrate(n,open+1,close,temp,ans)
        temp = temp.slice(0, -1)
    }

    if(close<open){
        temp = temp +")"
        genrate(n,open,close+1,temp,ans)
        temp = temp.slice(0, -1)
    }

}


    let ans =  []
    genrate(n,0,0,"",ans)

    return ans
    }
}
