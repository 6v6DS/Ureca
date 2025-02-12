const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = 0;
rl.on('line', (line) => {
    input = Number(line);
}).on('close', () => {
    hanoi(lines, 1, 2, 3);
    process.exit(0);
});

function hanoi(input, from, temp, to){
    if(input == 0) return;
    hanoi(input-1, from, to, temp);
    console.log(`${input}: ${from} -> ${to} \n`);
    hanoi(input-1, temp, from, to);
}