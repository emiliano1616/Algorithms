
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
        _quickSort(list, 0, list.length - 1, this.settings.compareFunction);
    }

    shellSort(list) {

    }

    heapSort(list) {

    }

    insertionSort(list) {
        _insertionSort(list, 0, list.length - 1, this.settings.compareFunction)
    }

    timSort(list) {

        for (let i = 0; i < list.length; i += 32) {
            const element = list[i];
            _insertionSort(list, i, Math.min(i + 32, list.length - 1), this.settings.compareFunction)
        }

        for (let i = 32; i < list.length; i = i * 2) {
            for (let left = 0; left < list.length; left += i * 2) {
                const mid = left + i - 1;
                const right = Math.min(left + 2 * i - 1, list.length - 1);

                _merge(list, left, mid, right, this.settings.compareFunction);
            }
        }
    }

    bubbleSort(list) {
        for (let i = 0; i <= list.length; i++) {
            for (let j = i; j <= list.length; j++) {
                if (this.settings.compareFunction(list[i], list[j]) == 1) {
                    const aux = list[i];
                    list[i] = list[j];
                    list[j] = aux;
                }
            }
        }
    }


}

//Using right index as pivot
function partition(list, left, right, compareFunction) {

    let pivot = list[right];

    let smallersIndex = left;

    for (let j = left; j < right; j++) {
        if (compareFunction(pivot, list[j]) == 1) {
            let aux = list[j];
            list[j] = list[smallersIndex];
            list[smallersIndex] = aux;
            smallersIndex++;
        }
    }

    let aux = list[right];
    list[right] = list[smallersIndex];
    list[smallersIndex] = aux;

    return smallersIndex;

}


function _quickSort(list, left, right, compareFunction) {
    if (right <= left) return;

    let pivotIndex = partition(list, left, right, compareFunction);

    _quickSort(list, left, pivotIndex - 1, compareFunction);
    _quickSort(list, pivotIndex + 1, right, compareFunction);
}

function _insertionSort(list, left, right, compareFunction) {
    for (let i = left; i < right; i++) {
        let min = list[i];
        let minIndex = i;
        for (let j = i + 1; j < right; j++) {
            if (compareFunction(min, list[j]) == 1) {
                min = list[j];
                minIndex = j;
            }
        }
        let aux = list[i];
        list[i] = min;
        list[minIndex] = aux;
    }
}

function _mergeSort(list, leftIndex, rightIndex, compareFunction) {
    if (leftIndex >= rightIndex) return;

    let mediumIndex = parseInt((leftIndex + rightIndex) / 2);
    // console.log(leftIndex, mediumIndex, rightIndex);

    _mergeSort(list, leftIndex, mediumIndex, compareFunction);
    _mergeSort(list, mediumIndex + 1, rightIndex, compareFunction);

    _merge(list, leftIndex, mediumIndex, rightIndex, compareFunction);
}

function _merge(list, leftIndex, mediumIndex, rightIndex, compareFunction) {
    let L = [];
    let R = [];
    let LLength = mediumIndex - leftIndex + 1;
    let RLength = rightIndex - mediumIndex;
    for (let x = 0; x < LLength; x++)
        L.push(list[leftIndex + x]);
    for (let x = 0; x < RLength; x++)
        R.push(list[mediumIndex + 1 + x]);


    let i = j = 0;
    let k = leftIndex;
    while (i < L.length && j < R.length) {
        if (compareFunction(L[i], R[j]) == 1) {
            list[k] = R[j];
            j++;
        } else {
            list[k] = L[i];
            i++;
        }
        k++;
    }

    while (i < L.length) {
        list[k] = L[i];
        i++; k++;
    }

    while (j < R.length) {
        list[k] = R[j];
        j++; k++;
    }
    // console.log("LISTA AFTER",list);
}

