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
}

export { Matrix }