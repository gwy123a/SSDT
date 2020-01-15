const sourceArray = require('./array.json')
console.log("====source array:" + sourceArray)

// calculation
const sumArray = JSON.parse(JSON.stringify(sourceArray))
const Calculation = require('./calculation.js')
const myCalculation = new Calculation(sumArray)
myCalculation.sum()

// bubble sort
const sortArray = JSON.parse(JSON.stringify(sourceArray))
const Sort = require('./sort.js')
const mySort = new Sort(sortArray)
mySort.bubble()

// insert sort
const insertArray = JSON.parse(JSON.stringify(sourceArray))
const insertSort = new Sort(insertArray)
insertSort.insert()

// select sort
const selectArray = JSON.parse(JSON.stringify(sourceArray))
const selectSort = new Sort(selectArray)
selectSort.select()