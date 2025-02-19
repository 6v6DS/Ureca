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
  let visited = [];
  let N;
  
  function BFS(cur) {
    // Declare a queue for breadth-first traversal
    const q = [];
    
    // Mark the current node as visited
    visited[cur] = true;
    
    // Add the starting node to the queue
    q.push(cur);
    
    // Continue traversal while there are nodes in the queue
    while (q.length > 0) {
      // Dequeue a node from the queue
      cur = q.shift();
      
      // Process the current node (print it)
      process.stdout.write(`${String.fromCharCode(cur + 65)} -> `);
      
      // Visit all adjacent nodes
      for (let ad = 0; ad < N; ad++) {
        if (map[cur][ad] && !visited[ad]) {
          visited[ad] = true;
          q.push(ad);
        }
      }
    }
  }
  
  function main() {
    let T = parseInt(input[0].trim());  // Number of test cases
    let lineIndex = 1;  // To keep track of the current line in the input
  
    for (let tc = 1; tc <= T; tc++) {
      N = parseInt(input[lineIndex].trim());  // Number of nodes
      lineIndex++;
  
      // Initialize the adjacency matrix and visited array
      map = Array.from({ length: N }, () => Array(N).fill(false));
      visited = Array(N).fill(false);
  
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
  
      // Perform BFS starting from node 0
      BFS(0);
      console.log();  // Move to the next line after each test case
    }
  }
  
  main();
  