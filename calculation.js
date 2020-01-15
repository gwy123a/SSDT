/**
 *  Calculation for array
 * @type {module.Calculation}
 */
module.exports = class Calculation {
    constructor(array) {
        this.array = array;
    }

    // sum
    sum() {
        console.log("===[" + this.array + "]sum start===")
        let sum = 0;
        for (let i = 0; i < this.array.length; i++) {
            sum += this.array[i];
        }
        console.log("===[" + this.array + "]sum end, sum : " + sum + "===")
        return sum
    }
}