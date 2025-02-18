// let input = ["Baekjoon", "Online", "Judge"];
// let input = ["One", "is", "1"];

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    console.log(solution(input));
    process.exit(0);
})

function solution(input){  
    let arr = input.map(e => e.split(""));
    arr = input.join(" ").split("");
    let result = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            let Uni = arr[i][j].charCodeAt();
            if(Uni >= 65 && Uni <= 90){
                if(Uni + 13 > 90){
                    Uni = Uni + 13;
                    let a = Uni - 90;
                    Uni = 64 + a;
                }else{
                    Uni = Uni + 13;
                }
            }else if(Uni >= 97 && Uni <= 122){
                if(Uni + 13 > 122){
                    Uni = Uni + 13;
                    let a = Uni - 122;
                    Uni = 96 + a;
                }else{
                    Uni = Uni + 13;
                }
            }
            result.push(String.fromCharCode(Uni));
        }
    }
    return result.join("");
}
