//백준 3055번 문제: 탈출

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let arr = [];

rl.on('line', (line) => {
    arr.push(line.trim());
}).on('close', () => {
    console.log(solution(arr));
    process.exit(0);
})


// let input = `3 3
// D.*
// ...
// ..S`;

// console.log(solution(input));

function solution(input) {
    let lines = input;
    // console.log(lines);
    let R = Number(lines[0].split(" ")[0]);
    let C = Number(lines[0].split(" ")[1]);
    let grid = lines.slice(1).map(e => e.split(""));
    let start;
    let end;

    let visited = Array.from({ length: grid.length }, () => Array(grid[0].length).fill(Infinity));
    let water_visited = Array.from({ length: grid.length }, () => Array(grid[0].length).fill(Infinity));

    let queue = [];
    let water_queue = [];

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 'S') {
                start = [i, j];
                queue.push([i, j]);
                visited[i][j] = 0;
            }
            if (grid[i][j] == 'D') {
                end = [i, j];
            }
            if (grid[i][j] == '*') {
                water_queue.push([i, j]);
                water_visited[i][j] = 0;
            }
        }
    }


    const dx = [-1, 1, 0, 0]; //상하좌우
    const dy = [0, 0, -1, 1];



    while (water_queue.length > 0) {
        const [x, y] = water_queue.shift();

        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];

            if (nx >= 0 &&
                nx < grid.length &&
                ny >= 0 &&
                ny < grid[0].length &&
                water_visited[nx][ny] == Infinity &&
                grid[nx][ny] === '.'
            ) {
                water_visited[nx][ny] = water_visited[x][y] + 1;
                water_queue.push([nx, ny]);
            }
        }
    }

    while (queue.length > 0) {
        const [x, y] = queue.shift();
        //console.log(cx, cy);

        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];

            if (nx >= 0 &&
                nx < grid.length &&
                ny >= 0 &&
                ny < grid[0].length &&
                visited[nx][ny] == Infinity &&
                (grid[nx][ny] == '.' ||
                    grid[nx][ny] == 'D')
            ) {
                if (visited[x][y] + 1 < water_visited[nx][ny]) {
                    visited[nx][ny] = visited[x][y] + 1;
                    queue.push([nx, ny]);
                    
                    if(grid[nx][ny] == 'D') {
                        return visited[nx][ny];
                    }
                }
            }

        }
    }

    return 'KAKTUS';
    //console.log(time);
}