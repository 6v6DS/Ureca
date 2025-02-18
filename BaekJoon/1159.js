// 백준 2961번: 농구 경기

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let lines = [];

// rl.on('line', (line) => {
//     lines.push(line.trim().split("\n"));
// }).on('close', () => {
//     console.log(solution(lines));
//     process.exit(0);
// })

let lines = [[18], ['babic', 'keksic', 'boric',
    'bukic','sarmic','balic','kruzic','hrenovkic',
    'beslic','boksic','krafnic','pecivic','klavirkovic',
    'kukumaric','sunkic','kolacic','kovacic',
    'prijestolonasljednikovi']];

console.log(solution(lines));

function solution(lines){
    let N = lines[0];
    let members = lines[1];

    members.sort();
    console.log(members);
}