
// 2차원 배열 예제 (1은 갈 수 있는 경로, 0은 갈 수 없는 경로)
const grid = [
    [1, 1, 1, 1],
    [1, 0, 1, 1],
    [0, 1, 1, 0],
    [0, 1, 1, 1],
];

// 상, 하, 좌, 우 탐색을 위한 방향 벡터
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

// 방문 정보 배열
const visited = Array.from({ length : grid.length }, () => Array(grid[0].length).fill(false));

function bfs(x, y, visited, grid){
    const queue = [[x, y]];
    visited[x][y] = true;

    while(queue.length > 0){
        const [cx, cy] = queue.shift();
        console.log(cx, cy);

        for(let i = 0; i < 4; i++){
            const nx = cx + dx[i];
            const ny = cy + dy[i];

            if(
                nx >= 0 &&
                nx < grid.length &&
                ny >= 0 &&
                ny < grid[0].length &&
                !visited[nx][ny] &&
                grid[nx][ny] === 1
            ){
                queue.push([nx, ny]);
                visited[nx][ny] = true;
             }
        }
    }
}


// (0, 0)부터 탐색 시작
bfs(0, 0, visited, grid);