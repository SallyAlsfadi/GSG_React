import React, { useState } from "react";
import "./App.css";
import Form from "./form/form";
import Dashboard from "./dashboard/dashboard";
import TodoList from "./todo-list/todolist";
import { todoItem } from "./types";
function App() {
  const [todos, setTodos] = useState<todoItem[]>([]);
  const handleNewItem = (item: todoItem) => {
    setTodos([...todos, item]);
  };
  const handleTaskToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const itemId = e.target.dataset["itemId"];
    const newTodos = todos.map((todo) =>
      todo.id === Number(itemId) ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(newTodos);
  };
  const handleDelete = (index: number) => {
    const newTodos = [
      ...todos.slice(0, index),
      ...todos.slice(index + 1, todos.length),
    ];

    setTodos(newTodos);
  };
  return (
    <div>
      <h1> Todo App </h1>
      <Form onSubmit={handleNewItem} />
      <Dashboard items={todos} />
      <TodoList
        items={todos}
        onToggle={handleTaskToggle}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
