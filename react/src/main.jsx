import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import Product from './components/Product'

//function is component and props is parameter in react
//component should always be capital
function Product2(props) {
  return (
    <div className="product">
      <p className="product-title">{props.title}</p>
      <p className="product-price">Rs:{props.price}</p>
      <p>
        {props.description}
      </p>
    </div>
  );
}

let title="dynamic react"

let products=[{
  title:"mobile",
  price: 1000,
  discountedPrice: 200,
  description: "jpt"
},
{
  title:"mobile",
  price: 1000,
  discountedPrice: 200,
  description: "jpt"
},
{
  title:"mobile",
  price: 1000,
  discountedPrice: 200,
  description: "jpt"
}]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <h1>{title}</h1>
    <hr />
    <div className='flex'>
    <Product title="Biscuit" price="50" description="Coconut Biscuit"/>
    <Product title="Cookie" price="50" description="Chocolate Cookie"/>
   
    <Product2 title="Chocolate" price="10" description="they are expensive"/>
    <Product2 title="Candy" price="10" description="they are expensive"/>
    
   </div>
    
   


  </React.StrictMode>,
);
