// 백준 4344번 문제: 평균은 넘겠지

// const fs = require('fs');

// const filePath = process.platform == 'linux' ? '/dev/stdin' :__dirname+'\\input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split("\n");

// const tc = Number(input[0]);
// const testcases = [];
// for(let i = 1; i <= tc; i++){
//     // i 번째 라인의 데이터를 공백을 기준으로 분리하고 .map(Number)함수를 이용하여 숫자로 변환.
//     const temp = input[i].split(" ").map(Number);
//     const testcase = [];
//     testcases.push(temp.slice(1));
//     // testcases.push(testcase);
// }
// console.log(solution(testcases));


// function solution(testcases){
//     let answer = [];
//     for(let i = 0; i < tc; i++){
//         console.log(testcases[i]);
//         let sum = 0;
//         for(let j = 0; j < testcases[i].length; i++){
//             for(let k = 0; k < testcases[j].length; j++){
//                 sum += testcases[i][j][k];
//             }
//             answer.push(sum / testcases[i][j].length);
//         }
        
//     }
//     return answer;
// }

const fs = require('fs');
const filePath = process.platform === 'linux'?"/dev/stdin":__dirname+"/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const inputCount = Number(input[0]);
const testCases = [];

for (let i = 1; i <= inputCount; i++) {
  const temp = input[i].split(" ").map(Number);
  const testCase = {
    N: temp[0],
    scores: temp.slice(1),
  };

  testCases.push(testCase);
}

//console.log(testCases);

const solution = ({N, scores})=>{
  const average = scores.reduce((acc, cur) => acc+cur,0)/N;
  const count =scores.reduce((count, score)=>(score>average?count+1:count),0)
  console.log(`${((count/N)*100).toFixed(3)}%`);
}

//테케별 수행하기 
testCases.forEach((testCase) => solution(testCase));