import React, { useState } from "react";
import Button from "./components/button";
import Display from "./components/display";
const buttons = [
  ["+", "-", "*", "<-"],
  ["7", "8", "9", "AC"],
  ["4", "5", "6", "/"],
  ["1", "2", "3", "%"],
  ["0", ".", "="],
];

const App = () => {
  const [displayValue, setDisplayValue] = useState("");
  const [setJustEvaluated] = useState(false);

  const handleClick = (btn) => {
    if (btn === "AC") {
      setDisplayValue("");
      setJustEvaluated(false);
    } else if (btn === "<-") {
      setDisplayValue(displayValue.slice(0, -1));
      setJustEvaluated(false);
    } else if (btn === "%") {
      if (displayValue !== "Error" && displayValue !== "") {
        const currentValue = parseFloat(displayValue);
        setDisplayValue((currentValue / 100).toString());
        setJustEvaluated(false);
      }
    } else if (btn === "=") {
      try {
        setDisplayValue(eval(displayValue).toFixed(6));
        setJustEvaluated(true); // eval calculate the answer for basic math expressions
      } catch (err) {
        setDisplayValue("Error");
      }
    } else {
      if (displayValue === "Error") {
        setDisplayValue(btn);
      } else {
        setDisplayValue(displayValue + btn);
      }
    }
  };

  return (
    <div className="flex  justify-center items-center h-[100vh] w-[100vw] bg-[#3A4764]">
      
      <div className="back h-[700px] w-[500px] rounded-3xl flex flex-col  ">
        <p className="text-4xl text-white  font-mono font-bold pb-0 pt-2 text-center uppercase ">
          Calculator
        </p>
        <Display value={displayValue} />
        <div className="bg-[#3A4764] shadow-[inset_10px_10px_25px_rgba(0,0,0,0.5),inset_-10px_-10px_25px_rgba(255,255,255,0.1)] h-full rounded-3xl m-4 p-4 grid grid-cols-4 gap-4 justify-items-center items-center">
          {buttons.flat().map((btn, i) =>
            btn === "=" ? (
              <div
                key={i}
                className="col-span-2 w-full flex justify-center items-center">
                <Button
                  name={btn}
                  width="320px"
                  font="50px"
                  onClick={() => handleClick(btn)}
                />
              </div>
            ) : (
              <div key={i} className="w-full flex justify-center">
                <Button name={btn} onClick={() => handleClick(btn)} />
              </div>
            )
          )}
        </div>
      </div>
      
    </div>
  );
};

export default App;
