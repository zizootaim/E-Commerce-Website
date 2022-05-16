import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="footer-row">
        <div className="footer-col">
            <h1 className="footer__title">
                About Us
            </h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat similique esse atque nostrum perspiciatis quasi sit vel itaque? Necessitatibus tempore aliquid, molestias aut sapiente nemo vero incidunt. Minima, eaque distinctio!
            </p>
            <div className="social__icons">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-google-plus-g"></i>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-whatsapp"></i>
            </div>
        </div>
        <div className="footer-col">
            <h1 className="footer__title">
                Get in Touch
            </h1>
            <div>
                <h4 className='sub-title'>Location :</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p> 
            </div>
            <div>
                <h4 className='sub-title'>Contact :</h4>
                <p>Phone : 01010153979</p> 
                <p>Email : zizootaim@gmail.com</p>
            </div>
    
        </div>
        </div>
        <p className="copyright">
        © 2022 E-Commerce. Made By <span>Ziad Otaim</span> | Design by <a href="www.w3layouts.com" target={'_blank'}>W3layouts</a>
        </p>
    </footer>
  )
}

export default Footer