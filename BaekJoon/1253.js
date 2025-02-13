const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let lines = [];

rl.on('line', (line) =>{
    lines.push(line.trim().split(" ").map((e) => Number(e)));
}).on('close', () => {
    console.log(solution(lines));
    process.exit(0);
})

function solution(lines){
    let N = lines[0];
    let arr = lines[1];
    let ans = permutation(arr, 2);
    let count = 0;

    for(let i = 0; i < ans.length; i++){
        let new_list = arr;
        let sum = ans[i][0] + ans[i][1];
        while(new_list.length > 0){
            if(new_list.includes(sum)){
                let num = new_list.indexOf(sum);
                new_list.splice(num,1);
                count++;
            }
            else{
                break;
            }
        }
    }
    return count;
}

function permutation(arr, r, tmp=[], ans=[]){
    if(tmp.length == r){
        ans.push([...tmp]);
        return ans;
    }
    const lastIndex = tmp.length == 0 ? -1 : arr.indexOf(tmp[tmp.length - 1]);
    for(let i = lastIndex + 1; i < arr.length; i++){
        tmp.push(arr[i]);
        permutation(arr, r, tmp, ans);
        tmp.pop();
    }
    return ans;
}