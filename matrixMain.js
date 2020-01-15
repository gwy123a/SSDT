const matrixA = require('./matrixA.json')
const matrixB = require('./matrixB.json')

const MatrixCal = require('./matrixCal')
const myMatrixCal = new MatrixCal(matrixA,matrixB)
console.log('===print first matrix===')
myMatrixCal.print(matrixA)
console.log('===print first matrix end===')
console.log('===print second matrix===')
myMatrixCal.print(matrixB)
console.log('===print second matrix end===')


myMatrixCal.add()
myMatrixCal.subtraction()
myMatrixCal.multiplication()


myMatrixCal.transposition(matrixA)