// 백준 1922번 문제: 네트워크 연결

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
    input.push(line.trim());
}).on('close', () => {
    solution(input);
    process.exit(0);
})

function solution(input){
    let N = Number(input[0]);
    let M = Number(input[1]);
    let parent = [];
    
    for(let i = 2; i < M + 2; i++){
        input[i].split(' ').map(Number);

    }

    function make(N){
        for(let i = 0; i < N; i++){
            parent[i] = i;
        }
    }

    function find(v){
        
    }

    function union(){

    }

    console.log(N, M);
}