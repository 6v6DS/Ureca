// 백준 2839번 문제: 설탕 배달

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let lines = 0;

rl.on('line', (line) => {
    lines = Number(line);
}).on('close', () => {
    console.log(solution(lines));
    process.exit(0);
})

function solution(lines){
    let count = 0;

    while(lines >= 0){
        if(lines % 5 == 0){
            count += lines / 5;
            return count;
        }
        lines -= 3;
        count++;
    }
    return -1;
}