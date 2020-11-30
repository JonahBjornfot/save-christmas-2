import { randomArray, swap } from './helpers.js'

let h = [8, 2, 4, 7]
swap(h, 1, 2);

const a = randomArray(100, 10)

const arr = [3, 8, 7, 2]

function bubbleSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
}

bubbleSort(arr);

console.log(arr)