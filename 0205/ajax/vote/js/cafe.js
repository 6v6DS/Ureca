// json 정보 받아와서 뿌려주기
// 웹의 상대경로 기준은, 현재 작업하고 있는 파일이 기준이 아니라, 현재 표시되고 있는 화면의 url이 기준
// 따라서 현재는, index.html을 기준으로 경로를 지정해주어야 함.

/* 
Web에서 상대 경로 기준은 현재 화면이 표시되고 있는 URL(주소창의 URL)이다.
그래서 cafe.js를 기준으로 경로를 설정하면 안 된다.
cafe.js는 index.html에서 사용하므로 index.html을 기준으로 해야한다.
*/
// 에세이 정보 가져오기 (파일 형식 json)
fetch('./assets/data/essay.json')
.then(reponse => reponse.json())
.then(data => {
  console.log(data);
  essayBook(data);
})

function essayBook(data){
  let content = `<h3 class="menu_title">[에세이]</h3>
          <ul>`
  data.forEach(item => {
    content += `<li>
              <div class="menu_item">
                <div class="menu_item_img">
                  <img src = "img/book/${item.isbn}.png" alt="${item.title}">
                </div>
                <div class="menu_item_info">
                  ${item.title}<br/> (${item.price}원)
                </div>
              </div>
            </li>`
  });
            
  content += `</ul>`;
  document.getElementById('econtent').innerHTML = content;
}

// 프로그래밍 책 정보 가져오기 (파일 형식 xml)
fetch('./assets/data/programming.xml')
.then(reponse => reponse.text()) //json -> text
.then(data => {
  console.log(data);
  programmingBook(data);
})

function programmingBook(data){
  let content = `<h3 class="menu_title">[프로그래밍]</h3>
          <ul>`
  // 전송받은 xml을 DOM tree로 구성하기 위해 DOMParser객체를 생성한다.
  let parser = new DOMParser();
  // 문자열 형태로 된 xml 정보를 분석해서 DOM tree로 구성
  let xml = parser.parseFromString(data, "application/xml"); 
  // 전송 받은 xml에서 book 태그를 모두 찾기
  let books = xml.querySelectorAll('book'); 

  books.forEach(book => { // book 태그를 반복
    content += `<li>
              <div class="menu_item">
                <div class="menu_item_img">
                  <!-- book 태그에서 isbn 태그 찾기 -->
                  <img src = "img/book/${book.querySelector('isbn').textContent}.png" 
                  alt="${book.querySelector('title').textContent}">
                </div>
                <div class="menu_item_info">
                  ${book.querySelector('title').textContent}<br/> (${book.querySelector('price').textContent}원)
                </div>
              </div>
            </li>`
  });
            
  content += `</ul>`;
  document.getElementById('pcontent').innerHTML = content;
}


/*사용자 인증 처리를 위한 함수 */
function login() {
  //id 입력 받을 수 있는 prompt
  var id = prompt("아이디 입력", "uplus");

  //password 입력 받을 수 있는 prompt
  var password = prompt("비밀번호 입력", "1234");

  //id와 password확인
  if (id.length == 0) {
    alert("아이디를 입력하세요!!!");
    return;
  }
  if (password == "") {
    alert("비밀번호를 입력하세요!!!");
    return;
  }

  if (id == "uplus" && password == "1234") {
    //인증이 되면 이미지 변경, 메뉴 변경
    document.getElementById("header_nav_confirm_off").style.display = "none";
    document.getElementById("header_nav_confirm_on").style.display = "block";
    document.querySelector(".profile_img").src = "img/profile.png";
  } else {
    //인증이 안되면 확인창 띄우기
    alert("아이디 또는 비밀번호를 확인해 주세요");
  }
}

function logout() {
  document.getElementById("header_nav_confirm_off").style.display = "block";
  document.getElementById("header_nav_confirm_on").style.display = "none";
  document.querySelector(".profile_img").src = "img/noimg.png";
}

var cnt = 0;
function allSlide(flag) {
  var sub = document.getElementsByClassName("store_item_sub");
  var storeOff = document.getElementById("store_display_off");
  var storeOn = document.getElementById("store_display_on");

  if (flag == "on") {
    for (var i = 0; i < sub.length; i++) {
      sub[i].style.display = "block";
    }
    storeOff.style.display = "block";
    storeOn.style.display = "none";
    cnt = 4;
  } else {
    for (var i = 0; i < sub.length; i++) {
      sub[i].style.display = "none";
    }
    storeOff.style.display = "none";
    storeOn.style.display = "block";
    cnt = 0;
  }
}

function slideToggle(areaid) {
  if (areaid.style.display == "none") {
    areaid.style.display = "block";
    cnt++;
  } else {
    areaid.style.display = "none";
    cnt--;
  }
  var storeOff = document.getElementById("store_display_off");
  var storeOn = document.getElementById("store_display_on");
  if (cnt == 4) {
    storeOff.style.display = "block";
    storeOn.style.display = "none";
  } else {
    storeOff.style.display = "none";
    storeOn.style.display = "block";
  }
}

function poll() {
  var votes = document.getElementsByName("vote_answer");

  var choose = "";
  var chooseCnt = 0;
  for (var i = 0; i < votes.length; i++) {
    if (votes[i].checked) {
      chooseCnt++;
      choose = votes[i].value;
      break;
    }
  }
  if (chooseCnt == 0) {
    alert("설문 항목을 선택해 주세요");
    return;
  } else {
    alert(choose + "항목을 선택했습니다.");
  }
}

function makePoll() {
  window.open("makepoll.html", "poll", "width=400,height=300,top=300,left=300");
}
