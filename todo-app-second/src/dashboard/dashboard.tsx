import React from "react";
import "./dashboard.css";
import { todoItem } from "../types";

interface IProps {
  items: todoItem[];
}
const Dashboard = (props: IProps) => {
  const completedTasks = props.items.filter((item) => item.isDone).length;
  const importantTasks = props.items.filter((item) => item.isImportant).length;
  return (
    <div className="dashboard-wrapper">
      <div>
        <b>{props.items.length} </b>
        <span> Created tasks!</span>
      </div>
      <div>
        <b> {completedTasks}</b>
        <span> Completed tasks!</span>
      </div>
      <div>
        <b>{importantTasks} </b>
        <span> Important tasks!</span>
      </div>
    </div>
  );
};

export default Dashboard;
