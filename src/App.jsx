import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Shop from "./components/Shop/Shop";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import SingleProduct from "./components/Products/SingleProduct";
import { AppProvider } from "./AppContext/AppContext";

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/SingleProduct/:id" element={<SingleProduct />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </AppProvider>
  );
};

export default App;
