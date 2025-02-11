/*
 * NxN 배열을 위한 기지국(A)와 집(H)가에 대한 정보가 주어진다. 
 * 기지국은 상하좌우 1셀씩만 커버한다. 커버하지 못하는 집의 개수를 출력
 *
 * [제약조건]
 * N은 3~15이하
 * 
 * [입력]
 * 첫줄은 테스트 케이스 수(T)가 주어진다.
 * 두번째 줄은 배열 크기(N)이 주어지고
 * 세번째 줄부터 N개의 기지국 정보가 제공된다. 
 * 
 * [출력 결과]
 * #1 4
 * #2 5
 * #3 9
*/

// 결과를 위한 변수

// 입력 처리 
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// const input = [];

// rl.on('line', (line) => {
//     let N = Number(input[0]);
//     for(let i = 0; i < N; i++){
//         input.push(line.trim().split("\n").map((el) => el.split(" ").map()));
//     }
// }).on('close', () => {
//     console.log(solution(input));
//     process.exit(0);
// })

// function solution(input){
//     console.log(input);
//     return input;
// }



const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
let temp = []; // 현재 테스트 케이스 저장
let caseCount = -1; // 현재 읽어야 할 테스트 케이스 개수

rl.on('line', (line) => {
    if (caseCount === -1) {
        caseCount = Number(line.trim()); // 첫 번째 줄: 테스트 케이스 개수
    } else if (temp.length === 0) {
        temp.push(Number(line.trim())); // 맵 크기 저장
    } else {
        temp.push(line.trim().split(" ")); // 맵 데이터 저장
        if (temp.length - 1 === temp[0]) { // 맵 크기만큼 데이터 받았으면 저장
            input.push([...temp]); // 깊은 복사하여 input에 추가
            temp = []; // temp 초기화하여 새로운 테스트 케이스 받기 시작
        }
    }
}).on('close', () => {
    console.log(solution(input));
    process.exit(0);
});

function solution(input) {
    let AnswerN = 0;
    let N = Number(input[0][0]);

    let dr = [-1, 1, 0, 0];
    let dc = [0, 0, -1, 1];
    let nr = 0, nc = 0, d = 4;

    for(let r = 1; r < N; r++){
        for(let c = 0; c < N; c++){
            if(input[r][c] == 'A'){
                for(let i = 0; i < d; i++){
                    nr = r+dr[i];
                    nc = c+dc[i];
                    if(nr > -1 && nr < N && nc > -1 && nc < N && input[nr][nc] == 'H'){
                        map[nr][nc] = 'X';
                    }
                }
            }
        }
    }

    for(let r = 1; r < N; r++){
        for(let c = 0; c < N; c++){
            if(map[r][c] == 'H'){
                AnswerN++;
            }
        }
    }

    return AnswerN;
}




//구현하기 
//1. 기지국을 찾아 상하좌우에 커버됐다고 표시하기 -> 행 전체를 탐색 N^2

//1.1 맵 전체를 탐색하면서 

//1.2 기지국(A)를 찾는다. 

//1.3 기지국의 상하좌우의 좌표를 얻고 경계내에 있는지 검사

//1.4 상하좌우에 커버됐다고 표시한다. 

//2. 맵 전체를 탐색하면 커버 안된 집의 개수를 센다

// 출력

