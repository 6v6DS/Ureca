/*
tuple
다양한 타입의 데이터를 배열형태로 유지

변수명: [타입, 타입, ...]=[값, 값 ...] // 갑의 개수는 선언한 타입의 개수와 동일해야 한다.

*/
const MyTuple:[string, number] = ['kdg', 37];
console.log('myTuple:', MyTuple);
//readonly가 없다면 데이터를 추가할 수 있다. //그러나 튜플의 목적에 맞지 않음.
// MyTuple.push('kkk');         

// 함수에서 튜플을 인자로 받을 수 있다.
function printMyTuple(name:string, info:[string, number]):void{
    console.log(`[${name}]`, ...info);
}

printMyTuple('튜플테스트', MyTuple);

//튜플을 반환하는 함수
function fetchUser():[string,number]{
    return ['uplus',2]
}

console.log(fetchUser());
let returnTuple = fetchUser();
console.log(returnTuple);

//튜플의 결과값을 분해해서 받을 수 있다.
const [nameT, ageT] = fetchUser();
console.log(`name:${nameT}, age:${ageT}`);