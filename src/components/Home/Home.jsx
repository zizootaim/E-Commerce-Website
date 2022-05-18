import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import '../About/About.css'
import Products from "../Products/Products";
import ProductsSlider from "../Products/ProductsSlider";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const autoSliding = setTimeout(() => {
      autoSlider();
    }, 2000);

    return () => {
      clearInterval(autoSliding);
    };
  }, []);
  let slideNum = 0,
    interval;
  const autoSlider = () => {
    // interval = setInterval(() => {
    //   moveSlider(true);
    // }, 2000);
  };
  const moveSlider = (right) => {
    if (right) {
      slideNum++;
      if (slideNum > 2) slideNum = 0;
    } else {
      slideNum--;
      if (slideNum < 0) slideNum = 2;
    }

    document.querySelector(".slides").style.transform = `translateX(-${
      slideNum * 100
    }vw)`;
  };

  return (
    <section className="home" id="home">
      <article className="home__slider">
        <button
          className="slider-arrow right"
          onClick={() => {
            clearInterval(interval);
            moveSlider(true);
          }}
        >
          <i className="fas fa-angle-right"></i>
        </button>
        <div className="slides">
          <div className="slide">
            <img src="./imgs/3.jpg" alt="img" />
            <div>
              <h1 className="slide__title">Glasses Store</h1>
              <p>Want to Look Your Best?</p>
              <button className="btn slide-btn" onClick={() => navigate('shop')}>shop now</button>
            </div>
          </div>

          <div className="slide">
            <img src="./imgs/b2.jpg" alt="img" />
            <div>
              <h1 className="slide__title">Furniture Store</h1>
              <p>Want to Look Your Best?</p>
              <button className="btn slide-btn">shop now</button>
            </div>
          </div>
          <div className="slide">
            <img src="./imgs/1.jpg" alt="img" />
            <div>
              <h1 className="slide__title">Mobiles Store</h1>
              <p>Want to Look Your Best?</p>
              <button className="btn slide-btn">shop now</button>
            </div>
          </div>
        </div>
        <button
          className="slider-arrow left"
          onClick={() => {
            clearInterval(interval);
            moveSlider(false);
          }}
        >
          <i className="fas fa-angle-left"></i>
        </button>
      </article>
      <Products home />
      <button className="btn more-btn" onClick={() => navigate("/shop")}>
        see more
      </button>
      <ProductsSlider />
      <article className="about" id="about">
        <div className="about-row">
          <div className="about-col">
            <i className="fas fa-hand-paper"></i>
            <h2>Satisfaction Guaranteed</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              fugiat pariatur quo enim dolor tenetur.
            </p>
          </div>
          <div className="about-col">
            <i className="fas fa-rocket"></i>
            <h2>Fast Shipping</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              fugiat pariatur quo enim dolor tenetur.
            </p>
          </div>
          <div className="about-col">
            <i className="fas fa-sun"></i>
            <h2>UV Protection</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              fugiat pariatur quo enim dolor tenetur.
            </p>
          </div>
        </div>
      </article>
      <article className="features">
        <div className="feature">
          <div className="feature-icon">
            <i className="fas fa-gift"></i>
          </div>
          <div className="feature__content">
            <h4>GENUINE PRODUCT</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              suscipit!
            </p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <i className="fas fa-shield-alt"></i>
          </div>
          <div className="feature__content">
            <h4>SECURE PRODUCT</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              suscipit!
            </p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <i className="fas fa-dollar-sign"></i>
          </div>
          <div className="feature__content">
            <h4>CASH ON DELIVERY</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              suscipit!
            </p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <i className="fas fa-truck"></i>
          </div>
          <div className="feature__content">
            <h4>EASY DELIVERY</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              suscipit!
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Home;
