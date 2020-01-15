module.exports = class Sort {
    constructor(array) {
        this.array = array
    }

    // bubble sort
    bubble() {
        console.log("===[" + this.array + "]bubble sort start===")
        let i = this.array.length, j
        let cnt = 0
        while (i > 0) {
            for (j = 0; j < i - 1; j++) {
                if (this.array[j] > this.array[j + 1]) {
                    cnt++
                    this.print("==bubble sort process " + cnt + "==", j, j + 1)
                    this.exchange(j, j + 1)
                }
            }
            i--
        }
        console.log("===[" + this.array + "]bubble sort finish, exchange " + cnt + " times===")
        return this.array;
    }

    // insert sort
    insert() {
        console.log("===[" + this.array + "]insert sort start===")
        if (this.array == null | this.array.length < 2) {
            return this.array
        }
        let cnt = 0
        for (let i = 0; i < this.array.length; i++) {
            for (let j = i - 1; j >= 0 && this.array[j] > this.array[j + 1]; j--) {
                cnt++
                this.print("==insert sort process " + cnt + "==", j, j + 1)
                this.exchange(j, j + 1)
            }
        }
        console.log("===[" + this.array + "]insert sort finish, exchange " + cnt + " times===")
        return this.array;
    }

    // select sort
    select() {
        console.log("===[" + this.array + "]select sort start===")
        if (this.array == null | this.array.length < 2) {
            return this.array
        }
        let cnt = 0
        for (let i = 0; i < (this.array.length - 1); i++) {
            let minIndex = i;
            for (let j = i + 1; j < this.array.length; j++) {
                minIndex = this.array[j] < this.array[minIndex] ? j : minIndex
            }
            cnt++
            this.print("==select sort process " + cnt + "==", i, minIndex)
            this.exchange(i, minIndex)
        }
        console.log("===[" + this.array + "]select sort finish, exchange " + cnt + " times===")
        return this.array;
    }

    exchange(i, j) {
        let a = this.array[i]
        this.array[i] = this.array[j]
        this.array[j] = a
    }

    print(str, i, j) {
        console.log(str, 'array array[' + i + ']:' + this.array[i] + ' and array[' + j + ']:' + this.array[j] + ' exchange')
    }
}