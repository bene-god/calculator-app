import { useState } from "react";

function App() {
  const [calculate, setCalculate] = useState("");
  const [result, setResult] = useState("");

  const operators = ["/", "*", "+", "-", "."];

  const updateCalculate = (value) => {
    if (
      (operators.includes(value) && calculate === "") ||
      (operators.includes(value) && operators.includes(calculate.slice(-1)))
    ) {
      return;
    }
    setCalculate(calculate + value);

    if (!operators.includes(value)) {
      setResult(eval(calculate + value).toString());
    }
  };

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button
          onClick={() => {
            updateCalculate(i.toString());
          }}
          key={i}
        >
          {i}
        </button>
      );
    }
    return digits;
  };

  const calculation = () => {
    setCalculate(eval(calculate).toString());
  };

  const deleteLast = () => {
    if (calculate === "") {
      return;
    }
    const value = calculate.slice(0, -1);

    setCalculate(value);
  };

  const deleteAll = () => {
    if (calculate === "") {
      return;
    }
    const value = calculate.slice(0, -calculate.length);

    setCalculate(value);
    setResult("");
  };

  return (
    <div className="App">
      <h3> Scarlett Calculator </h3>
      <div className="calculator">
        <div className="display">
          {result ? <span> ({result}) </span> : ""}&nbsp;
          {calculate || `0`}
        </div>
        <div className="operators">
          <button
            onClick={() => {
              updateCalculate("/");
            }}
          >
            /
          </button>
          <button
            onClick={() => {
              updateCalculate("*");
            }}
          >
            *
          </button>
          <button
            onClick={() => {
              updateCalculate("+");
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              updateCalculate("-");
            }}
          >
            -
          </button>

          <button onClick={deleteLast}>DEL</button>
          <button onClick={deleteAll}>AC</button>
        </div>
        <div className="digits">
          {createDigits()}

          <button
            onClick={() => {
              updateCalculate("0");
            }}
          >
            0
          </button>
          <button
            onClick={() => {
              updateCalculate(".");
            }}
          >
            .
          </button>
          <button onClick={calculation}> = </button>
        </div>
      </div>
    </div>
  );
}

export default App;
