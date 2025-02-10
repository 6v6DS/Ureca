const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
let temp = [];
let caseCount = -1;

rl.on('line', (line) => {
    if (caseCount === -1) {
        caseCount = Number(line.trim()); // 첫 줄: 테스트 케이스 개수
    } else if (temp.length === 0) {
        temp.push(Number(line.trim())); // N 크기 저장
    } else {
        temp.push(line.trim().split(" ")); // 맵 데이터 저장
        if (temp.length - 1 === temp[0]) { // N개 행을 다 받으면 저장
            input.push(temp.slice()); // 깊은 복사하여 저장
            temp = []; // temp 초기화
        }
    }
}).on('close', () => {
    input.forEach((testCase, index) => {
        console.log(`#${index + 1} ${solution(testCase)}`);
    });
    process.exit(0);
});

function solution(testCase) {
    let N = testCase[0]; // 배열 크기 (숫자)
    let map = testCase.slice(1); // 맵 데이터 (2차원 배열)

    let dr = [-1, 1, 0, 0];
    let dc = [0, 0, -1, 1];

    // 기지국이 커버하는 영역을 표시
    for (let r = 0; r < N; r++) {
        for (let c = 0; c < N; c++) {
            if (map[r][c] === 'A') {
                for (let i = 0; i < 4; i++) {
                    let nr = r + dr[i];
                    let nc = c + dc[i];

                    if (nr >= 0 && nr < N && nc >= 0 && nc < N && map[nr][nc] === 'H') {
                        map[nr][nc] = 'X'; // 커버된 집 표시
                    }
                }
            }
        }
    }

    // 커버되지 않은 집 개수 세기
    let uncoveredHouses = 0;
    for (let r = 0; r < N; r++) {
        for (let c = 0; c < N; c++) {
            if (map[r][c] === 'H') {
                uncoveredHouses++;
            }
        }
    }

    return uncoveredHouses;
}
