// 백준 1062번: 가르침

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let lines = [];

// rl.on('line', (line) => {
    // lines.push(line.trim().split("\n"));
// }).on('close', () => {
//     console.log(solution(lines));
//     process.exit(0);
// })

let lines = [[3], [6],
[["antarctica"],
["antahellotica"],
["antacartica"]]];
console.log(solution(lines));

function solution(lines){
    let N = Number(lines[0]);
    let K = Number(lines[1]);
    if(K < 5){
        return 0;
    }
    let words = lines[2].flat();
    let word_have = ['a', 'n', 't', 'i', 'c'];

    let new_word = words.map(word => word.split(''));
    
    for(let i = 0; i < new_word.length; i++){
        new_word[i].splice(0, 4);
        new_word[i].splice(-4);
    }
    for(let i = 0; i < new_word.length; i++){
        new_word[i];
    }
    console.log(new_word);
}