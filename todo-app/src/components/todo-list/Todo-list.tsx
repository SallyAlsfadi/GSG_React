import React from "react";
import { iTodoItem } from "../../types";

import TodoItemComponent from "../todo-item/TodoItemComponent";

interface TodoListProps {
  items: iTodoItem[];
  onToggle: (id: number) => void;
  onDelete: (index: number) => void;
}

const TodoList = (props: TodoListProps) => {
  const { items, onToggle, onDelete } = props;

  return (
    <div className="todo-list">
      {items.map((todo, index) => (
        <TodoItemComponent
          key={todo.id}
          todo={todo}
          onToggle={() => onToggle(todo.id)}
          onDelete={() => onDelete(index)}
        />
      ))}
    </div>
  );
};

export default TodoList;
