// 백준 16562번 문제: 친구비

let input = [[5, 3, 20],
[10, 10, 20, 20, 30],
[1, 3],
[2, 4],
[5, 4]];

console.log(solution(input));

function solution(input){
    let N = input[0][0]; 
    let M = input[0][1];
    let k = input[0][2];
    let cost = input[1];
    let friends = [];

    for(let i = 2; i <= M; i++){
        let [v, w] = input[i].map(Number);
        friends .push({ v, w });
    }

    let parent = [];

    function make(N){
        for(let i = 0; i < N; i++){
            parent[i] = i;
        }
    }
    function find(v){
        if(parent[v] == v) return v;
        return parent[v] == find(parent[v]);
    }
    function union(a, b){
        let aRoot = find(a);
        let bRoot = find(b);

        if(aRoot == bRoot) return false;
        parent[aRoot] = bRoot;
        return true;
    }

    make(N);
    let result = 0;

    for(let i = 0; i < friends.length; i++){
        if(union(friends[i].v, friends[i].w)){
            if(parent[i] = i) result += cost[i];
        }
    }
    return result;
}