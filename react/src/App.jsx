import Product from "./components/Product";
import "./index.css";

//function is component and props is parameter in react
//component should always be capital
// function Product2(props) {
//     return (
//       <div className="product">
//         <p className="product-title">{props.title}</p>
//         <p className="product-price">Rs:{props.price}</p>
//         <p>
//           {props.description}
//         </p>
//       </div>
//     );
//   }

let title = "dynamic react";

let products = [
  {
    title: "mobile",
    price: 1000,
    feature: true,
    discountedPrice: 200,
    description: "jpt",
  },
  {
    title: "car",
    price: 1000,
    feature: false,
    discountedPrice: 200,
    description: "jpt",
  },
  {
    title: "bike",
    price: 1000,
    feature: true,
    discountedPrice: 200,
    description: "jpt",
  },
];
let featuredProduct=products.filter((el)=>el.feature) //then you can do featuredProduct.map()

export default function App() {
  return (
    <div>
      <h1>{title}</h1>
      <hr />
      <div className="flex">
        {/* <Product title="Biscuit" price="50" description="Coconut Biscuit"/>
    <Product title="Cookie" price="50" description="Chocolate Cookie"/> */}

        {products.map((product, index) => (
          <Product
            key={index}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
        <br />
        <h1>Featured Products</h1>
        {products.map((product, index) => {
          if (product.feature) {
            return (
              <Product
                key={index}
                title={product.title}
                price={product.price}
                description={product.description}
              />
            );
          }
        })}


      </div>
    </div>
    //another way
   
  );
}
