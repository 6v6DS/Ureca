// 백준 1001번 문제: A - B

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];


rl.on('line', (line) => {
    for(let i = 0; i < N; i++){
        input.push(line.split(" "));
    }
     // 입력받은 줄을 배열에 저장
}).on('close', () => {
    console.log(solution(input));
    process.exit();
});

function solution(input) {
    let N = parseInt(input[0]); // 첫 번째 줄: 입력 개수
    let result = [];

    for (let i = 1; i <= N; i++) {
        let numbers = input[i].split(' ').map(Number);
        result.push(numbers.reduce((a, b) => a - b)); // 입력된 숫자들 뺄셈
    }

    return result.join('\n'); // 여러 줄 출력
}
