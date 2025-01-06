import React from "react";
import TodoItem from "../todo-item/todoitem";
import "./todolist.css";
import { todoItem } from "../types";

interface IProps {
  items: todoItem[];
}
const TodoList = (props: IProps) => {
  return (
    <div className="todolist-wrapper">
      {props.items.map((item) => (
        <TodoItem key={item.id} items={item} />
      ))}
    </div>
  );
};

export default TodoList;
