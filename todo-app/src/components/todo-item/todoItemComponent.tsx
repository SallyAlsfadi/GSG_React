import { ItodoItemProps } from "../../types";

const ItodoItemComponent: React.FC<ItodoItemProps> = ({
  todo,
  onToggle,
  onDelete,
}) => {
  return (
    <div className={`todo-item${todo.isDone ? "done" : ""}`}>
      <div className="todo-details">
        <input
          type="checkbox"
          checked={todo.isDone}
          onChange={() => onToggle(todo.id)}
        />
        <span className={`todo-title ${todo.isUrgent ? "high-priority" : ""}`}>
          {todo.title}
        </span>
      </div>
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </div>
  );
};

export default ItodoItemComponent;
