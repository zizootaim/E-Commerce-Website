import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Product from "./Product";
import { useContextGlobally } from "../../AppContext/AppContext";
const ProductsSlider = () => {
  const { state } = useContextGlobally();
  const [num, setNum] = useState(0);

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 96);
    setNum(randomNum);
  }, []);

  return (
    <div className="carousel">
      <OwlCarousel
        items={4}
        className="owl-theme"
        responsiveClass={true}
        responsive={{
          0: {
            items: 1,
            nav: true,
          },
          600: {
            items: 3,
            nav: false,
          },
          1000: {
            items: 4,
            nav: true,
            loop: false,
          },
        }}
        margin={16}
      >
        {state.products.slice(num, num + 6).map((p, index) => (
          <Product p={p} key={index} />
        ))}
      </OwlCarousel>
    </div>
  );
};

export default ProductsSlider;
