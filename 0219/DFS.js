// const fs = require('fs');

// Read the input file
// const input = fs.readFileSync('C:\\Users\\student\\Ureca\\0219\\src\\graph\\AdjMatrix.txt', 'utf8').split('\n');

const input = [
    '2',
    '4',
    '0 1 0 1',
    '1 0 1 1',
    '0 1 0 1',
    '1 1 1 0',
    '6',
    '0 1 0 1 0 0',
    '1 0 1 0 1 0',
    '0 1 0 0 1 1',
    '1 0 0 0 0 1',
    '0 1 1 0 0 1',
    '0 0 1 1 1 0'
  ];


let map = [];
let visit = []; 
let N;

function DFS(cur) {
  // 방문 처리
  visit[cur] = true;
  
  // 현재 노드를 출력한다.
  process.stdout.write(`${String.fromCharCode(cur + 65)} -> `);
  
  // 모든 노드를 방문하는 코드.
  for (let i = 0; i < N; i++) {
    if (!visit[i] && map[cur][i]) {
      DFS(i);
    }
  }
}

function main() {
  let T = parseInt(input[0].trim());  // 테스트케이스 개수
  let lineIndex = 1;  // To keep track of the current line in the input

  for (let tc = 1; tc <= T; tc++) {
    N = parseInt(input[lineIndex].trim());  // 노드의 개수
    lineIndex++;

    // Initialize the adjacency matrix and visit array
    map = Array.from({ length: N }, () => Array(N).fill(false));
    visit = Array(N).fill(false);

    // Read the adjacency matrix
    for (let i = 0; i < N; i++) {
      let row = input[lineIndex].trim().split(' ').map(Number);
      for (let j = 0; j < N; j++) {
        if (row[j] === 1) {
          map[i][j] = true;
        }
      }
      lineIndex++;
    }

    // 노드 0부터 시작
    DFS(0);
    console.log(); 
  }
}

main();




// const fs = require('fs');

// class AdjMatrixDFS {
//   constructor(size) {
//     this.N = size;
//     this.map = Array.from({ length: size }, () => Array(size).fill(false));
//     this.visit = new Array(size).fill(false);
//   }

//   addEdge(i, j) {
//     this.map[i][j] = true;
//   }

//   dfs(cur) {
//     this.visit[cur] = true;
//     process.stdout.write(String.fromCharCode(cur + 65) + ' -> ');
    
//     for (let ad = 0; ad < this.N; ad++) {
//       if (!this.visit[ad] && this.map[cur][ad]) {
//         this.dfs(ad);
//       }
//     }
//   }
// }

// // 파일 입력 처리 (예제 파일 경로를 직접 설정해야 함)
// const input = fs.readFileSync('AdjMatrix.txt', 'utf-8').trim().split('\n');
// let index = 0;
// const T = parseInt(input[index++]);

// for (let tc = 1; tc <= T; tc++) {
//   const N = parseInt(input[index++]);
//   const graph = new AdjMatrixDFS(N);
  
//   for (let i = 0; i < N; i++) {
//     const row = input[index++].split(' ').map(Number);
//     for (let j = 0; j < N; j++) {
//       if (row[j] === 1) {
//         graph.addEdge(i, j);
//       }
//     }
//   }
  
//   graph.dfs(0);
//   console.log();
// }
