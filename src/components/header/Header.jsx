import React, { useEffect, useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import {
  blunaturalLogo,
  darkFacebook,
  darkYoutube,
  darktwitter,
  drop,
  facebookLogo,
  mobileMail,
  mobileWhatsapp,
  twitterLogo,
  whatsappLogo,
  youtubeLogo,
} from "../assets/index";
import EnquiryModal from "../modal/EnquiryModal";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleShowContent = () => {
    setShowContent(!showContent);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="Nav-Hero">
      {/* DESKTOP VIEW  */}
      <div className="Header">
        <div className="NavBar">
          <div className="section">
            <a
              href="https://api.whatsapp.com/send/?phone=917599666612&text=Hi%2C+I+wan%27t+to+enquire+about+Aquabot.&type=phone_number&app_absent=0"
              className="icons"
            >
              <img src={whatsappLogo} alt="Whatsapp Logo" className="logo" />{" "}
              759-966-6612
            </a>
          </div>
          <div className="section">
            <Link href="#" className="icons">
              <img
                src={facebookLogo}
                alt="Whatsapp Logo"
                style={{ marginBottom: "2px", width: "20px" }}
              />{" "}
            </Link>
            <Link href="#" className="icons">
              <img src={twitterLogo} alt="Whatsapp Logo" className="logo" />{" "}
            </Link>
            <Link href="#" className="icons">
              <img src={youtubeLogo} alt="Whatsapp Logo" className="logo" />{" "}
            </Link>
          </div>
        </div>
      </div>
      <div className={`navBar-1 ${showNavbar ? "show" : ""}`}>
        <div className="brand-logo">
          <Link to="/">
            <img src={blunaturalLogo} alt="" />
          </Link>
        </div>
        <ul className="navList">
          <li>
            <Link to="/" className="home">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="home">
              Refer & Earn
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="home">
              Contact Us
            </Link>
          </li>
          <li>
            <EnquiryModal />
          </li>
        </ul>
      </div>

      {/* MOBILE VIEW  */}

      <div className={`hamburger-nav ${showNavbar ? "show" : ""}`}>
        <a href="/">
          <img
            src={blunaturalLogo}
            alt="Blunatural Mobile Logo"
            className="mob-logo"
          />
        </a>
        <div className="hamburger" onClick={handleShowContent}>
          <input className="checkbox" type="checkbox" />
          <svg fill="none" viewBox="0 0 20 50" height={40} width={50}>
            <path
              className="lineTop line"
              strokeLinecap="round"
              strokeWidth={1}
              stroke="black"
              d="M6 11L44 11"
            />
            <path
              strokeLinecap="round"
              strokeWidth={1}
              stroke="black"
              d="M6 24H43"
              className="lineMid line"
            />
            <path
              strokeLinecap="round"
              strokeWidth={1}
              stroke="black"
              d="M6 37H43"
              className="lineBottom line"
            />
          </svg>
        </div>
        {showContent && (
          <div className="hamburger-nav-menu">
            <span>
              {" "}
              <a href="/">
                {" "}
                <img src={drop} alt="Water Droplet" /> Home
              </a>
            </span>
            <span>
              {" "}
              <Link
                to="/"
                className="last2-ham-nav"
                onclick="window.pushDataLayer('w_header_refer_earn_clicked')"
              >
                {" "}
                <img src={drop} alt="Water Droplet" />
                Refer &amp; earn{" "}
              </Link>
            </span>
            <span>
              {" "}
              <Link to="/contact-us" className="last2-ham-nav">
                <img src={drop} alt="Water Droplet" />
                Contact Us
              </Link>
            </span>
            <div className="hamburger-nav-menu-social">
              <span>
                {" "}
                <img src={mobileWhatsapp} alt="Whatsapp Logo" />{" "}
                <a href="tel:+918700026451">87000-264-51 </a>
              </span>
              <span>
                {" "}
                <a
                  style={{
                    fontWeight: "500 !important",
                    fontSize: "12px !important",
                    lineHeight: "24px !important",
                    color: "black",
                  }}
                  href=" https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=support@Blunatural.in"
                >
                  <img src={mobileMail} alt="Gmail Logo" />
                  support@Blunatural.in{" "}
                </a>
              </span>
              <div className="section">
                <a href="https://www.facebook.com/Blunatural/">
                  {" "}
                  <img src={darkFacebook} alt="Blue Facebook logo" />{" "}
                </a>
                <a href="https://twitter.com/Blunatural?lang=en">
                  {" "}
                  <img src={darktwitter} alt="Blue Twitter Logo" />{" "}
                </a>
                <a href="https://www.youtube.com/c/Blunatural">
                  {" "}
                  <img src={darkYoutube} alt="Dark Youtube Logo" />{" "}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
