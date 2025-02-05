// 크로스 브라우징 소스
function getXMLHttpRequest() {
  if (window.ActiveXObject) { // null이면 false, 데이터가 있으면 true
    try {
      return new ActiveXObject("Msxml2.XMLHTTP"); // 객체 생성이 되면 최신버전
    } catch (e1) {
      try {
        return new ActiveXObject("Microsoft.XMLHTTP"); // 객체 생성이 되지 않으면 마이크로소프트
      } catch (e2) {
        return null;
      }
    }
  } else if (window.XMLHttpRequest) {
    return new XMLHttpRequest(); // 엣지가 아니라면 XMLHTTP 리퀘스트
  } else {
    return null;
  }
}

var httpRequest = null;

function sendRequest(url, params, callback, method) { // 실제 데이터를 보내주는 것이 목표
  httpRequest = getXMLHttpRequest();

  var httpMethod = method ? method : "GET";
  if (httpMethod != "GET" && httpMethod != "POST") {  // 안전함은 브라우저가 보장. GET과 POST는 해킹을 시도하지 못함.
    httpMethod = "GET";                               // 서버의 자원을 변경하지 않지만, PUT과 DELETE는 해킹 시도가 가능.
  }                                                   // 문제가 발생할 수 있기 때문에 현재는 GET과 POST만 사용.
  var httpParams = params == null || params == "" ? null : params;
  var httpUrl = url;
  if (httpMethod == "GET" && httpParams != null) {
    httpUrl = httpUrl + "?" + httpParams;
  }

  //alert("method == " + httpMethod + "\turl == " + httpUrl + "\tparam == " + httpParams);
  httpRequest.open(httpMethod, httpUrl, true);
  httpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  httpRequest.onreadystatechange = callback; // 상태가 변할 때마다 인자로 준 콜백 함수를 호출.
  //alert(httpMethod == 'POST' ? httpParams : null);
  httpRequest.send(httpMethod == "POST" ? httpParams : null);
}
