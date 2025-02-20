//백준 5585번 문제: 거스름돈

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
    let coins = [500, 100, 50, 10, 5, 1];
    let money = 1000 - lines;

    let count = 0;
    for(let coin of coins){
        count += Math.floor(money / coin);
        money %= coin;
    }

    return count;
}