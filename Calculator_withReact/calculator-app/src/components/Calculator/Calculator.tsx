import React from "react";
import "./Calculator.css";

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
    <div className="calculator-container">
      {buttons.map((btn) => (
        <button
          key={btn}
          onClick={() =>
            btn === "=" ? onResult() : btn === "C" ? onClear() : onInput(btn)
          }
          className={`calculator-button ${btn === "=" ? "equal" : ""}`}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default Calculator;
