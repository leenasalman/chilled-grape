import React from "react";
import { Link } from "react-router-dom";
import telegram from "../images/telegram.png";
import facebook from "../images/facebook-one.png";
import instagram from "../images/instagram.png";
import tiktok from "../images/tiktok.png";
import youtube from "../images/youtube.png";
import twitter from "../images/twitter.png";
import "./FooterSection.css";

function FooterSection() {
  return (
    <>
      <footer className="footer-section">
        <div className="container">
          <div className="row flex-md-row flex-column">
            <div className="col-md-6 col">
              <div>
                <h5 className="footer-main-title">Chilled grape</h5>
                <p className="footer-main-paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                  dolor sit amet.
                </p>
              </div>
            </div>
            <div className="col-md-2 col">
              <div>
                <h6 className="footer-list-title">Company</h6>
                <ul className="footer-list">
                  <li className="footer-list-item">
                    <Link to="/about" className="">
                      About
                    </Link>
                  </li>
                  <li className="footer-list-item">
                    <Link to="/careers" className="">
                      Careers
                    </Link>
                  </li>
                  <li className="footer-list-item">
                    <Link to="/our-work" className="">
                      Our Work
                    </Link>
                  </li>
                  <li className="footer-list-item">
                    <Link to="/contact" className="">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col">
              <div>
                <h6 className="footer-list-title">Products</h6>
                <ul className="footer-list">
                  <li className="footer-list-item">
                    <Link to="/about" className="">
                      About
                    </Link>
                  </li>
                  <li className="footer-list-item">
                    <Link to="/careers" className="">
                      Careers
                    </Link>
                  </li>
                  <li className="footer-list-item">
                    <Link to="/our-work" className="">
                      Our Work
                    </Link>
                  </li>
                  <li className="footer-list-item">
                    <Link to="/contact" className="">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col">
              <div>
                <h6 className="footer-list-title">Follow us</h6>
                <div className="social-media-follow-us">
                  <div className="row">
                    <div className="col">
                      <Link to="" className="social-media-link">
                        <img src={telegram} alt="telegram"/>
                      </Link>
                    </div>
                    <div className="col">
                      <Link to="" className="social-media-link">
                      <img src={twitter} alt="twitter"/>
                      </Link>
                    </div>
                    <div className="col">
                      <Link to="" className="social-media-link">
                      <img src={youtube} alt="youtube"/>
                      </Link>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <Link to="" className="social-media-link">
                      <img src={facebook} alt="facebook"/>
                      </Link>
                    </div>
                    <div className="col">
                      <Link to="" className="social-media-link">
                      <img src={instagram} alt="instagram"/>
                      </Link>
                    </div>
                    <div className="col">
                      <Link to="" className="social-media-link">
                      <img src={tiktok} alt="tiktok"/>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterSection;
