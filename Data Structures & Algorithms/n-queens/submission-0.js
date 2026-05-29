class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        let result = [];

        let cols = new Set();
        let diag = new Set();      // row - col
        let antiDiag = new Set();  // row + col

        // board as array of strings
        let board = Array.from({ length: n }, () => Array(n).fill('.'));

        function backtrack(row) {
            // base case
            if (row === n) {
                result.push(board.map(r => r.join("")));
                return;
            }

            for (let col = 0; col < n; col++) {

                // check if safe
                if (cols.has(col) || diag.has(row - col) || antiDiag.has(row + col)) {
                    continue;
                }

                // place queen
                board[row][col] = 'Q';
                cols.add(col);
                diag.add(row - col);
                antiDiag.add(row + col);

                // recurse
                backtrack(row + 1);

                // backtrack (undo)
                board[row][col] = '.';
                cols.delete(col);
                diag.delete(row - col);
                antiDiag.delete(row + col);
            }
        }

        backtrack(0);
        return result;
    }
}