import TodoItem from "../todo-item/todoitem";
import { todoItem } from "../types";

interface IState {
  todos: todoItem[];
  userName: string;
}
type Action =
  | { type: "INIT_TODOS"; payload: todoItem[] }
  | { type: "ADD_TODO"; payload: todoItem }
  | { type: "REMOVE_TODO"; payload: number }
  | { type: "TOGGLE_TODO"; payload: number };
const reducer = (state: IState, action: Action): IState => {
  switch (action.type) {
    /* case "INIT_TODOS": {
      if (state.todos.length === 0) {
        return { ...state, todos: action.payload };
      }
      return state;
    }*/
    case "ADD_TODO": {
      const newTodo = action.payload;
      newTodo.id = Date.now();
      return { ...state, todos: [...state.todos, newTodo] };
    }
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    case "TOGGLE_TODO": {
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload ? { ...item, isDone: !item.isDone } : item
        ),
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
