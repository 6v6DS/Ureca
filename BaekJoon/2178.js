//백준 2178번 미로 탐색

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let lines = [];

rl.on('line', (line) => {
    lines.push(line.trim());
}).on('close', () => {
    let input = [lines[0].split(" ").map(Number)];
    for (let i = 1; i < lines.length; i++) {
        input.push(lines[i].split("").map(Number));
    }
    console.log(solution(input));
    process.exit(0);
})


// let input = [[4, 6],
//     [1,0,1,1,1,1],
//     [1,0,1,0,1,0],
//     [1,0,1,0,1,1],
//     [1,1,1,0,1,1]];

// console.log(solution(input));

function solution(input){
    let N = input[0][0];
    let M = input[0][1];
    // let count = 0;
    let grid = input.slice(1);

    const dx = [-1, 1, 0, 0]; // 상 하 좌 우
    const dy = [0, 0, -1, 1];

    const visited = Array.from({length: grid.length}, () => Array(grid[0].length).fill(false));

    function bfs(x, y, visited, grid){
        const queue = [[x, y]]; // bfs이기 떄문에 큐 사용
        visited[x][y] = true;

        while(queue.length > 0){
            const [cx, cy] = queue.shift();
            // console.log(cx, cy);
            // count++;

            for(let i = 0; i < 4; i++){
                const nx = cx + dx[i];
                const ny = cy + dy[i];

                if(nx >= 0 &&
                    nx < grid.length &&
                    ny >= 0 &&
                    ny < grid[0].length &&
                    visited[nx][ny] == 0 && // 방문하지 않은 경우
                    grid[nx][ny] === 1
                ){
                    queue.push([nx,ny]);
                    visited[nx][ny] = visited[cx][cy] + 1; //거리 증가
                }
            }
        }
    }
    bfs(0, 0, visited, grid);

    return visited[N-1][M-1];
}
