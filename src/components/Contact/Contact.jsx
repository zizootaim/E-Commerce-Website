import React from "react";
import TextField from "@mui/material/TextField";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__title">
        <h1>Conatct</h1>
        <span>WE LOVE TO DISCUSS YOUR IDEA</span>
      </div>
      <div className="contact__data">
        <div className="contact-col">
          <i className="far fa-map"></i>
          <div>
            <h4>Address</h4>
            <p>California, USA</p>
          </div>
        </div>
        <div className="contact-col">
          <i className="far fa-envelope"></i>
          <div>
            <h4>Email</h4>
            <p>Email : mail@example.com</p>
          </div>
        </div>
        <div className="contact-col">
          <i className="fas fa-mobile-alt"></i>
          <div>
            <h4>Phone</h4>
            <p>010-15-39-79</p>
          </div>
        </div>
      </div>
      <div className="contact__form">
        <div>
          <TextField label="Name" fullWidth color="warning" id="fullWidth"  />
          <TextField label="Email" style={{ margin: "1rem 0" }} color="warning" />
          <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          color="warning"
        />
          <TextField label="Subject" style={{ margin: "1rem 0" }} color="warning" />
        </div>
        <div>
          <textarea cols="30" rows="10" placeholder="Your message"></textarea>
          <button className="btn submit-btn">Submit</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
