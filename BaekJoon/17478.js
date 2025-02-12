const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input;
let count = 1;

rl.on('line', (line) => {
    input = Number(line);
    if(input > 50 || input < 1){
        return;
    }
}).on('close', () => {
    console.log("어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.");
    console.log('"재귀함수가 뭔가요?"');
    console.log('"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.');
    console.log('마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.');
    console.log('그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."');

    solution(input - 1);

    console.log("라고 답변하였지.");
    process.exit(0);
});

function solution(input) {
    if (input > 0) {
        console.log('____'.repeat(count) + '"재귀함수가 뭔가요?"');
        console.log('____'.repeat(count) + '"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.');
        console.log('____'.repeat(count) + '마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.');
        console.log('____'.repeat(count) + '그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."');
        count++;
        solution(input - 1);
        console.log('____'.repeat(count) + "라고 답변하였지.");
        count--;
    }

    if (input == 0) {
        console.log('____'.repeat(count) + '"재귀함수가 뭔가요?"');
        console.log('____'.repeat(count) + '"재귀함수는 자기 자신을 호출하는 함수라네"');
        console.log('____'.repeat(count) + "라고 답변하였지.");
        count--;
        return "";
    }
}

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// rl.on('line', (line) => {
//     const input = Number(line);
//     if (input < 1 || input > 50) return;
    
//     console.log("어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.");
//     solution(input, 0); 
//     rl.close();
// });

// function solution(n, depth) {
//     const count = "____".repeat(depth); 

//     console.log(`${count}"재귀함수가 뭔가요?"`);
    
//     if (n === 0) {
//         console.log(`${count}"재귀함수는 자기 자신을 호출하는 함수라네"`);
//     } else {
//         console.log(`${count}"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.`);
//         console.log(`${count}마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.`);
//         console.log(`${count}그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."`);
//         solution(n - 1, depth + 1);
//     }

//     console.log(`${count}라고 답변하였지.`);
// }

