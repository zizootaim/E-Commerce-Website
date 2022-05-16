import React, { useEffect, useState } from "react";
import "./Products.css";
import Product from "./Product";
import { useContextGlobally } from "../../AppContext/AppContext";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loader = () => {
  return (
    <SkeletonTheme>
      <p>
        <Skeleton count={1} height={180} width={250} />
      </p>
      <p>
        <Skeleton count={1} height={50} width={250} />
      </p>
      <p>
        <Skeleton count={1} height={50} width={250} />
      </p>
    </SkeletonTheme>
  );
};

const Products = ({ home }) => {
  const { state, setFilterObj } = useContextGlobally();
  const [loading, setLoading] = useState(true);
  const loaders = () => {
    let arr = [];
    for (let i = 0; i < 30; i++) {
      arr.push(<Loader />);
    }
    
    return arr;
  };
  useEffect(() => {
    const loadingTime = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(loadingTime);
  }, []);
  if (state.loading || loading) {
    return (
      <div className="sketlon">
        {loaders().map((l, index) => (
          <div key={index}>{l}</div>
        ))}
      </div>
    );
  }
  return state.products.length >= 1 ? (
    <div className="products__container">
      <h1 className="products-title">New Arrivals for you</h1>
      <div className="products">
        {home ? (
          state.products.slice(0, 15).map((p) => {
            return <Product p={p} key={p.id} />;
          })
        ) : state.filteredProducts.length >= 1 ? (
          state.filteredProducts.map((p) => {
            return <Product p={p} key={p.id} />;
          })
        ) : (
          <div>
            <h1>No Products</h1>
            <button
              className="btn"
              style={{ marginTop: "1.5rem" }}
              onClick={() =>
                setFilterObj({
                  category: "all",
                  type: "CATEGORY",
                  filtering: false,
                })
              }
            >
              Show All
            </button>
          </div>
        )}
      </div>
    </div>
  ) : (
    <h1 className="error">404 Error, Please Try Again.</h1>
  );
};

export default Products;
/*

   
*/
