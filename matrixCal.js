/**
 *  Calculation for matrix
 * @type {module.matrixCal}
 */
module.exports = class matrixCal {
    constructor(matrixA, matrixB) {
        this.matrixA = matrixA;
        this.matrixB = matrixB;
    }

    // add
    add() {
        console.log("matrix add start===")
        let matrix = [];
        if (!this.matrixAddOrSubtractionCheck()) {
            console.log("current matrixs can't add ===")
            return matrix;
        }
        let row = this.matrixA.length;
        let col = this.matrixA[0].length;
        for (let i = 0; i < row; i++) {
            let array = [];
            for (let j = 0; j < col; j++) {
                array.push(this.matrixA[i][j] + this.matrixB[i][j])
            }
            matrix.push(array);
        }
        console.log("===matrix add end, result :");
        this.print(matrix);
        return matrix;
    }

    // subtraction
    subtraction() {
        console.log("matrix subtraction start===")
        let matrix = [];
        if (!this.matrixAddOrSubtractionCheck()) {
            console.log("current matrixs can't subtraction ===")
            return matrix;
        }
        let row = this.matrixA.length;
        let col = this.matrixA[0].length;
        for (let i = 0; i < row; i++) {
            let array = [];
            for (let j = 0; j < col; j++) {
                array.push(this.matrixA[i][j] - this.matrixB[i][j])
            }
            matrix.push(array);
        }
        console.log("===matrix subtraction end, result :");
        this.print(matrix);
        return matrix;
    }

    // multiplication
    multiplication() {
        console.log("matrix multiplication start===")
        let matrix = [];
        if (!this.matrixMultiplicationCheck()) {
            console.log("current matrixs can't multiplication ===")
            return matrix;
        }
        let row = this.matrixA.length;
        let col = this.matrixA[0].length;
        for (let i = 0; i < row; i++) {
            let array = [];
            for (let j = 0; j < col; j++) {
                let value = 0;
                for (let k = 0; k < col; k++) {
                    value += this.matrixA[i][k] * this.matrixB[k][j];
                }
                array.push(value)
            }
            matrix.push(array);
        }
        console.log("===matrix multiplication end, result :");
        this.print(matrix);
        return matrix;
    }

    print(matrix) {
        let h;
        for (let i = 0; i < matrix.length; i++) {
            let array = matrix[i];
            h = '';
            for (let j = 0; j < array.length; j++) {
                h += array[j] + '\t';
            }
            console.log(h)
        }
    }

    //transposition
    transposition(sourceMatrix){
        console.log("matrix transposition start===source:")
        this.print(sourceMatrix);
        let matrix = [];
        let row = sourceMatrix.length;
        let col = sourceMatrix[0].length;
        for (let i = 0; i < col; i++) {
            let array = [];
            for (let j = 0; j < row; j++) {
                array.push(sourceMatrix[j][i])
            }
            matrix.push(array);
        }
        console.log("===matrix transposition end, result :");
        this.print(matrix);
        return matrix;
    }

    matrixAddOrSubtractionCheck(){
        if(this.matrixA.length==0||this.matrixB.length==0||this.matrixA[0].length==0 || this.matrixB[0].length==0){
            return 0;
        }
        let row = this.matrixA.length;
        let col = this.matrixA[0].length;
        if(this.matrixB.length!=row){
            return 0;
        }
        for(let i=0;i<row;i++){
            if(this.matrixA[i]==undefined||this.matrixB[i]==undefined||this.matrixA[i].length!=col||this.matrixB[i].length!=col){
                return 0;
            }
        }
        return 1;
    }
    matrixMultiplicationCheck(){
        if(this.matrixA.length==0||this.matrixB.length==0||this.matrixA[0].length==0 || this.matrixB[0].length==0){
            return 0;
        }
        let rowA = this.matrixA.length;
        let colA = this.matrixA[0].length;
        for(let i=0;i<rowA;i++){
            if(this.matrixA[i]==undefined||this.matrixA[i].length!=colA){
                return 0;
            }
        }
        let rowB = this.matrixB.length;
        let colB = this.matrixB[0].length;
        for(let i=0;i<rowB;i++){
            if(this.matrixB[i]==undefined||this.matrixB[i].length!=colB){
                return 0;
            }
        }

        if(rowA!=colB||rowB!=colA){
            return 0;
        }
        return 1;
    }
}