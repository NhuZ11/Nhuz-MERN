import React, { useState } from "react";

export default function () {
  const [color, setColor] = useState("black");

  const blackMode = () => {
    setColor("black");
  };

  const whiteMode = () => {
    setColor("white");
  };

  return (
    <div
      className={color=="black"?"black":""}
      // style={{
      //   backgroundColor: color,
      //   color: color === "black" ? "white" : "black",
        
      // }}
    >
      <p>Current theme: {color}</p>
      {color=="black"?<button onClick={whiteMode}>Light theme</button>:<button onClick={blackMode}>Dark theme</button>}
      {/* <button onClick={whiteMode}>Light theme</button>
      <button onClick={blackMode}>Dark theme</button> */}
      <p>hello world</p>
      <p>hello nepal</p>
    </div>
  );
}
