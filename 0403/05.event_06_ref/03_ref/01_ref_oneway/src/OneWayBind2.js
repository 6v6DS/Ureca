import React, { useRef } from "react";

const OneWayBind2 = () => {
  const inputId = useRef(null);
  const inputPw = useRef(null);

  const handleClick = () => {
    const id = inputId.current.value;
    const pw = inputPw.current.value;
    console.log("id:", id, "pw:", pw);
    inputId.current.value = "";
    inputPw.current.value = "";
  };
  return (
    <div>
      {/* JSX에서 label을 작성할 때 for가 아닌 htmlFor를 사용한다. */}
      <label htmlFor="id">
        아이디:
        <input type="text" id="id" ref={inputId}></input>
      </label>
      <label htmlFor="pw">
        비밀번호:
        <input type="password" id="pw" ref={inputPw}></input>
      </label>
      <button onClick={handleClick}>검증하기</button>
    </div>
  );
};

export default OneWayBind2;
