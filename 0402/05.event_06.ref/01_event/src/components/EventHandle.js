import React, { useState } from "react";

const EventHandle = () => {
  const [data, setData] = useState({
    username: "",
    message: "",
  });
  const { username, message } = data;

  const handleChange = (e) => {
    console.log(e);
    // 변경하려는 state만 남고 다른 state는 모두 제거된다.
    //setData({ [e.target.name]: e.target.value });

    //불변성을 유지하기 위해 새로운 객체를 생성하고 해당 속성만 변경해야 한다.
    const newForm = {
      ...data, // 기본 state 복제
      [e.target.name]: e.target.value, //이벤트가 발생한 state 만 변경
    };
    setData(newForm);
  };

  const handleClick = () => {
    setData({
      username: "",
      message: "",
    });
  };

  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      handleClick();
    }
  };
  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        name="username"
        placeholder="user name"
      ></input>
      <input
        type="text"
        value={message}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        name="message"
        placeholder="message"
      ></input>
      <button type="button" onClick={handleClick}>
        확인
      </button>
      <div>
        {username} {username !== "" && ":"} {message}
      </div>
      <div></div>
    </div>
  );
};

export default EventHandle;
