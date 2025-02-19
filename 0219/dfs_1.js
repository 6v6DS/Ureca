//DFS
// function DFS(graph, startNode){
//     let visited = [];
//     let needVisited = [];

//     needVisited.push(startNode);

//     while(needVisited.length !== 0){
//         const node = needVisited.pop();

//         if(!visited.includes(node)){
//             visited.push(node);
//             needVisited = [...needVisited, ...graph[node].reverse()]
//         }
//     }
//     return visited;
// }


// Recursive DFS
function DFS(graph, currentNode, visited = []) {
    // Mark the current node as visited
    visited.push(currentNode);

    // Visit all adjacent nodes
    for (const neighbor of graph[currentNode]) {
        if (!visited.includes(neighbor)) {
            DFS(graph, neighbor, visited); // Recursive call
        }
    }
    return visited;
}


const graph = {
    A: ['B', 'C'],
    B: ['A', 'D'],
    C: ['A', 'G', 'H', 'I'],
    D: ['B', 'E', 'F'],
    E: ['D'],
    F: ['D'],
    G: ['C'],
    H: ['C'],
    I: ['C', 'J'],
    J: ['I']
};

console.log(DFS(graph, "A"));
// ["A", "B", "D", "E", "F", "C", "G", "H", "I", "J"]