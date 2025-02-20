// 백준 15649번 문제: N과 M(1)

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let lines = [];

// rl.on('line', (line) => {
//     lines = line.trim().split(" ").map((e) => Number(e));
// }).on('close', () => {
//     console.log(solution(lines));
//     process.exit(0);
// });

let lines = [10, 10];

console.time();
console.log(solution(lines));
console.timeEnd();

/* flag 버전 */
function solution(lines){
    let N = lines[0];
    let M = lines[1];
    let numbers = new Array(M);
    let result = [];

    let input = [];
    for(let i = 1; i <= N; i++){
        input.push(i);
    }

    function permutation(depth, flag){
        if(depth == M){
            //result.push(numbers.join(" "));
            return;
        }
        for(let i = 0; i < N; i++){
            if(flag & (1 << i)) continue;
            numbers[depth] = input[i];
            permutation(depth + 1, flag | (1 << i));
        }
    }
    permutation(0, 0);
    return result.join("\n");
}

/* 기존 버전 */
// function solution(arr, r, tmp=[], ans=[], isUsed = new Set()){
//     if(tmp.length == r){
//         ans.push([...tmp]);
//         return;
//     }

//     for(let i = 0; i < arr.length; i++){
//         if(isUsed.has(i)) continue;
//         isUsed.add(i);
//         tmp.push(arr[i]);
//         solution(arr, r, tmp, ans, isUsed);
//         tmp.pop();
//         isUsed.delete(i);
//     }
//     return;
// }


/* swap 버전 - M이 3이상일 경우에만 가능 */

// function solution(lines){
//     let N = lines[0];
//     let M = lines[1];
//     let input = [];

//     for(let i = 1; i <= N; i++){
//         input.push(i);
//     }
//     let result = [];

//     function permutation(depth){
//         if(depth == M){
//             //result.push([...input.slice(0, M)]);
//             return;
//         }
//         for(let i = depth; i < N; i++){
//             swap(i, depth);
//             permutation(depth + 1);
//             swap(i, depth);
//         }
//     }
//     function swap(i, j){
//         let temp = input[i];
//         input[i] = input[j];
//         input[j] = temp;
//     }

//     permutation(0);
//     return result;
// }
