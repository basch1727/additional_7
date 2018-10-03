module.exports = function solveSudoku(matrix) {
  function suggest(r,c) {
  const arr = [];
  const blockRow = Math.floor(r / 3) * 3;
  const blockCol = Math.floor(c / 3) * 3;
    for (let i = 0; i < 9; i++) {
      arr.push([matrix[r][i], matrix[i][c], matrix[blockRow + i % 3][blockCol + Math.floor(i / 3)]])
    }
    return arr;
  }     
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (matrix[r][c] === 0) {
          let n = suggest(r, c);
            for (let i=0;i<9;i++) {
              matrix[r][c] = n[i];
            }
         }
      }
    }
return matrix;
}
