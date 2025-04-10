import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline } from "react-icons/md";
import cn from "classnames";
import React from "react";
import "../App";
import "./TodoList.scss";

const command = {
  ADD: "ADD",
  TOGGLE: "TOGGLE",
  REMOVE: "REMOVE",
};

function TodoList({ text, todos, setTodos }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className="todo-item">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => setTodos({ type: command.TOGGLE, id: todo.id })}
          />
          <span className={`todo-text ${todo.completed ? "completed" : ""}`}>{todo.text}</span>
          <button
            className="delete-btn"
            onClick={() => setTodos({ type: command.REMOVE, id: todo.id })}
          >
            🚫
          </button>
        </li>
      ))}
    </ul>
  );
}
export default TodoList;

// import React from "react";
// import TodoListItem from "./TodoListItem";
// import "./TodoList.scss";

// const TodoList = ({ todos, onRemove, onToggle }) => {
//   return (
//     <div className="TodoList">
//       {todos.map((todo) => (
//         <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
//       ))}
//     </div>
//   );
// };

// export default TodoList;
