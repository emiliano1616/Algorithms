const srt = require('./sorting');

let settings = {
    compareFunction: function (a, b) { return a > b ? 1 : 2 }
}

let sorting = new srt(settings);

let array = [];
for(var i = 0; i < 10 ; i++){
    // bts.push(1,compareInt);
    array.push(Math.floor(Math.random() *1000) );
}


console.log("before",array);
sorting.mergeSort(array);
// console.log(array);