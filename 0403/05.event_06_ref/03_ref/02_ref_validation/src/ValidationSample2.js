import React, { useRef, useState } from "react";
import "./ValidationSample.css";

const ValidationSample2 = () => {
  // data 검증 실패 시 focus를 주기 위한 ref
  const inputId = useRef(null);
  const inputPw = useRef(null);

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [clicked, setClicked] = useState(false);
  const [validated, setValidated] = useState(false);

  const validation = () => {
    if (pw === "" || pw.length < 8) {
      alert("비밀번호를 8자리 이상 입력하세요");
      inputPw.current.focus();
      return false;
    }
    if (id === "") {
      alert("아이디를 입력하세요");
      inputId.current.focus();
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "id") {
      setId(value);
    } else if (id === "password") {
      setPw(value);
    }
  };

  const handleClick = () => {
    setClicked(true);
    setValidated(validation());
  };

  return (
    <div>
      {/* JSX에서 label을 작성할 때 for가 아닌 htmlFor를 사용한다. */}
      <label htmlFor="id">
        아이디:
        <input
          type="text"
          className={clicked ? (validated ? "success" : "failure") : ""}
          id="id"
          ref={inputId}
          value={id}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="password">
        비밀번호:
        <input
          type="password"
          id="password"
          className={clicked ? (validated ? "success" : "failure") : ""}
          ref={inputPw}
          value={pw}
          onChange={handleChange}
        />
      </label>
      <button onClick={handleClick}>검증하기</button>
    </div>
  );
};

export default ValidationSample2;
