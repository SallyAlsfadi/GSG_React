import React, { useCallback, useState } from "react";
import FormComponent from "./components/form/FormComponent";
import { iTodoItem } from "./types";
import TodoList from "./components/todo-list/Todo-list";

const App = () => {
  const [todos, setTodos] = useState<iTodoItem[]>([]);
  const addTodo = (newTodo: iTodoItem) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };
  const handleNewItem = useCallback(
    (item: iTodoItem) => {
      setTodos([...todos, item]);
    },
    [todos]
  );

  const handleTaskToggle = (id: number) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  const handleDelete = (index: number) => {
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
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
      <TodoList
        items={todos}
        onToggle={handleTaskToggle}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;
