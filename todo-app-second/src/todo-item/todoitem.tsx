import { Trash } from "phosphor-react";
import React from "react";
import { todoItem } from "../types";

import "./todoitem.css";
interface IProps {
  items: todoItem;
}
const TodoItem = (props: IProps) => {
  return (
    <div className="todoItem-wrapper">
      <input type="checkbox" />
      <span> </span>
      <span>
        {props.items.title}
        <Trash size={20} color="#ff0000" weight="fill" />
      </span>
    </div>
  );
};

export default TodoItem;
