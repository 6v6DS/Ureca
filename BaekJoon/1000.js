// Run by Node.js
const readline = require('readline');

let input = [];
(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		input = line.split(' ');
		rl.close();
	}
	console.log(solution(input));
	process.exit();
})();
function solution(input){
	let A = Number(input[0]);
	let B = Number(input[1]);

	return A + B;

}