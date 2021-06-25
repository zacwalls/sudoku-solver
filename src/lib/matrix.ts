class Matrix {
    public rows: number;
    public cols: number; 
    public matrix: number[][];

    constructor(matrix: number[][]) {
        this.matrix = matrix;
        this.rows = this.matrix.length;
        this.cols = this.matrix[0].length;
    }

    wipe() {
        for (let i = 0; i < this.cols; i++) {
            for (let j = 0; j < this.rows; j++) {
                this.matrix[i][j] = 0;
            }
        }
    }

    prettyPrint() {
      let colMaxes: number[] = [];

      const col = (mat: any[], cols: any) => {
        return mat.map(row => row[cols]);
      }

      for (let i = 0; i < this.rows; i++) {
          colMaxes.push(Math.max.apply(null, col(this.matrix, i).map(n => n.toString().length)));
      }

      this.matrix.forEach(row => {
          console.log.apply(null, row.map((val, j) => {
              return new Array(colMaxes[j]-val.toString().length+1).join(' ') + val.toString() + " ";
          }));
      });
    }
    
    isValid(row: number, col: number, num: number): boolean {
        // if num is in row, return false
        for (let i = 0; i < this.rows; i++) {
            if (this.matrix[col][i] == num) {
                return false;
            }
        }
        
        // if num is in col, return false,
        for (let i = 0; i < this.cols; i++) {
            if (this.matrix[i][row] == num) {
                return false;
            }
        }
        
        // this is where we calculate the 3x3 grid 
        const col0 = (Math.floor(col / 3)) * 3
        const row0 = (Math.floor(row / 3)) * 3

        // if num is in the 3x3 grid, return false
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (this.matrix[row0+i][col0+j] == num) {
                    return false;
                }
            }
        }

        // else, return true
        return true;
    }
}

export { Matrix }