import React from "react";
import "./ContactUs.scss";
import { Link } from "react-router-dom";
import { blunaturalLogo, callService, callSvg } from "../../components/assets";

const ContactUs = () => {
  return (
    <div className="Contact-Section">
      <header>
        {" "}
        <div className="top-bar">
          <div className="container">
            {/* <!-- Logo container--> */}
            <div className="logo-container">
              <Link className="logo" to="/">
                <img
                  className="img-logoMobile"
                  src={blunaturalLogo}
                  height="26"
                  alt="DrinkPrime Logo White"
                />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section>
        <div className="main-box">
          <div className="sticky-notice">
            <img src={callSvg} alt="callicon" className="callIcon" />
            <div className="sticky-notice-text">
              To contact support, please call us on{" "}
              <a href="tel:+917599666612" className="stick-notice-bold-text">
                {" "}
                759-966-6612
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="contact-us-hero">
          <div className="bg-image-box">
            <img src={callService} alt="contact" className="bg-image" />
          </div>
          <div className="form-box">
            <div className="form">
              <form>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="form-control form-input"
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Email Id"
                  className="form-control form-input"
                />
                <input
                  type="number"
                  name="phone"
                  onkeypress="return event.keyCode === 8 || event.keyCode >= 48 && event.charCode <= 57 && event.target.value.length <= 9 "
                  placeholder="Mobile"
                  className="form-control form-input"
                />
                <select
                  className="form-control form-input"
                  name="cf_issue_type"
                >
                  <option value="" disabled="" selected="">
                    Issue Type
                  </option>
                  <option value="Referral/Review Benefits">
                    Referral/Review Benefits
                  </option>
                  <option value="Leakage">Leakage</option>
                  <option value="Not Working">Not Working</option>
                  <option value="Sync Issue">Sync Issue</option>
                  <option value="Relocation">Relocation</option>
                  <option value="Uninstallation">Uninstallation</option>
                  <option value="Payments">Payments</option>
                  <option value="Taste Issue">Taste Issue</option>
                  <option value="Plan Change - Upgrade">
                    Plan Change - Upgrade
                  </option>
                  <option value="Plan Change - Downgrade">
                    Plan Change - Downgrade
                  </option>
                  <option value="Invoice Request">Invoice Request</option>
                  <option value="Delay In General Service">
                    Delay In General Service
                  </option>
                  <option value="Unable To Recharge Via App">
                    Unable To Recharge Via App
                  </option>
                </select>
                <textarea
                  name="desc"
                  placeholder="Description"
                  className="form-control form-input form-desc"
                  defaultValue={""}
                />
                <button type="button" className="request-btn submit btn-form">
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer">
          <div className="container">
            <div className="row justify-content-between">
              <div className=" col-12">
                <div className="flex-column">
                  <a className="footer-imgLink" href="/">
                    <img
                      src={blunaturalLogo}
                      alt="Blunatural Logo White"
                      className="footer-logo-img"
                    />
                  </a>
                  <p>
                    <br />
                    #9/A, Chukki Complex,
                    <br />
                    19th Main Rd,Sector 3, HSR Layout,
                    <br />
                    Bengaluru, Karnataka 560102
                  </p>
                  <ul className="appLinks">
                    <li>
                      <Link
                        href="https://play.google.com/store/apps/details?id=waterwala.com.prime&hl=en"
                        target="_blank"
                      >
                        <img
                          src="https://d215djazwhhd02.cloudfront.net/images_dp/googleplay.webp"
                          alt="Blunatural Google Play"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://apps.apple.com/in/app/Blunatural/id1358111884"
                        target="_blank"
                      >
                        <img
                          src="https://d215djazwhhd02.cloudfront.net/images_dp/appstore.webp"
                          alt="Blunatural appstore"
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-sm-12 col-md-3 col-6">
                <div className="footer-column2">
                  <ul>
                    <li>
                      <a href="/about" className="">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="/water_purifier_product" className="">
                        Product
                      </a>
                    </li>
                    <li>
                      <a href="/water_purifier_subscription" className="">
                        How to Subscribe?
                      </a>
                    </li>
                    <li>
                      <a href="/refer_earn">Referral</a>
                    </li>
                    <li>
                      <a href="/careers" className="">
                        Careers
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-sm-12 col-md-3 col-6">
                <div className="footer-column2">
                  <ul>
                    <li>
                      <a href="/terms-of-use" className="">
                        Terms Of Service
                      </a>
                    </li>
                    <li>
                      <a href="/privacypolicy" className="">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="/water_purifier_faq" className="">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a href="/press" className="">
                        News
                      </a>
                    </li>
                    <li>
                      <a href="/contact" className="">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <section>
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="text-center">
                  © 2024 Copyright. All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
