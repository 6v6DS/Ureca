import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline } from "react-icons/md";
import cn from "classnames";

<div className="TodoListItem">
  <div className={cn("checkbox", { checked })}>
    <div className="text"></div>
  </div>
  <div className="remove">
    <MdRemoveCircleOutline />
  </div>
</div>;

// import React from "react";
// import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline } from "react-icons/md";
// import cn from "classnames";
// import "./TodoListItem.scss";

// const TodoListItem = ({ todo, onRemove, onToggle }) => {
//   const { id, text, checked } = todo;

//   return (
//     <div className="TodoListItem">
//       <div className={cn("checkbox", { checked })} onClick={() => onToggle(id)}>
//         {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
//         <div className="text">{text}</div>
//       </div>
//       <div className="remove" onClick={() => onRemove(id)}>
//         <MdRemoveCircleOutline />
//       </div>
//     </div>
//   );
// };

// export default TodoListItem;
