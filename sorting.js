
const _MERGESORT = 1;

module.exports = class Sorting {
    constructor(settings) {
        this.settings = settings;
        if (!this.settings || !this.settings.compareFunction) {
            throw "You need to specify a compareFunction"
        }

        if (!this.settings.mode) {
            this.settings.mode = _MERGESORT;
        }

    }

    mergeSort(list) {
        _mergeSort(list, 0, list.length - 1, this.settings.compareFunction);
    }

    quickSort(list) {

    }

    shellSort(list) {

    }

    heapSort(list) {

    }

    bubbleSort() {

    }


}

function _mergeSort(list, leftIndex, rightIndex, compareFunction) {
    if (leftIndex >= rightIndex) return;

    let mediumIndex = parseInt((leftIndex + rightIndex) / 2);
    console.log(leftIndex, mediumIndex, rightIndex);

    _mergeSort(list, leftIndex, mediumIndex, compareFunction);
    _mergeSort(list, mediumIndex + 1, rightIndex, compareFunction);

    _merge(list, leftIndex, mediumIndex, rightIndex, compareFunction);
}

function _merge(list, leftIndex, mediumIndex, rightIndex, compareFunction) {
    // console.log("LISTA",list);
    let L = [];// JSON.parse(JSON.stringify( list.slice(leftIndex,mediumIndex + 1)));    
    let R = []; // JSON.parse(JSON.stringify( list.slice(mediumIndex + 1,rightIndex + 1)));   
    let LLength = mediumIndex - leftIndex + 1;
    let RLength = rightIndex - mediumIndex;
    for (let x = 0; x < LLength; x++)
        L.push(list[leftIndex + x]);
    for (let x = 0; x < RLength; x++)
        R.push(list[mediumIndex + 1 + x]);

    console.log(L,R);

    let i = j = k = 0; // left, right, merged
    while (i < L.length && j < R.length) {
        if (compareFunction(L[i], R[j]) == 1) {
            list[k] = L[i];
            i++; k++;
        } else {
            list[k] = R[j];
            j++; k;;
        }
    }

    while (i < L.length) {
        list[k] = L[i];
        i++; k++;
    }

    while (j < R.length) {
        list[k] = L[j];
        j++; k++;
    }
    console.log("LISTA AFTER",list);
}

