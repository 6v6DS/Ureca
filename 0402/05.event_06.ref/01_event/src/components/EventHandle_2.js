import React, { useState } from "react";

const EventHandle = () => {
  const [username, setUsername] = useState("");

  const [message, setMessage] = useState("");
  const handleUsername = (e) => {
    console.log(e);
    setUsername(e.target.value);
  };
  const handleMessage = (e) => {
    console.log(e);
    setMessage(e.target.value);
  };

  const handleClick = () => {
    setUsername("");
    setMessage("");
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
        onChange={handleUsername}
        onKeyDown={handleKeyDown}
        name="username"
        placeholder="user name"
      ></input>
      <input
        type="text"
        value={message}
        onChange={handleMessage}
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
