let d = 10;
let b = 0b100;

console.log(d, b);

let a = 128;
console.log(parseInt(a, 2));
console.log(a.toString(2));
// 진수 변환 -> parseInt
// toString

console.log(parseInt(10 ,8));

// 비트마스킹!!!!!

// & 일 때
// 특정 위치에 1이 있는지 체크, 0으로 초기화

let a1 = 0b1000;
let b1 = 0b0010;
let c1 = 0b1110;

console.log((a1 & b1).toString(2));
console.log((a1 & c1).toString(2));
console.log((b1 & c1).toString(2));

let key = 0b1010010;
let word1 = 0b1110010;
let word2 = 0b1110100;
console.log((key & word1).toString(2))
console.log((key&word1) == key);
console.log((key&word2)== key);

// shift : 비트를 이동시키는 연산자
// * data << 이동시킬_비트_수      지정한 수 만큼 왼쪽으로 이동
// * data >> 이동시킬_비트_수      지정한 수 만큼 오른쪽으로 이동


// | 일 때

let a2 = 0b1000;
let b2 = 0b0010;
let c2 = 0b1110;

console.log((a2 | b2).toString(2));
console.log((a2 | c2).toString(2));
console.log((b2 | c2).toString(2));