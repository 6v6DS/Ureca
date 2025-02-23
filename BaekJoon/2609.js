// 백준 2609번: 최대공약수와 최소공배수

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let lines = [];

rl.on('line', (line) => {
    lines = line.trim().split(" ").map(e => Number(e));
}).on('close', () => {
    console.log(solution(lines));
    process.exit(0);
})

function solution(input) {
    input.sort((a, b) => b - a);

    let n = input[0];
    let m = input[1];

    return gcd_lcm(n, m);
}
function gcd_lcm(n, m){
    let answer = [];
    let answer2 = [];
    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            answer.push(i);
        }
    }
    for(let i = 1; i <= m; i++){
        if(m % i === 0){
            answer2.push(i);
        }
    }
    let gcd = 0;
    answer2.forEach((e) => {
        if(answer.includes(e)){
            gcd = e;
        }
    })

    let lcm = (n * m) / gcd; 

    return [gcd,lcm].join("\n");
}