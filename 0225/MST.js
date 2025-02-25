// 크루스칼 알고리즘

// 입력받기
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];
rl.on('line', (line) => {
    lines.push(line.trim());
}).on('close', () => {
    console.log(solution(lines));
    process.exit(0);
});

function solution(input){
    let V = Number(input[0]);
    let E = Number(input[1]);
    //let [V, E] = input[0].split(' ').map(Number);
    let edges = [];
    let parents = [];

    // 간선 정보 입력
    for(let i = 2; i < E + 2; i++){
        let [from, to, weight] = input[i].split(' ').map(Number);
        edges.push({ from, to, weight });
    }

    // 간선 비용이 작은 순서대로 정렬
    edges.sort((a, b) => a.weight - b.weight);

    function make(N){
        for(let i = 0; i < N; i++){
            parents[i] = i;
        }
    }

    function find(v){
        if(parents[v] == v) return v;
        return parents[v] = find(parents[v]);
    }
    
    function union(a, b){
        let aRoot = find(a);
        let bRoot = find(b);
    
        if(aRoot == bRoot) return false;
        parents[aRoot] = bRoot;
        return true;
    }
    
    let result = 0;  // MST 비용
    let count = 0;   // 연결된 간선 수

    make(V);

    for(let edge of edges){
        if(union(edge.from, edge.to)){
            result += edge.weight;
            if(++count === V - 1) break;
        }
    }
    //console.log(edges);
    return result;
}