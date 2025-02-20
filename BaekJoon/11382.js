//백준 11382번 문제: 꼬마 정민

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const lines = [];
rl.on('line', (line) => {
  lines.push(line.trim().split(" "));
}).on('close', () => {
  console.log(solution(lines));
  process.exit(0);
});

function solution(lines){
    let A = Number(lines[0][0]);
    let B = Number(lines[0][1]);
    let C = Number(lines[0][2]);

    return A + B + C;
}