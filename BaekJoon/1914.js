const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let lines;
let result = [];
//let sum = 0;

rl.on('line', (line) => {
    lines = Number(line);
}).on('close', () => {
    
    let n = lines;
    if(lines > 20){
        // console.log(sum);
        console.log(((2 ** n) - 1).toString());
        // console.log((2n ** BigInt(n) - 1n).toString());
        process.exit(0);
    }else{
        // console.log(sum);
        hanoi(lines, 1, 2, 3);
        console.log(((2 ** n) - 1).toString());
        // console.log((2n ** BigInt(n) - 1n).toString());
        console.log(result.join("\n"));
    }
    process.exit(0);
})

function hanoi(count, from, temp, to){
    if(count == 0) return;
    //sum++;
    hanoi(count-1, from, to, temp);
    result.push(`${from} ${to}`);
    hanoi(count-1, temp, from, to);
}