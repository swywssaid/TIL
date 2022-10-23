insertionSort(arr)
function solution(arr)
{   

    let answer = [arr[0]];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i+1]) {
            continue;
        }

        answer.push(arr[i+1])
    }
    answer.pop()
    console.log(answer)

    return answer;
}

let arr = [1, 1, 3, 3, 0, 1, 1]
solution(arr)