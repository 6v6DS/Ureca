import React from "react";
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline } from "react-icons/md";
import cn from "classnames";
import "./TodoListItem.scss";

const TodoListItem = ({ todo, style, onRemove, onToggle }) => {
  const { id, text, checked } = todo;

  return (
    <div className="TodoListItem" style={style}>
      <div className={cn("checkbox", { checked })} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};
/*
React.memo(컴포넌트)
-  부모가 re-rendering 되도 자식이 변하지 않는 경우 re-rendering에서 제외됨.
*/
export default React.memo(
  TodoListItem,
  (prevProps, nextProps) => prevProps.todo === nextProps.todo
);
