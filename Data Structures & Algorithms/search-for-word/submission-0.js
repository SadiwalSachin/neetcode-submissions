class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let rows = board.length
        let columns = board[0].length

        function dfs(i,j,index){

            if(index===word.length) return true

            if(i<0 || j<0 || i>=rows || j>=columns || board[i][j] !== word[index]) return false

            // visited mark

            let temp = board[i][j]
            board[i][j] = "#"

            let found = 
                dfs(i + 1, j, index + 1) ||
                dfs(i - 1, j, index + 1) ||
                dfs(i, j + 1, index + 1) ||
                dfs(i, j - 1, index + 1);

            board[i][j] = temp    

            return found
        }

        for(let i=0;i<rows;i++){
            for(let j=0;j<columns;j++){
                if(dfs(i,j,0)) return true
            }
        }

        return false
    }
}
