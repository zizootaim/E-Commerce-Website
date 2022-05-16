import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./About.css";

const About = () => {
  return (
    <section className="about" style={{ marginTop: "6rem" }} id="about">
      <div className="testimonials">
          
      <h1 className="title">Our <span>Customers</span> Opinions</h1>
        <div>
        <OwlCarousel
          items={4}
          className="owl-theme"
          responsiveClass={true}
          responsive={{
            0:{
                items: 1,
                nav: true,
                loop: false,
              }
          }}
          margin={16}
        >
          <div className="testimonial">
            <h3>
              Gretchen <span>Customer</span>
            </h3>
            <p className="from">United States</p>
            <p>
              Maecenas interdum, metus vitae tincidunt porttitor, magna quam
              egestas sem, ac scelerisque nisl nibh vel lacus. Proin eget
              gravida odio. Donec ullamcorper est eu accumsan cursus.
            </p>
          </div>
          <div className="testimonial">
            <h3>
              Esmeralda <span>Customer</span>
            </h3>
            <p className="from">United States</p>
            <p>
              Maecenas interdum, metus vitae tincidunt porttitor, magna quam
              egestas sem, ac scelerisque nisl nibh vel lacus. Proin eget
              gravida odio. Donec ullamcorper est eu accumsan cursus.
            </p>
          </div>
          <div className="testimonial">
            <h3>
              Gretchen <span>Customer</span>
            </h3>
            <p className="from">United States</p>
            <p>
              Maecenas interdum, metus vitae tincidunt porttitor, magna quam
              egestas sem, ac scelerisque nisl nibh vel lacus. Proin eget
              gravida odio. Donec ullamcorper est eu accumsan cursus.
            </p>
          </div>
        </OwlCarousel>
        </div>
      </div>
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
    </section>
  );
};

export default About;
