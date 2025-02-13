const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let lines = [];

rl.on('line', (line) => {
    lines.push(line.trim().split(" ").map(e => Number(e)));
}).on('close', () => {
    console.log(solution(lines));
    process.exit(0);
})

function solution(lines){
    let n = lines[0];
    let arr = lines[1];
    let x = lines[2];

    let count = 0;
    let end = arr.length - 1;    
    let start = 0;

    arr = arr.sort((a, b) => a - b);

    while(start != end){
        if(arr[start] + arr[end] > x){
            end--;
        }
        else if(arr[start] + arr[end] == x){
            count++;
            start++;
        } 
        else if(arr[start] + arr[end] < x){
            start++;
        }
    }

    return count;
}



// function solution(lines){
//     // lines = lines.flat();
//     let n = lines[0];
//     let arr = lines[1];
//     let x = lines[2];
    
//     let count = 0;
//     let ans = permutation(arr, 2);

//     for(let i = 0; i < ans.length; i++){
//         if(ans[i][0] + ans[i][1] == x) count++;
//     }
//     console.log(count);
// }

// function permutation(arr, r, tmp=[], ans=[]){
//     if(tmp.length == r){
//         ans.push([...tmp]);
//         return ans;
//     }
//     const lastIndex = tmp.length == 0 ? -1 : arr.indexOf(tmp[tmp.length - 1]);
//     for(let i = lastIndex + 1; i < arr.length; i++){
//         tmp.push(arr[i]);
//         permutation(arr, r, tmp, ans);
//         tmp.pop();
//     }
//     return ans;
// }
