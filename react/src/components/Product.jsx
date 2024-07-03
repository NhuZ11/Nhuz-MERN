import React from 'react';
//component
export default function Product(props) {
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

/*  function Product1() {
    return (
      <div className="product">
        <p className="product-title">Sunglass</p>
        <p className="product-price">Rs:100</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquam esse tempore consectetur temporibus voluptatum laboriosam quasi labore
          mollitia molestias ea, recusandae ipsum numquam accusamus magnam ducimus inventore, nam doloribus.
        </p>
      </div>
    );
  }


  export {
    Product,   
    Product1,  
  } */
