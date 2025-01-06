import React from "react";
import "./dashboard.css";
const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <div>
        <b>20 </b>
        <span>Created tasks!</span>
      </div>
      <div>
        <b>20 </b>
        <span>Completed tasks!</span>
      </div>
      <div>
        <b>20 </b>
        <span> Important tasks!</span>
      </div>
    </div>
  );
};

export default Dashboard;
