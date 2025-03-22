// 백준 17615번 문제 : 볼 모으기

// const readline = require('readline');
// const rl = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout
// });

// let input = [];

// rl.on('line', (line) => {
//     input.push(line.split('\n'));
// }).on('close', () => {
//     console.log(solution(input));
//     process.exit(0);
// });

let input = [['9'], ['RBBBRBRRR']];

console.log(solution(input));

function solution(input){
    let N = Number(input[0]);
    let balls = input[1].falt();
    let ball = [];
    
    

    console.log(balls);


}