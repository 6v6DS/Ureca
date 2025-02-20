// 백준 1931번 문제: 회의실 배정

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let lines = [];

rl.on('line', (line) => {
    lines.push(line.split(" ").map((e) => Number(e)));
}).on('close', () => {
    console.log(solution(lines));
    process.exit(0);
});

// let lines = [[3],
//     [1, 3],
//     [5, 5],
//     [4, 5]
//   ]
// console.log(solution(lines));

function solution(lines){
    let N = lines[0];
    let room = lines.slice(1);

    let count = 0;
    let lastEnd = 0;
    room.sort((a, b) => {
        if (a[1] === b[1]) return a[0] - b[0];
        return a[1] - b[1];
    });

    for(let [start, end] of room){
        if(start >= lastEnd){
            count++;
            lastEnd = end;
        }
    }

    return count;
}
