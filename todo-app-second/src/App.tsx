import React from "react";
import "./App.css";
import Form from "./form/form";
import Dashboard from "./dashboard/dashboard";
import TodoList from "./todo-list/todolist";
function App() {
  return (
    <div>
      <h1> Todo App </h1>
      <Form />
      <Dashboard />
      <TodoList />
    </div>
  );
}

export default App;
