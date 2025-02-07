const fs = require('fs');

const filePath = process.platform == 'linux' ? '/dev/stdin' :__dirname+'\\input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const tc = Number(input[0]);
const testcases = [];
for(let i = 1; i <= tc; i++){
    // i 번째 라인의 데이터를 공백을 기준으로 분리하고 .map(Number)함수를 이용하여 숫자로 변환.
    const temp = input[i].split(" ").map(Number);
    const testcase = [];
    testcases.push(temp.slice(1));
    // testcases.push(testcase);
}
console.log(solution(testcases));


function solution(testcases){
    let answer = [];
    for(let i = 0; i < tc; i++){
        console.log(testcases[i]);
        let sum = 0;
        for(let j = 0; j < testcases[i].length; i++){
            for(let k = 0; k < testcases[j].length; j++){
                sum += testcases[i][j][k];
            }
            answer.push(sum / testcases[i][j].length);
        }
        
    }
    return answer;
}