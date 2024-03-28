import React, { useEffect, useState } from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import {
  blunaturalLogo,
  facebook,
  instagram,
  linkedin,
  logoFooter,
  twitter,
  youtube,
} from "../assets";
import AnimateFooterPopup from "./AnimateFooterPopup";
const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setShowScrollButton(false);
  };

  return (
    <footer>
      {" "}
      <div className="Footer">
        {" "}
        <div className="footer-section">
          <div className="row">
            <div className="col-a">
              <img
                className="logo"
                src={blunaturalLogo}
                alt="Blunatural Logo White"
                style={{
                  width: "120px",
                  height: "120px",
                  marginBottom: "10px",
                }}
              />
              <p className="col-para">
                #9/A, Chukki Complex, 19th Main Rd,Sector 3, HSR Layout,
                Bengaluru, Karnataka 560102
              </p>
              <div className="footer_btns">
                <Link
                  href="https://play.google.com/store/apps/details?id=waterwala.com.prime&amp;hl=en"
                  target="_blank"
                >
                  <img
                    src="https://d215djazwhhd02.cloudfront.net/images_dp/footer/googleplay.webp"
                    width="110"
                    height="36"
                    alt="drinkgoogleplay"
                  />
                </Link>

                <Link
                  href="https://apps.apple.com/in/app/Blunatural/id1358111884"
                  target="_blank"
                >
                  <img
                    src="https://d215djazwhhd02.cloudfront.net/images_dp/footer/appstore.webp"
                    width="110"
                    height="36"
                    alt="drinkprimeappstore"
                  />
                </Link>
              </div>
            </div>
            <div className="col-b">
              <h2>Smart premium water</h2>
              <ul>
                <li>
                  <a href="/#planRange" id="footer-plans">
                    Plans
                  </a>
                </li>
                <li>
                  <a href="/howitworks">How it works</a>
                </li>
                <li>
                  <a href="/#sec3">Blunatural Advantage </a>
                </li>
                <li>
                  <a href="/customerstories">Customer stories</a>
                </li>
                <li>
                  <Link style={{ color: "#4548B9" }}>
                    Get 7-days risk free trial
                  </Link>
                </li>
              </ul>
            </div>
            <div class="col-b col-b-left">
              <h2>Explore</h2>
              <ul>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/careers">Careers</a>
                </li>
                <li>
                  <a href="/press">News and events</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
              </ul>
            </div>
            <div className="col-b col-b-left-1">
              <h2>Refer &amp; Earn</h2>
              <ul>
                <li>
                  <Link href="/refer_earn">Refer now</Link>
                </li>
              </ul>
            </div>
            <div className="col-b col-b-left-2">
              <h2>Contact us</h2>
              <ul>
                <li>
                  <Link href="/water_purifier_faq">FAQs</Link>
                </li>
                <li>
                  <div className="section-footer-social-media">
                    <Link
                      href="https://www.facebook.com/Blunatural/"
                      className="footer-icon-parent "
                    >
                      {" "}
                      <img src={facebook} alt="Facebook Icon" />{" "}
                    </Link>
                    <Link to="" className="footer-icon-parent">
                      {" "}
                      <img src={twitter} alt="Twitter Icon" />{" "}
                    </Link>
                    <Link
                      href="https://www.instagram.com/Blunatural/?hl=en"
                      className="footer-icon-parent"
                    >
                      {" "}
                      <img src={instagram} alt="Instagram Icon" />{" "}
                    </Link>
                    <Link
                      href="https://www.youtube.com/c/Blunatural"
                      className="footer-icon-parent"
                    >
                      {" "}
                      <img src={youtube} alt="Youtube Icon" />{" "}
                    </Link>
                    <Link
                      href="https://www.linkedin.com/company/Blunatural/?originalSubdomain=in"
                      className="footer-icon-parent"
                    >
                      {" "}
                      <img src={linkedin} alt="Linkedin Icon" />{" "}
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-section-secondary">
          <div className="row">
            <div className="col-a-secondary">
              <p className="phone-footer-act1">
                {" "}
                &copy; {new Date().getFullYear()} Copyright. All Rights Reserved
              </p>
              <p className="phone-footer-act2 mobile-footer-p">
                <a href="/privacypolicy" className="mobile-footer-text">
                  Privacy Policy
                </a>{" "}
                |{" "}
                <a href="/terms-of-use" className="mobile-footer-text">
                  Terms of Use
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
        <div
          class="whatsapp-icon"
          id="cta__btn"
          style={{ display: "block !important" }}
        >
          <div>
            <AnimateFooterPopup />
          </div>
        </div>
        {showScrollButton && (
          <div className="scroll-up" id="back-to-top">
            <span onClick={scrollToTop}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path
                  fill="#fff"
                  d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                />
              </svg>
            </span>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
