//백준 1446번 문제: 지름길

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
    input.push(line.split(" ").map((e) => Number(e)));
}).on('close', () =>{
    console.log(solution(input));
    process.exit(0);
});


// let input = [[5, 150],
//     [0, 50, 10],
//     [0, 50, 20],
//     [50, 100, 10],
//     [100, 151, 10],
//     [110, 140, 90]];

// let input = [
//     [2, 100],
//     [10, 60, 40],
//     [50, 90, 20]
// ];

// let input = [[8, 900],
//     [0, 10, 9],
//     [20, 60, 45],
//     [80, 190, 100],
//     [50, 70, 15],
//     [160, 180, 14],
//     [140, 160, 14],
//     [420, 901, 5],
//     [450, 900, 0]];

// console.log(solution(input));

function solution(input) {
    let [N, D] = input[0];
    let road = input.slice(1);
    
    
    let dist = Array(D + 1).fill().map((_, i) => i);
    // console.log(dist);

    
    road.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i <= D; i++) {
        if (i > 0) {
            dist[i] = Math.min(dist[i], dist[i - 1] + 1); 
        }

        for (let [start, end, length] of road) {
            if (start === i && end <= D) {
                dist[end] = Math.min(dist[end], dist[start] + length);
            }
        }
    }

    return dist[D];
}

// function solution(input) {
//     let [N, D] = input[0]; // 지름길 개수와 도로 길이
//     let shortcuts = input.slice(1);

//     // 도로 거리 배열
//     let position = 0;
//     let distance = 0;

//     // 지름길을 출발 위치 기준으로 정렬 (가까운 순서대로)
//     shortcuts.sort((a, b) => a[0] - b[0]);

//     for (let i = 0; i < shortcuts.length; i++) {
//         let [start, end, length] = shortcuts[i];

//         if (end > D) continue; // 고속도로 끝을 넘는 지름길 무시

//         if (start >= position) {
//             // 현재 위치부터 지름길까지 일반 도로로 이동
//             distance += (start - position);
//             position = start;

//             // 지름길이 더 짧다면 선택
//             if (length < (end - start)) {
//                 distance += length;
//                 position = end;
//             }
//         }
//     }

//     // 마지막 남은 일반 도로 이동
//     distance += (D - position);

//     return distance;
// }



// function solution(input){
//     let N = input[0][0];
//     let D = input[0][1];

//     let road = input.slice(1);

//     road.sort((a, b) => {
//         if(a[0] == b[0]){
//             return a[2] - b[2];
//         }else{
//             return a[0] - b[0];
//         }
//     });

//     let count = 0;
//     let EndTime = 0;
//     let stack = [];

//     for(let [start, end, short] of road){
//         stack.push(start);
//         if(start >= EndTime){
//             if(end > D) continue;
//             console.log(`endtime:${end - start}`);
//             if(short < end - start){
//                 //console.log(short, D - EndTime);
//                 EndTime = end;
//                 count += short;
//                 console.log(count);
//             }else{
//                 console.log(`this: ${short} ${D - EndTime}`);
//                 count += D - EndTime;
//                 EndTime += (start - stack[stack.length - 2]);
//                 console.log(`this2: ${short} ${D - EndTime}`);
//                 console.log(start - stack[stack.length - 2]);
                
//             }
            
//             //console.log(EndTime);
//         }
//     }
//     console.log(`count: ${count}`);
//     // console.log(road);
// }