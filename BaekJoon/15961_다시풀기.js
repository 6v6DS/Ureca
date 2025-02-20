//백준 15961번 문제: 회전 초밥

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let lines = [];

rl.on('line', (line) => {
    lines.push(line.trim().split(" ").map(e => Number(e)));
}).on('close', () => {
    console.log(solution(lines));
    process.exit(0);
})

function solution(lines) {
    let N = lines[0][0];    // 접시의 수
    let d = lines[0][1];    // 초밥의 가짓수
    let k = lines[0][2];    // 연속해서 먹는 접시의 수
    let c = lines[0][3];    // 쿠폰 번호

    let arr = [];
    arr = lines.slice(1);   // 배열

    let result = [];
    let flatArr = arr.flat();   //2차원 배열 -> 1차원 배열
    let n = flatArr.length;     // 배열의 길이

    for (let i = 0; i < n; i++) {   // 원형 배열
        let sequence = [];
        for (let j = 0; j < k; j++) {
            sequence.push(flatArr[(i + j) % n]);    
        }
        result.push(sequence);
    }

    console.log(result);

    let count = 0;
    let size_count = [];
    result.forEach((e) => {
        // console.log(e);
        e = new Set(e);
        count = e.size;
        if(!e.has(c)){
            count++;
        }
        size_count.push(count);
    })

    return Math.max(...size_count);
}