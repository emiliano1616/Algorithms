const srt = require('./sorting');

let settings = {
    compareFunction: function (a, b) { return a > b ? 1 : 2 }
}

let size = 100000;

let sorting = new srt(settings);
let array = [];
for(var i = 0; i < size ; i++){
    array.push(Math.floor(Math.random() *1000) );
}

let array2 = JSON.parse(JSON.stringify(array));
console.time('mergesort');
sorting.mergeSort(array2);
console.timeEnd('mergesort');

// array2 = JSON.parse(JSON.stringify(array));
// console.time('bubbleSort');
// sorting.bubbleSort(array2);
// console.timeEnd('bubbleSort');


// array2 = JSON.parse(JSON.stringify(array));
// console.time('insertionSort');
// sorting.insertionSort(array2);
// console.timeEnd('insertionSort');


array2 = JSON.parse(JSON.stringify(array));
console.time('timSort');
sorting.timSort(array2);
console.timeEnd('timSort');


array2 = JSON.parse(JSON.stringify(array));
console.time('quickSort');
sorting.quickSort(array2);
console.timeEnd('quickSort');

// for(let i = 0; i < array.length ; i++) {
//     console.log(array[i]);
// }