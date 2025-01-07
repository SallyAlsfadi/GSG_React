import React from "react";
import "./form.css";
import { todoItem } from "../types";

interface IProps {
  onSubmit: (item: todoItem) => void;
}
const Form = (props: IProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = e.currentTarget["task"].value;
    const isImportant = e.currentTarget["Important"].checked;
    const newTask: todoItem = {
      id: Date.now(),
      title,
      isImportant,
      isDone: false,
    };
    props.onSubmit(newTask);
  };
  return (
    <form className="form-wrapper" onSubmit={handleSubmit}>
      <div>
        <input type="text" name="task" placeholder="Type todo here .." />
        <input type="checkbox" id="Important" />
        <label htmlFor="Important">Important!</label>
      </div>
      <input type="submit" value="Add Todo" />
    </form>
  );
};

export default Form;
