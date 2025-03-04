// 백준 1330번 문제 : 두 수 비교하기

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
    input = line.trim().split(" ").map((e) => Number(e));
}).on('close', () => {
    console.log(solution(input));
    process.exit(0);
})

function solution(input){
    let A = input[0];
    let B = input[1];

    if(A > B){
        return '>' ;
    }else if(A < B){
        return '<';
    }else if(A == B){
        return '==';
    }
}