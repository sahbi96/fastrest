import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
  return (
    <div className="footer-dark">
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-3 item">
                    <h3>Services</h3>
                    <ul>
                        <p>Healthy food</p>
                        <p>Tasty food</p>
                    </ul>
                </div>
                <div className="col-md-3 item">
                    <h3>Phone number</h3>
                    <ul>
                       <p>+14218618183</p>
                       <p>+99874123158</p>
                    </ul>
                </div>
                <div className="col-md-3 item">
                    <h3>Location</h3>
                    <ul>
                        <p>7-8 Park Pl, St. James's, London SW1A 1LS, Royaume-Uni </p>
                    </ul>
                </div>
                <div className="col-md-3 item text">
  <h3>Opening time</h3>
<p>lun.:	12:00 – 23:30</p>
<p>mar.:	12:00 – 23:30</p>
<p>mer.:	12:00 – 23:30</p>
<p>jeu.:	12:00 – 23:30</p>
<p>ven.:	12:00 – 23:30</p>
<p>sam.:	12:00 – 23:30</p>
<p>dim.:	12:00 – 23:30</p>

                </div>
                <div className="col item social"><Link href="#"><i className="fab fa-facebook-square"></i></Link><Link href="#"><i className="fab fa-instagram"></i></Link><Link href="#"><i className="fab fa-youtube"></i></Link><Link href="#"><i className="fab fa-twitter-square"></i></Link></div>
            </div>
            <p className="copyright"> fastRest Copyright © 2021</p>
        </div>
    </footer>
</div>
  );
}

export default Footer;
