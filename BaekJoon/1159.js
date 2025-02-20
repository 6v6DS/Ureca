// 백준 1159번: 농구 경기

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let lines = [];

rl.on('line', (line) => {
    lines.push(line.trim());
}).on('close', () => {
    console.log(solution(lines));
    process.exit(0);
})

function solution(lines){
    let N = Number(lines[0]);
    let members = lines.slice(1);

    members.sort();
    let new_mem = members.map(e => e.split(''));

    let count = [];
    for(let i = 0; i < new_mem.length; i++){
        let index = new_mem[i][0];
        if(count[index] == undefined){
            count[index] = 0;
        }
        count[index] += 1;
    }
    let result = [];
    for(let i in count){
        if(count[i] >= 5){
            result.push(i);
        }
    }

    if(result.length == 0){
        return "PREDAJA";
    }else{
        result.sort();
        return result.join("");
    }
}