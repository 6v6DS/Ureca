// 백준 1966번 문제: 프린터 큐

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
    lines = lines.slice(1);
    let index = 1;

    console.log(solution(T, lines));
    process.exit(0);
});

function solution(T, input) {
    let result = [];
    let arr = [];
    for(let i = 0; i < input.length; i++){
        arr.push(input[i].split(' ').map(e => Number(e)));
    }
    let count = [];
    let count2 = [];
    for(let i = 0; i < arr.length; i++){
        if(i % 2 == 0){
            count.push(arr[i]);
        }else{
            count2.push(arr[i]);
        }
    }

    for(let i = 0; i < T; i++){
        let printing = new Map();
        for(let j = 0; j < count2[i].length; j++){
            printing.set(j, count2[i][j]);
        }
        const mapToArray = [...printing];
        const sortedMap = new Map(mapToArray.sort((a, b) => {
            if (b[1] !== a[1]) {
              return b[1] - a[1]; // value 기준 내림차순 정렬
            }
            return b[0] - a[0]; // key 기준 오름차순 정렬 (문자열 비교)
        }));
        let b = count[i][1];
        let countArray = [...sortedMap]; // Map을 배열로 변환

        let index = countArray.findIndex(([key, value]) => key === b);
        console.log(sortedMap);
        // let c = [...sortedMap]
        // result.push(indexOf(c[b]));
        console.log(index);
        result.push(index);
        //result.push(sortedMap[count[1]]);
    }
    return result.join("\n");
}