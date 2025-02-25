//백준 9375번 문제: 패션왕 신해빈

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let lines = [];

rl.on('line', (line) => {
    lines.push(line.trim());
}).on('close', () => {
    let input = [];
    let T = Number(lines[0]);
    let index = 1;

    for (let t = 0; t < T; t++) {
        let N = Number(lines[index++]);
        let clothes = [];
        
        for (let i = 0; i < N; i++) {
            clothes.push(lines[index++].split(" "));
        }

        input.push(clothes);
    }

    console.log(solution(input));
    process.exit(0);
});

function solution(clothesList) {
    let results = [];

    for (let clothes of clothesList) {
        let key = new Map();

        for (let i = 0; i < clothes.length; i++) {
            if (key.has(clothes[i][1])) {
                key.set(clothes[i][1], key.get(clothes[i][1]) + 1);
            } else {
                key.set(clothes[i][1], 1);
            }
        }

        let answer = 1;
        for (let count of key.values()) {
            answer *= (count + 1);
        }

        results.push(answer - 1);
    }

    return results.join("\n");
}


// function solution(clothes) {
//     let key = new Map();

//     for (let i = 0; i < clothes.length; i++) {
//         if (key.has(clothes[i][1])) {
//             key.set(clothes[i][1], key.get(clothes[i][1]) + 1);
//         } else {
//             key.set(clothes[i][1], 1);
//         }
//     }
//     console.log(key);
//     let answer = 1;
//     for (let a of key.values()) {
//         answer *= (a + 1);
//     }

//     console.log(answer);
//     return answer - 1;

// }
// console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"], ["yellow_hat", "face"], ["yellow", "face"], ["yellow", "high"], ["yellow", "down"]]))
//console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]));
