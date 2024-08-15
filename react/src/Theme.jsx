import React, { useState } from "react";

export default function (props) {
  // const [color, setColor] = useState("white");
  
 

  const blackMode = () => {
    setColor("black");
   
  };

  const whiteMode = () => {
    setColor("white");
   
  };

  return (
    <div
      className={color=="black"?"black":"" }
      // style={{
      //   backgroundColor: bgColor,
      //   color: color === "black" ? "black" : "white",
        
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
