// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let input = [];

// rl.on('line', (line) => {
//     input.push(line.trim().split(" ").map((e) => Number(e)));
// }).on('close', () => {
//     console.log(solution(input));
//     process.exit(0);
// })

let input = [[5], [6, 9, 5, 7, 4]];

console.log(solution(input));

function solution(input){
    let N = input[0];
    let tops = input[1];

    let stack = [];
    let count = [];

    tops.reverse();
    console.log(tops);

    stack.push(tops[0]);

    for(let i = 1; i < tops.length + 1; i++){
        while(stack[stack.length - 1] <= tops[i]){
            stack.pop();
        }
        count.push(stack.length);
        stack.push(tops[i]);
    }

    console.log(count);

}
