// 백준 10808번 문제: 알파벳 개수

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let lines = [];

rl.on('line', (line) => {
    lines = line.trim().split("");
}).on('close', () => {
    console.log(solution(lines));
    process.exit(0);
});

function solution(lines){
    let arr = new Array(26).fill(0);

    for(let i = 0; i < lines.length; i++){
        let charac = lines[i];
        let index = charac.charCodeAt(0) - 'a'.charCodeAt(0);
        arr[index]++;
    }
    return arr.join(" ");
}