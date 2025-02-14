let input = [ 5, 2, 4, 2, 6, 1];

console.log(solution(input));

function solution(input) {
    let stack = [];
    let count = 0;

    stack.push(input[0]);

    for (let i = 1; i < input.length; i++) {
        while (stack[stack.length - 1] <= input[i]) {
            stack.pop();
        }
        count += stack.length;
        stack.push(input[i]);
    }
    return count;
}  