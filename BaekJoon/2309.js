const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let lines = [];

rl.on('line', (line) => {
    lines.push(Number(line));
}).on('close', () => {
    console.log(solution(lines));
    process.exit(0);
});

function solution(lines){
    let n = lines.length;
    let r = 7;
    let numbers = new Array(r);

    function combi(depth, start) {
        let sum = 0;
        if (depth === r) {
            numbers.forEach((e) => {
                sum += e;
            })
            if(sum == 100){
                console.log(numbers.sort((a, b) => a - b).join("\n"));
                process.exit(0);
            }
            return;
        }
        for (let i = start; i < n; i++) {
            numbers[depth] = lines[i];
            combi(depth + 1, i + 1);
        }
    }
    combi(0, 0);
}
