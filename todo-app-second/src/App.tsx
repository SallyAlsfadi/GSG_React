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
  return (
    <div>
      <h1> Todo App </h1>
      <Form onSubmit={handleNewItem} />
      <Dashboard items={todos} />
      <TodoList items={todos} />
    </div>
  );
}

export default App;
