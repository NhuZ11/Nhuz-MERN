import Product from "./components/Product";
import "./index.css";
import Todo from "./Todo";
import Counter from "./components/Counter";
import ProductList from "./ProductList";
import Theme from "./Theme";
import GoogleTabs from "./components/GoogleTabs";
import { useState } from "react";
import ComponentA from "./Context/ComponentA";


export default function App() {
  const [currentTheme,setCurrentTheme] =useState()
  return (
    <div >
      <div className="appTop">
     
        <GoogleTabs />
        
        <Counter  />
        <Theme currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
        <ComponentA />
        {/* <Theme /> */}
      </div>
      {/* <div>
        <ProductList />
        <hr />
      </div>

      <div>
        <h1>Todo List</h1>
        <Todo />
      </div> */}
    </div>
  );
}
