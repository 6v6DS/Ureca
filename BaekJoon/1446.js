//백준 1446번 문제: 지름길

// const readline = require('readline');
// const rl = readline.creatInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let input = [];

// rl.on('line', (line) => {
//     input.push();
// }).on('cloes', () =>{
//     console.log(solution());
//     process.exit(0);
// });


// let input = [[5, 150],
//     [0, 50, 10],
//     [0, 50, 20],
//     [50, 100, 10],
//     [100, 151, 10],
//     [110, 140, 90]];

let input = [[8, 900],
    [0, 10, 9],
    [20, 60, 45],
    [80, 190, 100],
    [50, 70, 15],
    [160, 180, 14],
    [140, 160, 14],
    [420, 901, 5],
    [450, 900, 0]];

console.log(solution(input));

function solution(input){
    let N = input[0][0];
    let D = input[0][1];

    let road = input.slice(1);

    road.sort((a, b) => {
        if(a[0] == b[0]){
            return a[2] - b[2];
        }else{
            return a[0] - b[0];
        }
    });

    let count = 0;
    let EndTime = 0;
    let stack = [];

    for(let [start, end, short] of road){
        stack.push(start);
        if(start >= EndTime){
            if(end > D) continue;
            console.log(`endtime:${end - start}`);
            if(short < end - start){
                //console.log(short, D - EndTime);
                EndTime = end;
                count += short;
                console.log(count);
            }else{
                console.log(`this: ${short} ${D - EndTime}`);
                count += D - EndTime;
                EndTime += (start - stack[stack.length - 2]);
                console.log(`this2: ${short} ${D - EndTime}`);
                console.log(start - stack[stack.length - 2]);
                
            }
            
            //console.log(EndTime);
        }
    }
    console.log(`count: ${count}`);
    // console.log(road);
}