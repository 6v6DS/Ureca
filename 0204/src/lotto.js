var _a;
//아이디를 가져옴
(_a = document.querySelector("#btn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", game);
function game() {
    //lotto 번호를 위한 배열 선언
    var lotto = [];
    while (lotto.length < 6) {
        var num = parseInt(Math.random() * 45 + 1 + ''); //1-45 사이의 난수 발생 시키기
        //같은 수 배제하기
        if (lotto.indexOf(num) == -1)
            lotto.push(num);
    }
    lotto.sort(function (a, b) { return a - b; });
    var view = ''; //undefined 제거
    var i = 0;
    var intervalId = setInterval(function () {
        if (lotto.length == i) {
            clearInterval(intervalId);
            return;
        }
        // += 말고 =, Math.floor 말고 parseInt한 다음에 +'' 추가해주기
        view += "<div class='ball ball".concat(parseInt(lotto[i] / 10 + ''), "'>").concat(lotto[i++], "</div>");
        var viewDiv = document.querySelector('#view');
        // viewDiv==null?'':viewDiv.innerHTML=view;
        if (viewDiv != null) {
            viewDiv.innerHTML = view;
        }
        // document.querySelector('#view')?.innerHTML;
        // document.querySelector('#view')?.append(view);
    }, 1000);
}
