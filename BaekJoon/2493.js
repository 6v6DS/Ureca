// 백준 2493번 문제: 탑

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let input = [];

// rl.on('line', (line) => {
//     input.push(line.trim().split(" ").map((e) => Number(e)));
// }).on('close', () => {
//     console.log(solution(input).join(" "));
//     process.exit(0);
// })

let input = [[5], [6, 9, 5, 7, 4]];
// let input = [[8], [8,7,6,5,4,3,2,1]];
console.log(solution(input));

function solution(input){
    let N = input[0];
    let tops = input[1];

    let stack = [];
    let result = [];

    stack.push(tops[0]);
    result.push(0);
    for(let i = 1; i < tops.length; i++){
        while(stack[stack.length - 1] <= tops[i]){
            stack.pop();
        } 
        // console.log(stack); 
        // console.log(i); 
        // console.log(tops[i]);   
        result.push(tops.indexOf(stack[stack.length-1]) + 1)
        let a = stack[stack.length - 1];
        console.log(a);
        stack.push(tops[i]);
    }

    return result;
}
