// 백준 1062번 문제: 가르침

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let lines = [];

// rl.on('line', (line) => {
//     lines.push(line.trim()); 
// }).on('close', () => {
//     let [N, K] = lines[0].split(" ").map(Number); 
//     let words = lines.slice(1); 

//     let formattedLines = [[N], [K], words];


//     console.log(solution(formattedLines));
//     process.exit(0);
// });

// function solution(lines){
//     let N = Number(lines[0]);  // N 값 추출
//     let K = Number(lines[1]);  // K 값 추출

//     if(K < 5){
//         return 0;
//     }

//     let words = lines[2];

//     if (!words) {
//         console.error("ERROR: words is undefined!");
//         return;
//     }

//     let word_have = ['a', 'n', 't', 'i', 'c'];

//     let new_word = words.map(word => word.split('')); 

//     for(let i = 0; i < new_word.length; i++){
//         new_word[i].splice(0, 4); // 앞에서 4개 제거
//         new_word[i].splice(-4); // 뒤에서 4개 제거
//     }

//     let count = [];
//     let count2 = new Set();
//     let num = 0;

//     for(let i = 0; i < new_word.length; i++){
//         for(let j = 0; j < new_word[i].length; j++){
//             if(!word_have.includes(new_word[i][j])){
//                 count.push(new_word[i][j]);
//                 count2.add(new_word[i][j]);
//             }
//         }
//     }

//     num = count.length - count2.size;
//     let result = K - 5;

//     if(result < num){
//         num = num - result;
//         return result + num;
//     } else {
//         return result;
//     }
// }



const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    input.push(line.trim());
}).on('close', () => {
    const [N, K] = input[0].split(" ").map(Number);
    const words = input.slice(1).map(word => word.split(''));
    console.log(solution(N, K, words));
    process.exit(0);
});

function solution(N, K, words) {
    if (K < 5) return 0; // 'a', 'n', 't', 'i', 'c'는 반드시 배워야 함
    
    const essential = new Set(['a', 'n', 't', 'i', 'c']);
    let letters = new Array(26).fill(false);
    essential.forEach(ch => letters[ch.charCodeAt(0) - 'a'.charCodeAt(0)] = true);

    let max = 0;
    
    function combi(c, cnt) {
        if (cnt === K) {
            max = Math.max(max, checkReadableWords());
            return;
        }
        if (c > 25) return;
        
        combi(c + 1, cnt); // c번째 문자를 배우지 않는 경우
        
        if (!letters[c]) { // 배우지 않은 문자면 배우기
            letters[c] = true;
            combi(c + 1, cnt + 1);
            letters[c] = false;
        }
    }
    
    function checkReadableWords() {
        let count = 0;
        for (let word of words) {
            if (word.every(ch => letters[ch.charCodeAt(0) - 'a'.charCodeAt(0)])) {
                count++;
            }
        }
        return count;
    }
    
    combi(0, 5); // 'a', 'n', 't', 'i', 'c'는 미리 배운 상태이므로 cnt = 5부터 시작
    return max;
}