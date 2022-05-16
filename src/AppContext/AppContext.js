import React, { useEffect, useReducer, useState } from "react";
import reducer from "./reducer";
import * as actionTypes from "../AppContext/ActionTypes";

const AppContext = React.createContext();
const productsURL = "https://dummyjson.com/products?limit=100";
const categoriesURL = "https://dummyjson.com/products/categories";

/* Action Types */
const {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  FETCH_CAT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHANGE_AMOUNT,
  FILTER__PRODUCTS,
} = actionTypes;

const initialState = {
  loading: false,
  products: [],
  categories: [],
  cartProducts: [],
  filteredProducts: [],
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [priceRanges, setPriceRanges] = useState([50, 9000]);
  const [filterObj, setFilterObj] = useState({ priceRanges, filtering: false });

  const fetchData = async (url, p) => {
    dispatch({ type: FETCH_REQUEST });
    const res = await fetch(url);
    const data = await res.json();
    if (data.products && p) {
      dispatch({ type: FETCH_SUCCESS, payload: data.products });
    }
    if (data && !p) {
      dispatch({ type: FETCH_CAT, payload: data });
    }
  };

  // Cart Functions
  const addToCart = (p) => {
    let existed = false;
    state.cartProducts.forEach((pro) => {
      if (pro.id == p.id) existed = true;
    });
    if (!existed) {
      p.count = 1;
      p.total = p.price;
      dispatch({ type: ADD_TO_CART, payload: p });
    } else return;
  };

  const removeFromCart = (id) => {
    dispatch({ type: REMOVE_FROM_CART, payload: id });
  };

  const changeAmount = (q, id) => {
    dispatch({ type: CHANGE_AMOUNT, payload: { q, id } });
  };

  const filterProducts = (t) => {
    dispatch({ type: FILTER__PRODUCTS, payload: t });
  };
  // Product Stars Generator
  const createStars = (num) => {
    let stars = [];
    const s = "fas fa-star",
      s_h = "fas fa-star-half";

    const h = num - Math.floor(num);

    for (let i = 0; i < Math.floor(num); i++) {
      stars.push(s);
    }
    if (h == 0.5) stars.push(s_h);

    return stars;
  };
  useEffect(() => {
    fetchData(productsURL, true).catch(() => dispatch({ type: FETCH_FAILURE }));
    fetchData(categoriesURL, false).catch(() =>
      dispatch({ type: FETCH_FAILURE })
    );
  }, []);

  return (
    <AppContext.Provider
      value={{
        state,
        addToCart,
        removeFromCart,
        changeAmount,
        filterProducts,
        priceRanges,
        setPriceRanges,
        filterObj,
        setFilterObj,
        createStars,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useContextGlobally = () => {
  return React.useContext(AppContext);
};
