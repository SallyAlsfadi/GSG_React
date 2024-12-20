import React from "react";
interface DisplayProps {
  Expression: string;
  Result: string | number | null;
}

const Display: React.FC<DisplayProps> = ({ Expression, Result }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "8px",
        marginBottom: "10px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <div style={{ fontSize: "20px", color: "#333" }}>{Expression || "0"}</div>
      <div style={{ fontSize: "24px", color: "#007BFF" }}>
        {Result !== null ? `= ${Result}` : ""}
      </div>
    </div>
  );
};
export default Display;
