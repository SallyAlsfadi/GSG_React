import React, { useCallback, useReducer, useState } from "react";
import "./App.css";
import Form from "./form/form";
import Dashboard from "./dashboard/dashboard";
import TodoList from "./todo-list/todolist";
import { todoItem } from "./types";
import reducer from "./state/reducer";
function App() {
  //const [todos, setTodos] = useState<todoItem[]>([]);
  const [state, dispatch] = useReducer(reducer, {
    todos: [],
    userName: "Ahmad",
  });
  const handleNewItem = useCallback(
    (item: todoItem) => {
      dispatch({ type: "ADD_TODO", payload: item });
    },
    [state.todos]
  );
  const handleTaskToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const itemId = Number(e.target.dataset["itemId"]);
    dispatch({ type: "TOGGLE_TODO", payload: itemId });
  };

  const handleDelete = (index: number) => {
    const itemId = state.todos[index].id;
    dispatch({ type: "REMOVE_TODO", payload: itemId });
  };
  return (
    <div className="app-wrapper">
      <h1> Todo App </h1> <Dashboard items={state.todos} />
      <Form onSubmit={handleNewItem} />
      <TodoList
        items={state.todos}
        onToggle={handleTaskToggle}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
