import React from "react";
import "./Display.css";

interface DisplayProps {
  Expression: string;
  Result: string | number | null;
}

const Display: React.FC<DisplayProps> = ({ Expression, Result }) => {
  return (
    <div className="display-container">
      <div className="expression">{Expression || "0"}</div>
      <div className="result">{Result !== null ? `= ${Result}` : ""}</div>
    </div>
  );
};

export default Display;
