// //아이디를 가져옴
// // document.querySelector("#btn")?.addEventListener("click", rockgame);
// let btn1 = document.querySelector("#btn1")?.addEventListener("click", rockgame1);
// let btn2 = document.querySelector("#btn2")?.addEventListener("click", rockgame2);
// let btn3 = document.querySelector("#btn3")?.addEventListener("click", rockgame3);

document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", () => playGame(btn.id));
});

function playGame(choice: string){
    let num: number = Math.floor(Math.random() * 3) + 1; //난수 하나 발생

    console.log(choice);
    if(choice == 'btn1'){
        if(num == 1){
            const viewDiv = document.querySelector("#result");
            if (viewDiv) {
                viewDiv.innerHTML = `<div> 이겼다 </div>`;
        }
        }
        else if(num==2){
            const viewDiv = document.querySelector("#result");
            if (viewDiv) {
                viewDiv.innerHTML = `<div> 비겼다 </div>`;
        }
        }
        else if(num==3){
            const viewDiv = document.querySelector("#result");
            if (viewDiv) {
                viewDiv.innerHTML = `<div> 졌다 </div>`;
        }
        }
        
    }
    if(choice == 'btn2'){
        if(num == 1){
            const viewDiv = document.querySelector("#result");
            if (viewDiv) {
                viewDiv.innerHTML = `<div> 이겼다 </div>`;
        }
        }
        else if(num==2){
            const viewDiv = document.querySelector("#result");
            if (viewDiv) {
                viewDiv.innerHTML = `<div> 비겼다 </div>`;
        }
        }
        else if(num==3){
            const viewDiv = document.querySelector("#result");
            if (viewDiv) {
                viewDiv.innerHTML = `<div> 졌다 </div>`;
        }
        }
        
    }
    
    if(choice == 'btn3'){
        if(num == 1){
            const viewDiv = document.querySelector("#result");
            if (viewDiv) {
                viewDiv.innerHTML = `<div> 이겼다 </div>`;
        }
        }
        else if(num==2){
            const viewDiv = document.querySelector("#result");
            if (viewDiv) {
                viewDiv.innerHTML = `<div> 비겼다 </div>`;
        }
        }
        else if(num==3){
            const viewDiv = document.querySelector("#result");
            if (viewDiv) {
                viewDiv.innerHTML = `<div> 졌다 </div>`;
        }
        }
        
    }
    
}

// function rockgame1(): void {

//     let num: number = parseInt(Math.random() * 3 + 1 + ''); //난수 하나 발생
//     console.log(num);
//     let result: string = '';

//     console.log('버튼1');

//     if (num == 1) {
//         result += `<div>이겼다!<div>`;
//         let viewDiv = document.querySelector('#result');
//         if (viewDiv != null) {
//             viewDiv.innerHTML = result;
//         }
//     }
//     else if (num == 2) {
//         result += `<div>졌다!<div>`;
//         let viewDiv = document.querySelector('#result');
//         if (viewDiv != null) {
//             viewDiv.innerHTML = result;
//         }
//     }
//     else if (num == 3) {
//         result += `<div>비겼다!<div>`;
//         let viewDiv = document.querySelector('#result');
//         if (viewDiv != null) {
//             viewDiv.innerHTML = result;
//         }
//     }

// }
// function rockgame2(): void {
//     console.log('버튼2');

//     let num: number = parseInt(Math.random() * 3 + 1 + ''); //난수 하나 발생

//     let result: string = '';


//     if (num == 1) {
//         result += `<div>이겼다!<div>`;
//         let viewDiv = document.querySelector('#result');
//         if (viewDiv != null) {
//             viewDiv.innerHTML = result;
//         }
//     }
//     else if (num == 2) {
//         result += `<div>졌다!<div>`;
//         let viewDiv = document.querySelector('#result');
//         if (viewDiv != null) {
//             viewDiv.innerHTML = result;
//         }
//     }
//     else if (num == 3) {
//         result += `<div>비겼다!<div>`;
//         let viewDiv = document.querySelector('#result');
//         if (viewDiv != null) {
//             viewDiv.innerHTML = result;
//         }
//     }
// }
// function rockgame3(): void {
//     console.log('버튼3');

//     let num: number = parseInt(Math.random() * 3 + 1 + ''); //난수 하나 발생

//     let result: string = '';

//     if (num == 1) {
//         result += `<div>이겼다!<div>`;
//         let viewDiv = document.querySelector('#result');
//         if (viewDiv != null) {
//             viewDiv.innerHTML = result;
//         }
//     }
//     else if (num == 2) {
//         result += `<div>졌다!<div>`;
//         let viewDiv = document.querySelector('#result');
//         if (viewDiv != null) {
//             viewDiv.innerHTML = result;
//         }
//     }
//     else if (num == 3) {
//         result += `<div>비겼다!<div>`;
//         let viewDiv = document.querySelector('#result');
//         if (viewDiv != null) {
//             viewDiv.innerHTML = result;
//         }
//     }
// }


// 버튼 요소들을 가져와 한 번에 이벤트 리스너 등록


// 가위바위보 게임 로직
// function playGame(choice: string): void {
//     console.log(`버튼 ${choice} 클릭됨`);

//     const num: number = Math.floor(Math.random() * 3) + 1; // 1~3 난수 발생
//     console.log(`난수: ${num}`);

//     const results: Record<number, string> = {
//         1: "이겼다!",
//         2: "졌다!",
//         3: "비겼다!"
//     };

//     const viewDiv = document.querySelector("#result");
//     if (viewDiv) {
//         viewDiv.innerHTML = `<div>${results[num]}</div>`;
//     }
// }
