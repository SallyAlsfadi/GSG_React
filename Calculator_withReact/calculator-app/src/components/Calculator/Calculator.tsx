import React from "react";

interface CalculatorProps {
  onInput: (value: string) => void;
  onResult: () => void;
  onClear: () => void;
}

const Calculator: React.FC<CalculatorProps> = ({
  onInput,
  onResult,
  onClear,
}) => {
  const buttons = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "=",
    "C",
  ];
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "10px",
        maxWidth: "150px",
        margin: "0 auto",
      }}
    >
      {buttons.map((btn) => (
        <button
          key={btn}
          onClick={() =>
            btn === "=" ? onResult() : btn === "C" ? onClear() : onInput(btn)
          }
          style={{
            padding: "15px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            backgroundColor: btn === "=" ? "#28a745" : "#007BFF",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};
export default Calculator;
