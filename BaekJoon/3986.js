// 백준 3986번 문제: 좋은 단어

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let lines = [];

rl.on('line', (line) => {
    lines.push(line.trim());
}).on('close', () => {
    let input = [];
    input.push(Number(lines[0]));
    for (let i = 1; i < lines.length; i++) {
        input.push(lines[i].split(""));
    }
    console.log(solution(input));
    process.exit(0);
})


function solution(input){
    let N = input[0];
    let words = input.slice(1);

    let stack = [];
    let count = 0;

    for(let i = 0; i < N; i++){
        stack.push(words[i][0]);
        for(let j = 1; j < words[i].length; j++){
            if(stack[stack.length - 1] == words[i][j]){
                stack.pop();
            }else{
                stack.push(words[i][j]);
            }
        }
        if(stack.length == 0){
            count++;
        }
        stack = [];
    }

    return count;
}