import Product from "./components/Product";
import "./index.css";
import Todo from "./Todo";
import ProductList from "./ProductList";

export default function App() {
  return (
    <div>
      <div>
        <ProductList />
        <hr />
      </div>

      <div>
        <h1>Todo List</h1>
        <Todo />
      </div>
    </div>
  );
}
