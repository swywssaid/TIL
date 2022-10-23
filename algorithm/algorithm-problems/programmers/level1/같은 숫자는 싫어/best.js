function solution(arr)
{
    return console.log(arr.filter((val,index) => val != arr[index+1]));
}
let arr = [1, 1, 3, 3, 0, 1, 1]
solution(arr)