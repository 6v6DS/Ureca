// 백준 2630번 문제: 색종이 만들기

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let lines = [];

// rl.on('line', (line) => {
//     lines.push(line.split(" ").map((e) => Number(e)));
// }).on('close', () => {
//     console.log(solution(lines));
//     process.exit(0);
// })

let lines = [
    [8],
    [
        1, 1, 0, 0,
        0, 0, 1, 1
    ],
    [
        1, 1, 0, 0,
        0, 0, 1, 1
    ],
    [
        0, 0, 0, 0,
        1, 1, 0, 0
    ],
    [
        0, 0, 0, 0,
        1, 1, 0, 0
    ],
    [
        1, 0, 0, 0,
        1, 1, 1, 1
    ],
    [
        0, 1, 0, 0,
        1, 1, 1, 1
    ],
    [
        0, 0, 1, 1,
        1, 1, 1, 1
    ],
    [
        0, 0, 1, 1,
        1, 1, 1, 1
    ]
];


const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];



function solution(lines) {
    let N = lines[0];
    let paper = lines.slice(1);

    const visited = Array.from({ length: N }, () => Array(N).fill(false));

    function dfsRecursive(x, y, visited, paper) {
        // 현재 노드 방문 처리
        visited[x][y] = true;
        console.log(x, y);

        // 상, 하, 좌, 우 방향으로 인접한 노드를 탐색
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            // 유효한 범위 내에 있고, 방문하지 않았고, 갈 수 있는 경로인 경우
            if (
                nx >= 0 &&
                nx < paper.length &&
                ny >= 0 &&
                ny < paper[0].length &&
                !visited[nx][ny] &&
                paper[nx][ny] == 1
            ) {
                // 재귀적으로 탐색
                dfsRecursive(nx, ny, visited, paper);
            }
        }
    }

    for(let i = 0; i < N; i++){
        for(let j = 0; j < N; j++){
            
            dfsRecursive(i * 2, j * 2, visited, paper);
            // console.log(i, j);
        }
    }

    
}


console.log(solution(lines));