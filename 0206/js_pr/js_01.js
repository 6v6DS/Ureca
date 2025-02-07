let d = 10;
let b = 0b1000;

// console.log(d, b);

let a = 128;
// console.log(parseInt(a, 2));
// console.log(a.toString(2));
// 진수 변환 -> parseInt
// toString

// console.log(parseInt(10 ,8));

// 비트마스킹!!!!!

// & 일 때
// 특정 위치에 1이 있는지 체크, 0으로 초기화
// 둘 다 1일 때 1, 

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
console.log((key & word1) == key);
console.log((key & word2) == key);

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


//shift 연산
let f = 0b1000;
console.log(f << 2); //32 ( 8 * 2^2)
console.log(f >> 2); //2  ( 8 / 2^2)

//^(xor)


let pw = 0b11001101;
let salt = 0b10110011;
let encoding = pw ^ salt;

console.log(encoding.toString(2));
console.log((encoding ^ salt).toString(2));

// Bit Mask
var one = 0b1000;
var two = 0b0010;

console.log((one &= two).toString(2)); // one이 0000 으로 바뀜
console.log((one |= two).toString(2)); //0000과 0010을 비교해서 0010이 됨

//1. 공집합과 꽉 찬 집합 구하기

let n = 10;
let A = (1 << n) - 1; // 10000000000 - 1 = 111111111
console.log(A.toString(2));

//2. 특정 위치에 1이 있는지 check로 & 사용

let first = 0b1000;
let second = 0b0010;
let third = 0b1110;

console.log((first&second).toString(2)); //0000
console.log((first&third).toString(2)); //1000
console.log((second&third).toString(2)); //0010

//3. 원소 추가: k 번째 위치에 원소를 추가 하기
let AA = 0;
let KK = 5;
AA |= (1 << KK); // 100000 | 000000 = 100000
console.log(AA.toString(2));