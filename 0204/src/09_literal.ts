/*
literal
변수의 값이 지정한 것 중에 하나만 사용
*/
type cupSize ='small'|'medium'|'large';

let myCup:cupSize='small'; //위의 지정한 값만 넣을 수 있음. 빈 값이더라도 에러.
//let otherCup:cupSize='tall'; //지정한 값이 아닌 다른 값을 대입하면 에러 발생.