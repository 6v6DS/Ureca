//백준 2075번 문제: N번째 큰 수

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let lines = [];

rl.on('line', (line) => {
    lines.push(line.split(" ").map((e) => Number(e)));
}).on('close', () => {
    console.log(solution(lines));
    process.exit(0);
});

function solution(lines){
    let N = lines[0];
    let input = lines.slice(1);

    let max = 0;
    let result = [];
    for(let i = N; i < 0; i--){
        for(let j = 0; j < N; j++){
            if(input[i][j] > input[i][j+1]){
                max = input[i][j+1];
            }
        }
    }

    console.log(max);
}
