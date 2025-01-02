import React, { useState } from "react";
import FormComponent from "./components/form/formComponent";
import { iTodoItem } from "./types";
const App = () => {
  const [todos, setTodos] = useState<iTodoItem[]>([]);
  const addTodo = (newTodo: iTodoItem) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };
  return (
    <div className="App">
      <h1>Todo App</h1>
      <FormComponent onsubmit={addTodo} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} {todo.isUrgent && "(Urgent)"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
