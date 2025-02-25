let N = 6;
let parent = new Array(N);
make();
union(1, 2);
console.log(parent);

function make(){
    for(let i = 0; i < N; i++){
        parent[i] = i;
    }
}

function find(v){
    if(parent[v] == v) return v;
    return parent[v] = find(parent[v]);
}

function union(a, b){
    let aRoot = find(a);
    let bRoot = find(b);

    if(aRoot == bRoot) return false;

    parent[aRoot] = bRoot;
    return true;
}