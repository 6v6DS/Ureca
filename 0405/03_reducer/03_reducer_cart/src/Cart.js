import React, { useReducer } from "react";
import "./Cart.css";

const command = {
  PLUS: "PLUS",
  ADD: "ADD",
  SUB: "SUB",
  REMOVE: "REMOVE",
};
//TODO 상태를 위한 reducer 함수

/*
배열.find(callback) : 조건에 맞는 데이터를 찾아서 전달.
*/
const reducer = (state, action) => {
  switch (action.type) {
    case command.PLUS: {
      const Item = state.find((item) => item.id === action.payload.id);
      if (Item) {
        //데이터가 있다면 true, undefined 이라면 false
        return state.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Item이 undefined ==> 현재 item을 추가
      return [...state, action.payload];
    }

    case command.ADD:
      return state.map((item) =>
        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
      );

    case command.SUB:
      const find = state.find((item) => item.id === action.payload.id);
      if (find.quantity > 1) {
        //수량만 감소
        return state.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        //삭제
        return state.filter((item) => item.id !== action.payload.id);
      }

    case command.REMOVE:
      return state.filter((item) => item.id !== action.payload.id);

    default:
      return state;
  }
};

const Cart = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const sampleItem = {
    id: 1,
    name: "React 티셔츠",
    price: 25000,
    quantity: 1,
  };
  const sampleItem2 = {
    id: 2,
    name: "Next 티셔츠",
    price: 25000,
    quantity: 1,
  };

  return (
    <div className="app">
      <div className="todo-container">
        <h2>🛒 장바구니</h2>
        <button onClick={() => dispatch({ type: command.PLUS, payload: sampleItem })}>
          React 티셔츠 추가
        </button>
        <button onClick={() => dispatch({ type: command.PLUS, payload: sampleItem2 })}>
          Next 티셔츠 추가
        </button>

        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <div>
                {todo.name} - 수량: {todo.quantity}개 - 가격: ₩{todo.price * todo.quantity}
              </div>
              <button onClick={() => dispatch({ type: command.ADD, payload: todo })}>+</button>
              <button onClick={() => dispatch({ type: command.SUB, payload: todo })}>-</button>
              <button onClick={() => dispatch({ type: command.REMOVE, payload: todo })}>
                삭제
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
