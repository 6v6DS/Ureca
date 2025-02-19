// // 2차원 배열 예제 (1은 갈 수 있는 경로, 0은 갈 수 없는 경로)
// const grid = [
//     [1, 1, 1, 1],
//     [1, 0, 1, 1],
//     [0, 1, 1, 0],
//     [0, 1, 1, 1],
// ];


// // 상, 하, 좌, 우 탐색을 위한 방향 벡터
// const dx = [-1, 1, 0, 0];
// const dy = [0, 0, -1, 1];

// // 방문 정보 배열
// const visited = Array.from({ length : grid.length }, () => Array(grid[0].length).fill(false));


// function dfsStack(x, y, visited, grid){
//     const stack = [[x, y]];
//     visited[x][y] = true;

//     while(stack.length > 0){
//         const [cx, cy] = stack.pop();
//         console.log(cx, cy);

//         for(let i = 0; i < 4; i++){
//             nx = cx + dx[i];
//             ny = cy + dy[i];

//             if(
//                 nx >= 0 &&
//                 nx < grid.length &&
//                 ny >= 0 &&
//                 ny < grid[0].length &&
//                 !visited[nx][ny] &&
//                 grid[nx][ny] == 1
//             ){
//                 stack.push([nx, ny]);
//                 visited[nx][ny] = true;
//             }
//         }
//     }
// }


// // (0, 0)부터 탐색 시작
// console.time();
// dfsStack(0, 0, visited, grid);
// console.timeEnd();

/*

재귀적으로 풀이하는 방식이, grid의 크기가 늘어나면 
시간이 적어짐.

*/
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

function dfsRecursive(x, y, visited, grid){
    // 현재 노드 방문 처리
    visited[x][y] = true;
    console.log(x, y);

    // 상, 하, 좌, 우 방향으로 인접한 노드를 탐색
    for(let i = 0; i < 4; i++){
        const nx = x + dx[i];
        const ny = y + dy[i];

        // 유효한 범위 내에 있고, 방문하지 않았고, 갈 수 있는 경로인 경우
        if(
            nx >= 0 &&
            nx < grid.length &&
            ny >= 0 &&
            ny < grid[0].length &&
            !visited[nx][ny] &&
            grid[nx][ny] == 1
        ){
            // 재귀적으로 탐색
            dfsRecursive(nx, ny, visited, grid);
        }
    }
}


// (0, 0)부터 탐색 시작
console.time();
dfsRecursive(0, 0, visited, grid);
console.timeEnd();