/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

const isPossible = (x, y, board, n) => {
    const baseX = parseInt(x / 3) * 3;
    const baseY = parseInt(y / 3) * 3;
    
    for (let i = 0; i < 3; ++i) {
        for (let j = 0; j < 3; ++j) {
            if (board[baseX + i][baseY + j] == n)  return false;
        }
    }
    
    for (let i = 0; i < 9; ++i) {
        if (board[x][i] == n) return false;
    }
    for (let i = 0; i < 9; ++i) {
        if (board[i][y] == n) return false;
    }

    return true;
}



var solveSudoku = function(board) {
    const solve = () => {
      for (let i = 0; i < 9; ++i) {
        for (let j = 0; j < 9; ++j) {
          if (board[i][j] === '.') {
            for (let n = 1; n <= 9; ++n) {
              if (isPossible(i, j, board,n)) {
                board[i][j] = n + '';

                if (solve()) return true;

                board[i][j] = '.';  
              }
            }
            retun false;
          }
        }
      }
      return true;
    }
    solve();
};r
