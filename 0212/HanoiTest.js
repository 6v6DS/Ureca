const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = 0;
let result = [];
rl.on('line', (line) => {
    input = Number(line);
}).on('close', () => {
    hanoi(input, 1, 2, 3);
    console.log(result);
    process.exit(0);
});

function hanoi(count, from, temp, to){
    if(count == 0) return;
    hanoi(count-1, from, to, temp);
    result.push(`${count} : ${from} -> ${to}`);
    hanoi(count-1, temp, from, to);
}