// 백준 1158번 문제: 요세푸스 문제


/*

7 3 

1 2 3 4 5 6 7

1 2 | 4 5 6 7 -> 3

1 2 4 5 | 7 -> 6

1 | 4 5 7 -> 2

1 4 5 | -> 7

1 4 | -> 5

| 4 -> 1

| -> 4

*/

let input = [7, 3];

console.log(solution(input));

function solution(input){
    let N = input[0];
    let K = input[1];
    let arr = [];
    let result = [];
    for(let i = 1; i <= input[0]; i++){
        arr.push(i);
    }

    /*

    3 6 2 7 5 1 4

    7 2
    1 2 3 4 5 6 7
    1 | 3 4 5 6 7 -> 2
    1 3 | 5 6 7 -> 4
    1 3 5 | 7 -> 6
    | 3 5 7 -> 1
    3 | 7 -> 5
    | 7 -> 3
    | -> 7
    2, 4, 6, 1, 5, 3, 7
    */

    // for(let i = 0; i < N; i++){
    //     for(let j = 1; j < K; j++){
    //         arr.push(arr.shift());
    //         // console.log((i + j) % K);
    //     }
    //     result.push(arr.shift());
    //     // K = (i + j) % arr.length;
    // }

    // for(int i = 0; i < N; i++){

    // }

    console.log(result);
}