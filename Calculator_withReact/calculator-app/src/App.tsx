import React, { useState } from "react";
import Display from "./components/Display/Display";
import Calculator from "./components/Calculator/Calculator";

const App: React.FC = () => {
  const [expression, setExpression] = useState<string>(""); // Tracks the input
  const [result, setResult] = useState<number | string | null>(null); // Tracks the result

  const handleInput = (value: string) => {
    setExpression((prev) => prev + value);
  };

  const handleResult = () => {
    try {
      const evalResult = eval(expression); // Simple evaluation
      setResult(evalResult);
    } catch (error) {
      setResult("Error");
    }
  };

  const clearInput = () => {
    setExpression("");
    setResult(null);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <Display Expression={expression} Result={result} />
      <Calculator
        onInput={handleInput}
        onResult={handleResult}
        onClear={clearInput}
      />
    </div>
  );
};

export default App;
