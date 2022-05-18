import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContextGlobally } from "../../AppContext/AppContext";
import millify from "millify";
import "./Products.css";

const SingleProduct = () => {
  const { state, createStars, addToCart } = useContextGlobally();
  const { id } = useParams();
  const p = state.products.filter((pro) => pro.id == id)[0];

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <section className="single-product__wrapper">
      {p ? (
        <div className="single-product">
          <div className="product__img-wrapper">
            <img src={p.thumbnail} alt="img" />
          </div>
          <div className="product__content">
            <p>{p.brand}</p>
            <p>{p.category}</p>
            <h4>{p.title}</h4>
            <p>{p.description}</p>
            <p
              className={
                p.discountPercentage
                  ? "product__price discount"
                  : "product__price"
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
          </div>
        </div>
      ) : (
        <h2 className="error">Error, Please Try Again .</h2>
      )}
    </section>
  );
};

export default SingleProduct;
