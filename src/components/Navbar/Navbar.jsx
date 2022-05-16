import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useContextGlobally } from "../../AppContext/AppContext";

const Navbar = () => {
  const { state, removeFromCart, changeAmount } = useContextGlobally();
  const navigate = useNavigate();
  const getTotal = (arr) => {
    let total = 0;
    arr.forEach((p) => {
      total += p.total;
    });
    return total;
  };
  // UI Menues Functions
  const showDropMenu = (e) => {
    e.preventDefault();
    const target = e.target.parentElement.querySelector(".dropdown-menu");
    target.classList.toggle("active");
    e.target.parentElement.classList.toggle('active')
  
  };
  const showNavMenu = () => {
    const target = document.querySelector(".nav__list");
    target.classList.toggle("show");
  };
  const showCart = (show) => {
    const target = document.querySelector(".cart");
    if (show) target.classList.add("show");
    else target.classList.remove("show");
  };
  const navToPage = (e, url) => {
    navigate(url);
    Array.from(document.querySelectorAll(".dropdown-menu")).forEach((m) => {
      m.classList.remove("active");
    });
    Array.from(document.querySelectorAll(".nav__list li")).forEach((li) => {
      li.classList.remove("active");
    });
    if(e.target.localName == 'a') e.target = e.target.parentElement;
    e.target.classList.add("active");
  };

  return (
    <nav>
      <h1 className="logo">E-Commerce</h1>
      <div className="nav__list-wrapper">
        <button className="nav__menu-btn" onClick={showNavMenu}>
          <i className="fas fa-bars"></i>
        </button>
        <ul className="nav__list">
          <li onClick={(e) => navToPage(e, "/")}>
            <a>home</a>
          </li>
          <li onClick={(e) => navToPage(e, "/about")}>
            <a>about</a>
          </li>
          <li className="nav__dropdown-menu">
            <a onClick={showDropMenu}>
              features
              <i className="fas fa-caret-down"></i>
            </a>
            <ul className="dropdown-menu">
              <li>
                <h3>Our Features</h3>
                <p>Fast Shipping</p>
                <p>Satisfaction Guaranteed</p>
                <p>UV Protection</p>
              </li>
              <li>
                <h3>Some Brands</h3>
                <p>samsung</p>
                <p>dell</p>
                <p>apple</p>
              </li>
              <li>
                <h3>Best Products</h3>
                <div>
                  <img src="./imgs/1.jpg" alt="img" />
                  <img src="./imgs/2.jpg" alt="img" />
                </div>
              </li>
            </ul>
          </li>
          <li onClick={(e) => navToPage(e, "/shop")}>
            <a>shop</a>
          </li>
          <li onClick={(e) => navToPage(e, "/contact")}>
            <a>contact</a>
          </li>
        </ul>
      </div>
      <div className="cart__wrapper">
        <button className="btn cart-btn" onClick={() => showCart(true)}>
          <i className="fas fa-cart-arrow-down"></i>
          <span>Cart</span>
        </button>
        <div className="cart">
          <i
            className="fas fa-times close-btn"
            onClick={() => showCart(false)}
          ></i>
          {state.cartProducts.length >= 1 ? (
            <>
              <ul className="cart__list">
                {state.cartProducts.map((p, index) => (
                  <li className="cart__item" key={index}>
                    <p className="cart__item-title">
                      {p.title.length > 10
                        ? `${p.title.slice(0, 10)}...`
                        : p.title}
                    </p>
                    <div className="cart__item-amount">
                      <input
                        type="number"
                        defaultValue={p.count}
                        min={1}
                        onChange={(e) => changeAmount(e.target.value, p.id)}
                      />
                    </div>
                    <p className="cart__item-price">${p.total}</p>
                    <i
                      className="fas fa-trash remove-btn"
                      onClick={() => removeFromCart(p.id)}
                    ></i>
                  </li>
                ))}
              </ul>
              <div className="cart__bottom">
                <h3>
                  Total : <span>${getTotal(state.cartProducts)}</span>
                </h3>
                <button className="btn check-btn">check out</button>
              </div>
            </>
          ) : (
            <h3 className="empty-cart">Your Cart is Empty</h3>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
