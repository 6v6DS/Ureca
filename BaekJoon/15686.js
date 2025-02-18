//백준 15686 치킨배달
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let lines = [];

rl.on('line', (line) => {
    lines.push(line.toString().trim().split("\n").map((el) => el.split(" ").map(Number)));
}).on('close', () => {
    console.log(solution(lines));
    process.exit(0);
});

// let lines = [5, 2,
//     [[0, 2, 0, 1, 0],
//     [1, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0],
//     [2, 0, 0, 1, 1],
//     [2, 2, 0, 1, 2]]];

// console.log(solution(lines));

function solution(lines){
    lines = lines.flat();
    let N = Number(lines[0][0]);
    let M = Number(lines[0][1]);
    let map = [];
    for(let i = 1; i < N + 1; i++){
        map.push(lines[i]);
    }

    let chickens = [];
    let homes = [];


    for(let i = 0; i < N; i++){
        for(let j = 0; j < N; j++){
            if(Number(map[i][j]) == 2){
                chickens.push([i, j]);
            }else if(Number(map[i][j]) == 1){
                homes.push([i,j]);
            }
        }
    }

    function combination(arr, r, tmp=[], ans=[]){
        if(tmp.length == r){
            ans.push([...tmp]);
            return ans;
        }
    
        const lastIndex = tmp.length === 0 ? -1 : arr.indexOf(tmp[tmp.length - 1]);
    
        for(let i = lastIndex + 1; i < arr.length; i++){
            tmp.push(arr[i]);
            combination(arr, r, tmp, ans);
            tmp.pop();
        }
        return ans;
    }


    let combi = combination(chickens, M);
    // console.log(combi);
    let answer = 0;
    let result = Infinity;
    for(const com of combi){
        answer = 0;
        for(const home of homes){
            let min = Infinity;
            for(const chicken of com){
                min = Math.min(Math.abs(chicken[1]-home[1])+Math.abs(chicken[0]-home[0]));
            }
            answer += min;
        }
        result = Math.min(result, answer);
    }
    
    return result;
}





