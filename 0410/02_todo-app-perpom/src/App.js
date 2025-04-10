import React, { useState, useRef, useCallback, useReducer } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const createTodos = () => {
  const array = [];
  for (let i = 0; i < 2500; i++) {
    array.push({
      id: i,
      text: `할일 ${i}`,
      checked: false,
    });
  }
  return array;
};

const command = {
  INSERT: 1,
  REMOVE: 2,
  TOGGLE: 3,
};

const reducer = (todos, action) => {
  switch (action.type) {
    case command.INSERT:
      return todos.concat({ id: action.id, text: action.text, checked: false });
    case command.REMOVE:
      return todos.filter((todo) => todo.id != action.id);
    case command.TOGGLE:
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    default:
      return todos;
  }
};

const App = () => {
  /*
  1.
  useCallback(()=>{
    setter(변할상태)
  }, [상태])    //useCallback이 state를 모니터링, 상태가 변할 때마다 수행
  
  2. update 함수를 통해 상태 변경
  useCallback(()=>{
    setter((상태)=> return 새로운상태 )
  }, [])        // useCallback이 state를 모니터링 x, 컴포넌트가 렌더링되는 
                // 처음에만 함수가 수행되고 상태가 변할때마다
                // setter((상태)=> return 새로운상태 ) 함수가 수행된다.
  
  */

  /*
  useReducer(reducer, 초기상태, 콜백함수)
  초기상태: Reducer가 관리할 상태의 초기값
  콜백함수: 초기 상태가 undifined일 때 초기상태를 생성할 콜백함수
  */
  const [todos, dispatch] = useReducer(reducer, undefined, createTodos);

  // 고유 값으로 사용 될 id
  // ref 를 사용하여 변수 담기
  const nextId = useRef(todos.length + 1);

  const onInsert = useCallback((text) => {
    dispatch({ type: command.INSERT, id: nextId.current, text });
    nextId.current += 1; // nextId 1 씩 더하기
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({ type: command.REMOVE, id });
  }, []);

  const onToggle = useCallback((id) => {
    dispatch({ type: command.TOGGLE, id });
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
