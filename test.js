let arr = [4,3,2,1,5];
function swap(arr,targetX,targetY) {
    let temp = arr[targetX];
    arr[targetX] = arr[targetY];
    arr[targetY] = temp;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                minIndex = j
            }
        }
        swap(arr, i, minIndex)
    }
    console.log(arr)
}

selectionSort(arr)