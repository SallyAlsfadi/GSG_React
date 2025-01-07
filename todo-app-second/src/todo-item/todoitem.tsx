import { Trash } from "phosphor-react";
import React from "react";
import { todoItem } from "../types";

import "./todoitem.css";
interface IProps {
  items: todoItem;
  onToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete: () => void;
}
const TodoItem = (props: IProps) => {
  return (
    <div className="todoItem-wrapper">
      <input
        type="checkbox"
        checked={props.items.isDone}
        onChange={props.onToggle}
        data-item-id={props.items.id}
      />

      <span>
        {props.items.title}
        <Trash
          size={20}
          color="#ff0000"
          weight="fill"
          onClick={props.onDelete}
        />
      </span>
    </div>
  );
};

export default TodoItem;
