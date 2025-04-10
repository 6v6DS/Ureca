import React from "react";
import { useReducer, useState } from "react";
import TodoTemplate from "./components/TodoTemplate.js";
import TodoInsert from "./components/TodoInsert.js";
import TodoList from "./components/TodoList.js";
// import "./Todo.css";

const command = {
  ADD: "ADD",
  TOGGLE: "TOGGLE",
  REMOVE: "REMOVE",
};
//todo 상태을 위한 reducer 함수
const reducer = (state, action) => {
  switch (action.type) {
    case command.ADD:
      return [...state, { id: Date.now(), text: action.text, completed: false }];
    case command.TOGGLE:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case command.REMOVE:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

const App = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useReducer(reducer, [
    {
      id: 1,
      text: "리액트의 기초 알아보기",
      checked: true,
    },
    {
      id: 2,
      text: "컴포넌트 스타일링해 보기",
      checked: true,
    },
    {
      id: 3,
      text: "일정 관리 앱 만들어 보기",
      checked: false,
    },
  ]);

  // return (
  //   <div className="app">
  //     <div className="todo-container">
  //       <div className="header">
  //         <h2>일정 관리</h2>
  //       </div>
  //       <div className="input-container">
  //         <input
  //           placeholder="할 일을 입력하세요"
  //           value={text}
  //           onChange={(e) => {
  //             setText(e.target.value);
  //           }}
  //         />
  //         <button
  //           onClick={() => {
  //             setTodos({ type: command.ADD, text });
  //             setText("");
  //           }}
  //         >
  //           ➕
  //         </button>
  //       </div>
  //       <ul className="todo-list">
  //         {todos.map((todo) => (
  //           <li key={todo.id} className="todo-item">
  //             <input
  //               type="checkbox"
  //               checked={todo.completed}
  //               onChange={() => setTodos({ type: command.TOGGLE, id: todo.id })}
  //             />
  //             <span className={`todo-text ${todo.completed ? "completed" : ""}`}>{todo.text}</span>
  //             <button
  //               className="delete-btn"
  //               onClick={() => setTodos({ type: command.REMOVE, id: todo.id })}
  //             >
  //               🚫
  //             </button>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   </div>
  // );
  return (
    <TodoTemplate>
      <TodoInsert text={text} setText={setText} setTodos={setTodos} />
      <TodoList text={text} todos={todos} setTodos={setTodos} />
    </TodoTemplate>
  );
};

export default App;

// import React, { useState, useRef, useCallback } from "react";
// import TodoTemplate from "./components/TodoTemplate";
// import TodoInsert from "./components/TodoInsert";
// import TodoList from "./components/TodoList";

// const App = () => {
//   const [todos, setTodos] = useState([
//     {
//       id: 1,
//       text: "리액트의 기초 알아보기",
//       checked: true,
//     },
//     {
//       id: 2,
//       text: "컴포넌트 스타일링해 보기",
//       checked: true,
//     },
//     {
//       id: 3,
//       text: "일정 관리 앱 만들어 보기",
//       checked: false,
//     },
//   ]);

//   // 고유 값으로 사용 될 id
//   // ref 를 사용하여 변수 담기
//   const nextId = useRef(4);

//   const onInsert = useCallback(
//     (text) => {
//       const todo = {
//         id: nextId.current,
//         text,
//         checked: false,
//       };
//       setTodos(todos.concat(todo));
//       nextId.current += 1; // nextId 1 씩 더하기
//     },
//     [todos]
//   );

//   const onRemove = useCallback(
//     (id) => {
//       setTodos(todos.filter((todo) => todo.id !== id));
//     },
//     [todos]
//   );

//   const onToggle = useCallback(
//     (id) => {
//       setTodos(todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)));
//     },
//     [todos]
//   );

//   return (
//     <TodoTemplate>
//       <TodoInsert onInsert={onInsert} />
//       <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
//     </TodoTemplate>
//   );
// };

// export default App;
