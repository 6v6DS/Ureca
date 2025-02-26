// 백준 10026번 문제: 적록색약

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let lines = [];

rl.on('line', (line) => {
    lines.push(line.trim());
}).on('close', () => {
    let input = [lines[0].split(" ").map(Number)];
    for (let i = 1; i < lines.length; i++) {
        input.push(lines[i].split("").map(Number));
    }
    console.log(solution(input));
    process.exit(0);
})
