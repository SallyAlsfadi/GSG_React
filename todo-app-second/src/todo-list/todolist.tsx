import React from "react";
import TodoItem from "../todo-item/todoitem";
import "./todolist.css";
import { todoItem } from "../types";

interface IProps {
  items: todoItem[];
  onToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete: (index: number) => void;
}
const TodoList = (props: IProps) => {
  return (
    <div className="todolist-wrapper">
      {props.items.map((item, index) => (
        <TodoItem
          key={item.id}
          items={item}
          onToggle={props.onToggle}
          onDelete={() => {
            props.onDelete(index);
          }}
        />
      ))}
    </div>
  );
};

export default TodoList;
