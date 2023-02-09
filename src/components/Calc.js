import React, { useState } from "react";
import "./Calc.css";
function Calc() {
  const [calci, setCalci] = useState("");
  const ops = ["/", "*", "+", "-", "."];
  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calci === "") ||
      (ops.includes(value) && ops.includes(calci.slice(-1)))
    ) {
      return;
    }
    setCalci(calci + value);
  };
  const calculate = () => {
    setCalci(eval(calci).toString());
  };
  const createDigits = () => {
    const digit = [];
    for (let i = 1; i <= 9; i++) {
      digit.push(
        <button
          className="calc-btn"
          key={i}
          onClick={() => updateCalc(i.toString())}
        >
          {i}
        </button>
      );
      //
    }
    return digit;
  };
  const deleteLast = () => {
    if (calci === "") {
      return;
    }
    const value = calci.slice(0, -1);
    setCalci(value);
  };
  return (
    <div className="calc-app">
      <div className="calculator">
        <div className="display">{calci || "0"}</div>
        <div className="operators">
          <button className="calc-btn" onClick={() => updateCalc("/")}>
            /
          </button>
          <button className="calc-btn" onClick={() => updateCalc("*")}>
            *
          </button>
          <button className="calc-btn" onClick={() => updateCalc("+")}>
            +
          </button>
          <button className="calc-btn" onClick={() => updateCalc("-")}>
            -
          </button>
          <button className="calc-btn" onClick={deleteLast}>
            DEL
          </button>
        </div>
        <div className="digits">
          {createDigits()}
          <button className="calc-btn" onClick={() => updateCalc("0")}>
            0
          </button>
          <button className="calc-btn" onClick={() => updateCalc(".")}>
            .
          </button>
          <button className="calc-btn" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calc;
