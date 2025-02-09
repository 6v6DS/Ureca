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
    let A = lines[0][0];
    let B = lines[0][1];

    return A * B;
}