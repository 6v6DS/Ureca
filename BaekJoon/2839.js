// 백준 2839번 문제: 설탕 배달

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let lines = 0;

// rl.on('line', (line) => {
//     lines = Number(line);
// }).on('close', () => {
//     console.log(solution(lines));
//     process.exit(0);
// })

let lines = 11;

console.log(solution(lines));

function solution(lines){
    let count = 0;
    while(lines % 5 != 0){
        lines -= 3;
        count++;
    }
    if(lines < 0){
        return -1;
    }else{
        return count;
    }
}