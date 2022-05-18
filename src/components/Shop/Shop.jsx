import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import "./Shop.css";
import Products from "../Products/Products";
import { useContextGlobally } from "../../AppContext/AppContext";

const Shop = () => {
  const {
    state,
    filterProducts,
    priceRanges,
    setPriceRanges,
    filterObj,
    setFilterObj,
  } = useContextGlobally();
  useEffect(() => {
    window.scrollTo({top:0})
  },[])

  useEffect(() => {
    filterProducts(filterObj);
    if (!filterObj.filtering && filterObj.category == 'all') {
      document.querySelector(".categories__field-select select").value = "all";
      Array.from(document.querySelectorAll(".discount__field .discount input")).forEach((i) => {
        i.checked = false;
      });
      setPriceRanges([50, 9000])
    }
  }, [filterObj]);

  const setFilterRate = (e) => {
    let rate = e.target.dataset.value;
    if (!e.target.className.includes("rate"))
      rate = e.target.parentElement.dataset.value;
    setFilterObj(() => {
      return { ...filterObj, filtering:true,rate, type: "RATE" };
    });
  };

  const setFilterCheckbox = (e, i) => {
    if (e.target.checked) {
      Array.from(document.querySelectorAll(".discount__field .discount input"))
        .filter((b, index) => index != i)
        .forEach((i) => {
          i.checked = false;
        });
      setFilterObj(() => {
        return { ...filterObj, discount: e.target.value, type: "DISCOUNT", filtering:true };
      });
    }
  };

  const handleChange = (event, newValue) => {
    setPriceRanges(newValue);
    setFilterObj(() => {
      return { ...filterObj, priceRanges: newValue, type: "PRICE", filtering:true };
    });
  };

  return (
    <section className="shop">
     <article className="shop__form">
        <div className="search__field">
          <input
            type="text"
            placeholder="Search here ..."
            onChange={(e) =>
              setFilterObj(() => {
                return { ...filterObj, name: e.target.value, type: "NAME", filtering:true };
              })
            }
          />
          <span className="icon">
            <i className="fas fa-search"></i>
          </span>
        </div>
        <div className="categories__field">
          <h3 className="form__title">Category </h3>
          <div className="categories__field-select">
            <select
              onChange={(e) =>
                setFilterObj(() => {
                  return {
                    ...filterObj,
                    category: e.target.value,
                    type: "CATEGORY", filtering:true
                  };
                })
              }
            >
              <option value="all">All</option>
              {state.categories.map((c, i) => (
                <option value={c} key={i}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="price__field">
          <h3 className="form__title">Price range</h3>
          <div className="ranges">
            <span className="from">${priceRanges[0]}</span>
            <span> - </span>
            <span className="to">${priceRanges[1]}</span>
          </div>
          <div className="range__inputs">
            <Box sx={{ width: 250 }}>
              <Slider
                value={priceRanges}
                onChange={handleChange}
                min={50}
                max={9000}
                style={{ color: "#ff4e00" }}
              />
            </Box>
          </div>
        </div>
        <div className="discount__field">
          <h3 className="form__title">Discount</h3>
          <div className="discount">
            <input
              type="checkbox"
              value={10}
              onChange={(e) => setFilterCheckbox(e, 0)}
            />
            <span>10% or More</span>
          </div>
          <div className="discount">
            <input
              type="checkbox"
              value={20}
              onChange={(e) => setFilterCheckbox(e, 1)}
            />
            <span>20% or More</span>
          </div>
          <div className="discount">
            <input
              type="checkbox"
              value={30}
              onChange={(e) => setFilterCheckbox(e, 2)}
            />
            <span>30% or More</span>
          </div>
          <div className="discount">
            <input
              type="checkbox"
              value={40}
              onChange={(e) => setFilterCheckbox(e, 3)}
            />
            <span>40% or More</span>
          </div>
          <div className="discount">
            <input
              type="checkbox"
              value={50}
              onChange={(e) => setFilterCheckbox(e, 4)}
            />
            <span>50% or More</span>
          </div>
        </div>
        <div className="rate__field">
          <h3 className="form__title">Customer Review</h3>
          <div className="rate" data-value="5" onClick={setFilterRate}>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <span>5.0</span>
          </div>
          <div className="rate" data-value="4" onClick={setFilterRate}>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>

            <span>4.0</span>
          </div>
          <div className="rate" data-value="3.5" onClick={setFilterRate}>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half"></i>

            <span>3.5</span>
          </div>
          <div className="rate" data-value="3" onClick={setFilterRate}>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>

            <span>3.0</span>
          </div>
          <div className="rate" data-value="2.5" onClick={setFilterRate}>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half"></i>

            <span>2.5</span>
          </div>
        </div>
      </article>
      <article className="shop__products">
        <Products />
      </article>
    </section>
  );
};

export default Shop;
