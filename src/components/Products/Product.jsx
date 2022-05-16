import React from "react";
import millify from "millify";
import "./Products.css";
import { useContextGlobally } from "../../AppContext/AppContext";
import { useNavigate } from "react-router-dom";

const Product = ({ p }) => {
  const navigate = useNavigate();
  const { addToCart,createStars } = useContextGlobally();
  
 

  return (
    <div className="product">
      <div className="product__img-wrapper">
        <img src={p.thumbnail} alt="img" />
      </div>
      <div className="product__content">
        <p>{p.title}</p>
        <p
          className={
            p.discountPercentage ? "product__price discount" : "product__price"
          }
        >
          <span>${p.price}</span> $
          {p.discountPercentage
            ? millify(p.price - (p.discountPercentage * p.price) / 100)
            : p.price}
        </p>
        <div className="rate">
          {createStars(p.rating).map((s, index) => (
            <i className={s} key={index}></i>
          ))}
        </div>
        <button
          className="add-to__cart"
          onClick={() => {
            addToCart(p);
            document.querySelector(".cart").classList.add("show");
          }}
        >
          <i className="fas fa-cart-plus"></i>
        </button>
        <button className="btn quick-btn" onClick={() => {
          console.log(window.location.pathname);
          if(window.location.pathname == '/shop'){
            
            navigate(`SingleProduct/${p.id}`)
          }else{
            navigate(`shop/SingleProduct/${p.id}`)
          }
        }}>Quik View</button>
      </div>
    </div>
  );
};

export default Product;