import React from "react";
import { iTodoItem } from "../../types";
import "./formComponent.css";

interface IProps {
  onsubmit: (item: iTodoItem) => void;
}
const FormComponent = React.memo((props: IProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title: string = e.currentTarget["task"].value;
    const isUrgent: boolean = e.currentTarget["urgent"].checked;

    if (title.length > 3) {
      const newTask: iTodoItem = {
        id: Date.now(),
        isUrgent,
        title,
        isDone: false,
      };
      props.onsubmit(newTask);
    }
  };
  return (
    <form className="pinterest-form" onSubmit={handleSubmit}>
      <input
        className="pinterest-input"
        type="text"
        name="task"
        placeholder="Type todo here ..."
      />
      <div className="pinterest-actions">
        <label className="urgent-label" htmlFor="urgent">
          <input type="checkbox" id="urgent" name="urgent" />
          Must Do
        </label>
        <button type="submit" className="pinterest-submit">
          Add Task
        </button>
      </div>
    </form>
  );
});

export default FormComponent;
