// 백준 9498번 문제 : 시험 성적적

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
});

function solution(lines){
    let score = lines;
    if(score >= 90){
        return 'A';
    }else if(score >= 80){
        return 'B';
    }else if(score >= 70){
        return 'C';
    }else if(score >= 60){
        return 'D';
    }else{
        return 'F';
    }
}