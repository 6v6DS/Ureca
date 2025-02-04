/*
Intersection
타입 A가 있고 타입 B가 있다면  Intersection을 통해 A이면서 B인 타입을 정의한다.

형식]
type 타입명A{
    속성명: 타입,...
}

type 타입명B{
    속성명: 타입,...
}

type 타입명C = 타입명A & 타입명B; // 지양해야만. 버그가 났을 때 찾기 힘든 주요 이유.. 지원은 하지만 되도록이면 사용하지 X.
*/

type cup={size:string};
type brand={brandName:string};
type brandCup = cup & brand;

let starbucks :brandCup={size: 'grande', brandName:'스타벅스'};

console.log(starbucks);