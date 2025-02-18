//백준 2961번 도영이가 만든 맛있는 음식

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let lines = [];

rl.on('line', (line) => {
    lines.push(line.trim().split(" ").map(e => Number(e)));
}).on('close', () => {
    console.log(solution(lines));
    process.exit(0);
})

function solution(lines) {
    let N = lines[0][0];
    let S = [];
    let B = [];
    for (let i = 1; i < lines.length; i++) {
        S.push(lines[i][0]);
        B.push(lines[i][1]);
    }

    function subset(depth, len, input, numbers, result) {
        if (depth == input.length) {
            if (len > 0) {
                result.push(numbers.slice(0, len));
            }
            return;
        }
        numbers[len] = input[depth];
        subset(depth + 1, len + 1, input, numbers, result);

        subset(depth + 1, len, input, numbers, result);
    }

    let S1 = [];
    let B1 = [];
    subset(0, 0, S, new Array(S.length), S1);
    subset(0, 0, B, new Array(B.length), B1);

    let min = Infinity;
    for (let i = 0; i < S1.length; i++) {
        let sum1 = S1[i].reduce((acc, cur) => acc * cur, 1);
        let sum2 = B1[i].reduce((acc, cur) => acc + cur, 0);
        
        let sum = Math.abs(sum1 - sum2);

        min = Math.min(min, sum);
    }
    return min;
}