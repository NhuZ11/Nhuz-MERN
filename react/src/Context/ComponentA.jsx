import React, { useState, useContext, createContext } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

const ComponentA = () => {
  const [user, useUser] = useState("Nhuz");
  return (
    <div className="box">
      <h1>This is component A</h1>
      <p>Hello, {user}</p>
      <UserContext.Provider value={user}>
        <ComponentB />
      </UserContext.Provider>
    </div>
  );
};

export default ComponentA;
