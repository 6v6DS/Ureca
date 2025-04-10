import React from "react";
import "./TodoTemplate.scss";

const TodoTemplate = ({ children }) => {
  return (
    <div className="app">
      <div className="todo-container">
        <div className="header">
          <h2>일정 관리</h2>
          <div className="content">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default TodoTemplate;

// import React from "react";
// import "./TodoTemplate.scss";

// const TodoTemplate = ({ children }) => {
//   return (
//     <div className="TodoTemplate">
//       <div className="app-title">일정 관리</div>
//       <div className="content">{children}</div>
//     </div>
//   );
// };

// export default TodoTemplate;
