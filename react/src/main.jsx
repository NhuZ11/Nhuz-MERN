import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1>Hello world from main.jsx</h1>
    <hr />
    <div className="product">
      <p className="product-title">Watch</p>
      <p class="product-price">Rs:1000</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquam esse tempore consectetur temporibus voluptatum laboriosam quasi labore
        mollitia molestias ea, recusandae ipsum numquam accusamus magnam ducimus inventore, nam doloribus.
      </p>
    </div>

    <div className="product">
      <p className="product-title">Sun Glass</p>
      <p class="product-price">Rs:8000</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquam esse tempore consectetur temporibus voluptatum laboriosam quasi labore
        mollitia molestias ea, recusandae ipsum numquam accusamus magnam ducimus inventore, nam doloribus.
      </p>
    </div>

    <div className="product">
      <p className="product-title">Smartphone</p>
      <p class="product-price">Rs:10000</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquam esse tempore consectetur temporibus voluptatum laboriosam quasi labore
        mollitia molestias ea, recusandae ipsum numquam accusamus magnam ducimus inventore, nam doloribus.
      </p>
    </div>
  </React.StrictMode>,
)
