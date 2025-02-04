//아이디를 가져옴
document.querySelector("#btn")?.addEventListener("click", game);
function game():void{
    //lotto 번호를 위한 배열 선언
    let lotto:number[]=[];
    while(lotto.length<6){
        let num:number = parseInt(Math.random() * 45 + 1 +''); //1-45 사이의 난수 발생 시키기
        //같은 수 배제하기
        if(lotto.indexOf(num) == -1) lotto.push(num);
    }
    lotto.sort((a,b) => a-b);

    let view:string =''; //undefined 제거
    let i:number = 0;

    let intervalId = setInterval(function(){
        if(lotto.length == i){
            clearInterval(intervalId);
            return
        }
        // += 말고 =, Math.floor 말고 parseInt한 다음에 +'' 추가해주기
        view += `<div class='ball ball${parseInt(lotto[i] / 10 +'')}'>${lotto[i++]}</div>`;
        let viewDiv = document.querySelector('#view');
        // viewDiv==null?'':viewDiv.innerHTML=view;
        if(viewDiv!=null){
            viewDiv.innerHTML = view;
        }
        // document.querySelector('#view')?.innerHTML;
        // document.querySelector('#view')?.append(view);
    }, 1000);
}