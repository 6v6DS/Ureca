// 백준 1987번 문제: 알파벳

/*

경로특징(모든 노드 방문) 이므로 .. dfs로 풀이.
(0,0)에서 시작해서
해당 칸을 stack에 넣고
dfs 안의 if문에서 stack.includes()로
확인해서, 없으면 계속 카운트.


'최대' 는.. bfs로 도착한 위치가 최소임.
최대는 다 가봐야 함. 모든 노드 방문이기 때문에
dfs를 사용한다.

*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let lines = [];

rl.on('line', (line) => {
    lines.push(line.trim());
}).on('close', () => {
    //console.time();
    let input = [lines[0].split(" ").map(Number)];
    for (let i = 1; i < lines.length; i++) {
        input.push(lines[i].split(""));
    }
    console.log(solution(input));
    //console.timeEnd();
    process.exit(0);
})


// let input = [[2, 4],
//     ['C','A','A','B'],
//     ['A','D','C','B']];

// let input = [[3, 6],
//     ['H','F','D','F','F','B'],
//     ['A','J','H','G','D','H'],
//     ['D','G','A','G','E','H']]

// let input = [[5, 5],
//     ['I','E','F','C','J'],
//     ['F','H','F','K','C'],
//     ['F','F','A','L','F'],
//     ['H','F','G','C','F'],
//     ['H','M','C','H','H']]

// console.log(solution(input));

function solution(input){
    let R = input[0][0];
    let C = input[0][1];
    let board = input.slice(1);

    const dx = [-1, 1, 0, 0]; //상하좌우
    const dy = [0, 0, -1, 1];

    let visited = Array.from({length: board.length}, () => Array(board[0].length).fill(0));

    //console.log(board);
    let is_visited = new Set();
    let answer = 0;
    let count = 0;
    let arr = [];
    let max_count = 0;

    function dfs(x, y, count){
        max_count = Math.max(max_count, count);
        let stack = [[x, y]];
        visited[x][y] = 1;
        

            //const [cx, cy] = stack.pop();
            // console.log(cx, cy);
            
            //console.log(is_visited);

            for(let i = 0; i < 4; i++){
                let nx = x + dx[i];
                let ny = y + dy[i];
                // count++;
                //console.log(count);
                // arr.push(count);
                if(nx >= 0 &&
                    nx < board.length &&
                    ny >= 0 &&
                    ny < board[0].length &&
                    !is_visited.has(board[nx][ny])
                ){
                    stack.push([nx, ny]);
                    is_visited.add(board[nx][ny]);
                    console.log(is_visited);
                    visited[nx][ny] = visited[x][y] + 1;
                    //console.log(visited);
                    dfs(nx, ny, count + 1);
                    is_visited.delete(board[nx][ny]);
                }
                
            }
            
        
    }
    is_visited.add(board[0][0]);
    dfs(0, 0, 1);
    //console.log(arr);
    //console.log(is_visited);
    //console.log(visited);
    //console.log(is_visited.delete(undefined))
    answer = is_visited.size;
    return max_count;

    // console.log(arr);
    // return Math.max(...arr);
}
