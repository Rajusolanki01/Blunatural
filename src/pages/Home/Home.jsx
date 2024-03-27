import React, { useState } from "react";
import "./Home.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  avatarImg,
  avatarImg1,
  avatarImg2,
  avatarImg3,
  dropCan,
  dropCross,
  dropTick,
  featureDesk,
  homeBannerMobile1,
  homeBannerMobile2,
  homeBannerMobile3,
  homepageBanner,
  homepageBanner1,
  homepageBanner2,
  listItem,
  plasticBottel,
  purifier,
  purifierHome,
  ui1,
  ui2,
  ui3,
  waterPurifier,
  ylg,
} from "../../components/assets";
import { Link } from "react-router-dom";
import AnimateModal from "./AnimateModal";
import EnquiryModal from "../../components/modal/EnquiryModal";

const Home = () => {
  const [showWaterCane, setShowWaterCane] = useState(true);

  const toggleComparison = () => {
    setShowWaterCane(!showWaterCane);
  };

  const setting = {
    autoPlay: true,
    showArrows: false,
    showStatus: false,
    showThumbs: false,
    infiniteLoop: true,
    stopOnHover: true,
    interval: 2000,
    swipeable: true,
    emulateTouch: true,
    dynamicHeight: true,
    showIndicators: false,
  };

  const settings = {
    autoPlay: true,
    showStatus: false,
    showArrows: false,
    infiniteLoop: true,
    swipeable: true,
    stopOnHover: true,
    showThumbs: false,
    interval: 6000,
  };

  return (
    <>
      <section>
        <div className="Hero">
          <div className="Section-1">
            <div className="carousel-desktop">
              <Carousel {...setting} className="carosuel">
                <div>
                  <img src={homepageBanner} alt="Home-Banner" />
                </div>
                <div>
                  <img src={homepageBanner1} alt="Home-Banner" />
                </div>
                <div>
                  <img src={homepageBanner2} alt="Home-Banner" />
                </div>
              </Carousel>
            </div>
            <div className="carousel-mobile">
              <Carousel {...setting}>
                <div>
                  <img src={homeBannerMobile1} alt="Home-Banner" />
                </div>
                <div>
                  <img src={homeBannerMobile2} alt="Home-Banner" />
                </div>
                <div>
                  <img src={homeBannerMobile3} alt="Home-Banner" />
                </div>
              </Carousel>
            </div>
            <div className="box1-click">
              <button className="btn1">
                <div>
                  <EnquiryModal />
                </div>
              </button>
            </div>
          </div>
          <div className="Section-2">
            <div className="section-box">
              <div className="section-img">
                <div className="img-wrapper img">
                  <img src={ui1} alt="Img-wrap" />
                </div>
                <div className="img-text">
                  <span>Trusted by</span>
                  <span>1 Lakh+ users</span>
                </div>
              </div>
              <div className="section-img">
                <div className="img-wrapper img">
                  <img src={ui2} alt="Img-wrap" />
                </div>
                <div className="img-text">
                  <span>Assured 48-hours</span>
                  <span>installation</span>
                </div>
              </div>
              <div className="section-img">
                <div className="img-wrapper img">
                  <img src={ui3} alt="Img-wrap" />
                </div>
                <div className="img-text">
                  <span>Reviewed by</span>
                  <span>17K+ users</span>
                </div>
              </div>
            </div>
          </div>
          <div className="" style={{ position: "relative" }}>
            <div className="Section-3">
              <div className="section-3-text">
                <div className="section-3-heading">
                  <h1 className="heading-text">
                    "The Blunatural"{" "}
                    <span className="heading-span">Advantage</span>
                  </h1>
                </div>
                <div className="section-3-content-text">
                  {" "}
                  <span>Most of the water from plastic cans isn't fit for</span>
                  <span>
                    drinking and existing water-purifiers under-purify
                  </span>
                  <span>or over-purify water. Since every area has a</span>
                  <span>different water quality, we personalize your </span>
                  <span>
                    DrinkPrime based on the purification level required.
                  </span>
                </div>
                <div className="section-3-content-phone">
                  <span>
                    Most of the water from plastic cans isn't fit for{" "}
                  </span>
                  <span>
                    drinking and existing water-purifiers under-purify{" "}
                  </span>
                  <span>or over-purify water. Since every area has a</span>
                  <span>different water quality, we personalize your </span>
                  <span>
                    DrinkPrime based on the purification level required.
                  </span>
                </div>
                <div className="section-3-btn">
                  <Link to="/" className="sec-btn">
                    Know More
                  </Link>
                </div>
              </div>
              <div className="section-3-features">
                <div className="features-text">
                  <span>Custom fitted </span>
                  <span> filters to give</span>
                  <span>you the purest </span>
                  <span> water.</span>
                </div>
                <div className="features-imgs">
                  <div className="">
                    <AnimateModal />
                  </div>
                </div>
              </div>
            </div>
            <div className="section-4">
              <div className="section4-list">
                <div className="section4-list-item">
                  <img src={listItem} alt="Green-Tick-Icon" />
                  <div className="section4-list-text">
                    <span>No upfront costs</span>
                    <span>on owning water purifier!</span>
                  </div>
                </div>
                <div className="section4-list-item">
                  <img src={listItem} alt="Green-Tick-Icon" />
                  <div className="section4-list-text">
                    <span>No expensive</span>
                    <span>water cans</span>
                  </div>
                </div>
                <div className="section4-list-item">
                  <img src={listItem} alt="Green-Tick-Icon" />
                  <div className="section4-list-text">
                    <span>Safe and clean</span>
                    <span>drinking water!</span>
                  </div>
                </div>
              </div>
              <div className="section-4-image">
                <s></s>
                <s></s>
                <s></s>
                <s></s>
                <div className="slider">
                  <div>
                    <div
                      className="slider-img"
                      style={{
                        transform: "scale(0.7)",
                        translate: "(0px, 110px)",
                      }}
                    >
                      <img src={waterPurifier} alt="Water-Purifier" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="section4-list2">
                <div className="section4-list2-item ">
                  <img src={listItem} alt="Green-Tick" />
                  <div className>
                    <span>ZERO upfront</span>
                    <span>investments</span>
                  </div>
                </div>
                <div className="section4-list2-item ">
                  <img src={listItem} alt="Green-Tick" />
                  <div>
                    <span>ZERO delivery</span>
                    <span>&amp; installation cost</span>
                  </div>
                </div>
                <div
                  className="section4-list2-item"
                  style={{ marginBottom: "18px" }}
                >
                  <img src={listItem} alt="Green-Tick" />
                  <div>
                    <span>ZERO lifetime</span>
                    <span>maintenance cost</span>
                  </div>
                </div>
                <div className="section4-list2-item">
                  <img src={listItem} alt="Green-Tick" />
                  <div className="section4-list2-icon">
                    <span> ZERO relocation cost</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="section section-table">
            <div className="row row-1 mobile-img">
              <div className="col col-m-12 col-t-6 col-a">
                <button
                  id="btn-1"
                  className={`btn active btn-compare ${
                    showWaterCane ? "action" : " "
                  }`}
                  onClick={toggleComparison}
                >
                  DRINKPRIME VS <br />
                  WATER CANS
                </button>
              </div>
              <div className="col col-m-12 col-t-6 col-b">
                <button
                  id="btn-2"
                  className={`btn-2 btn-compare ${
                    !showWaterCane ? "show" : " "
                  }`}
                  onClick={toggleComparison}
                >
                  DRINKPRIME VS
                  <br />
                  OTHER PURIFIER
                </button>
              </div>
            </div>
            <div className={`row row-2 ${showWaterCane ? "" : "compare"}`}>
              <div className="col col-d-3 col-m-6 col-a table-col">
                <div className="comparisions-container">
                  <div className="image_text-container">
                    <h2>
                      CHOOSE WHAT'S
                      <br /> RIGHT FOR YOU
                    </h2>
                  </div>
                  <p className="gray">WATER QUALITY</p>
                  <p>PURCHASE COST</p>
                  <p className="gray">INSTALLATION COST</p>
                  <p>MAINTENANCE COST</p>
                  <p className="gray">COST PER LITER</p>
                  <p>INPUT WATER QUALITY CHECK</p>
                  <p className="gray"> SERVICE SCHEDULE</p>
                  <div className="" />
                </div>
              </div>
              <div
                id="water-cane"
                className={`col col-d-3 col-m-6 col-b table-col ${
                  showWaterCane ? "action" : " "
                }`}
              >
                <div className="comparisions-container">
                  <div className="image_text-container">
                    <img
                      className="water-cane-img"
                      src={plasticBottel}
                      alt="Blue Plastic Water Can"
                      width={179}
                      height={225}
                      loading="lazy"
                    />
                    <p className="bold-text">WATER CANS</p>
                  </div>
                  <p className="gray"> Poor Quality Water</p>
                  <p>NA</p>
                  <p className="gray">NA</p>
                  <p> NA</p>
                  <p className="gray">₹2 - ₹4 per litre</p>
                  <p> NA</p>
                  <p className="gray">NA</p>
                  <p />
                </div>
              </div>
              <div className="col col-d-3 col-m-6 col-c hidden-row table-col">
                <div className="comparisions-container">
                  <div className="image_text-container">
                    <img
                      loading="lazy"
                      src={purifierHome}
                      alt="RO Water Purifier on Rent- DrinkPrimee"
                      width={164}
                      height={215}
                      style={{ width: 140 }}
                    />
                    <p className="bold-text white">DRINKPRIME</p>
                  </div>
                  <p className="gray white">Perfectly purified water</p>
                  <p className="white">Zero purchase cost</p>
                  <p className="gray white">Zero installation cost</p>
                  <p className="white">Zero maintenance cost</p>
                  <p className="gray white">₹1/litre*</p>
                  <p className="white">Customisation as per Input Water</p>
                  <p className="gray white">
                    Periodically schedule maintenance
                  </p>
                  <p />
                </div>
              </div>
              <div
                id="other-purifier"
                className={`col col-d-3 col-m-6 col-d table-col ${
                  !showWaterCane ? "show" : " "
                }`}
              >
                <div className="comparisions-container">
                  <div
                    className="image_text-container"
                    style={{ width: 140, margin: "auto" }}
                  >
                    <img
                      loading="lazy"
                      src={purifier}
                      alt="Water purifier comparison"
                      width={164}
                      height={220}
                      style={{ width: 140 }}
                    />
                    <p className="bold-text">OTHER PURIFIER</p>
                  </div>
                  <p className="gray">Under-purified or over-purified water</p>
                  <p>₹20,000+ purchase cost</p>
                  <p className="gray">Varying installation cost</p>
                  <p>₹4000 - ₹5000 annually</p>
                  <p className="gray">₹3 - ₹5/litre</p>
                  <p>NA</p>
                  <p className="gray">Manually raise request</p>
                  <p />
                </div>
              </div>
            </div>
          </section>
          <div className="section-5">
            <div className="section5-text">
              <span className="section5-text-h1">
                Our water-wellness community
              </span>
              <span className="section5-text-h2">
                More than 1,00,000 people choose{" "}
              </span>
              <span className="section5-text-h2"> us for their homes</span>
            </div>
            <div className="section5-images">
              <div>
                <img src={avatarImg} alt="Happy customer" />
              </div>
              <div>
                <img src={avatarImg1} alt="Satisfied Consumer" />
              </div>
              <div>
                <img src={avatarImg2} alt="Satisfied Consumer" />
              </div>
              <div>
                <img src={avatarImg3} alt="Satisfied Consumer" />
              </div>
            </div>
            <div className="section5-text2">
              <span className="section5-text2-h1">
                Be a part of the water-wellness wave
              </span>
              <div className="section5-text2-para">
                <div className="section5-text2-para-p1">
                  <span>Netizens are waking up to a new, advanced, and</span>
                  <span>
                    economic way of drinking the purest water at their
                  </span>
                  <span>
                    home. They understand the impact water can have on
                  </span>
                  <span>
                    our health and environment and are joining hands with
                  </span>
                  <span>
                    DrinkPrime into the era of water-wellness for everyone.
                  </span>
                </div>
                <Link className="section5-text2-para-p2" to="/">
                  Here's what some of us have to say
                </Link>
              </div>
            </div>
            <div className="animate-caro">
              <s id="s1"></s>
              <s id="s2"></s>
              <s id="s3"></s>
              <s id="s4"></s>
              <div className="caro-slider" style={{ marginTop: "40px" }}>
                <Carousel {...settings}>
                  <div className="test-wrapper fade" id="s11">
                    <div className="slider-img">
                      <div className="intro">
                        <div>
                          <img
                            style={{ borderRadius: "40px", height: "6vw" }}
                            src={avatarImg}
                            alt="DrinkPrime Subscriber- Aparna Pais"
                          />
                        </div>
                        <div className="intro-head">
                          <span className="name">Aparrna Pais</span>
                        </div>
                      </div>
                      <div className="testimonial">
                        <span>What excited me was the DrinkPrime</span>
                        <span>mobile app and the different</span>
                        <span>subscription plans you get to choose</span>
                        <span>from. The customer support team is very</span>
                        <span>supportive and responsive.</span>
                      </div>
                    </div>
                  </div>
                  <div className="test-wrapper fade" id="s21">
                    <div className="slider-img">
                      <div className="intro">
                        <div>
                          <img
                            style={{ borderRadius: "40px", height: "6vw" }}
                            src={avatarImg1}
                            alt="DrinkPrime Subscriber- Saharsh"
                          />
                        </div>
                        <div className="intro-head">
                          <span className="name">Saharsh</span>
                        </div>
                      </div>
                      <div className="testimonial">
                        <span>If you don’t want to buy a water purifier,</span>
                        <span> DrinkPrime is the best option.</span>
                        <span> I referred DrinkPrime to a few of my </span>{" "}
                        <span>friends who moved to Bengaluru and they </span>{" "}
                        <span>are very happy with the service.</span>
                      </div>
                    </div>
                  </div>
                  <div className="test-wrapper fade" id="s31">
                    <div className="slider-img">
                      <div className="intro">
                        <div>
                          <img
                            style={{ borderRadius: "40px", height: "6vw" }}
                            src={avatarImg2}
                            alt="DrinkPrime Subscriber- Charu Agarwal"
                          />
                        </div>
                        <div className="intro-head">
                          <span className="name">Charu Agarwal</span>
                        </div>
                      </div>
                      <div className="testimonial">
                        <span>
                          When our kids started having stomach problems, we
                          realized that can water is not trustworthy. Once we
                          started using DrinkPrime, the problems have reduced
                          and we don’t have to run to the doctors anymore
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="test-wrapper fade" id="s41">
                    <div className="slider-img">
                      <div className="intro">
                        <div>
                          <img
                            style={{ borderRadius: "40px", height: "6vw" }}
                            src={avatarImg3}
                            alt="DrinkPrime Subscriber- Anuj Ranjan"
                          />
                        </div>
                        <div className="intro-head">
                          <span className="name">Anuj Ranjan</span>
                        </div>
                      </div>
                      <div className="testimonial">
                        <span>
                          We use DrinkPrime water for drinking, cooking and
                          washing vegetables. The water quality is excellent and
                          they offer prompt support. I have never faced any
                          problems with DrinkPrime.
                        </span>
                      </div>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
          <section className="sec-7">
            <div className="sec-7_main">
              <div className="sec7-col-a">
                <div className="part1">
                  <p>Why choose us?</p>
                  <h2>
                    <span style={{ color: "#4548B8" }}>A Trusted Name</span>
                    <span> In The Water </span>
                    <span>Purification Industry</span>
                  </h2>
                  <h5>
                    We provide a state-of-the-art RO system that is custom-built
                    with filters based on the area’s water quality to ensure you
                    and your family get clean, safe, and healthy drinking water,
                    24x7!
                  </h5>
                  <a href="/">
                    {" "}
                    <button
                      className="offeringsBtn"
                      onclick="window.pushDataLayer('w_view_offerings_clicked')"
                    >
                      View our offerings
                    </button>
                  </a>
                </div>
                <div className="part2">
                  <img
                    className="mob"
                    src={featureDesk}
                    alt="5 stage filtration,maximum water purity, chlorine free water"
                  />
                  <img
                    className="desk"
                    src={featureDesk}
                    alt="5 stage filtration,maximum water purity, chlorine free water"
                  />
                </div>
              </div>
              <div className="sec7-col-b">
                <div className="part3">
                  <h2>Your water wellness coach that</h2>
                  <p style={{ fontFamily: '"Rochester", cursive' }}>
                    helps you save more
                  </p>
                </div>
                <div className="part4 part4-web">
                  <div className="tab_info">
                    <img src={dropCan} alt="20 Liter water can" />
                    <h4>
                      No dependency on unreliable <br /> and unhygienic water
                      cans
                    </h4>
                  </div>
                  <div className="tab_info">
                    <img src={dropTick} alt="Water Droplet with rupee symbol" />
                    <h4>
                      No expenses that disrupt <br />
                      your monthly budget
                    </h4>
                  </div>
                  <div className="tab_info">
                    <img src={dropCross} alt="Under purified water" />
                    <h4>
                      No more under-purified or
                      <br />
                      over-purified drinking water
                    </h4>
                  </div>
                </div>
                <div className="part4 part4-phone">
                  <Carousel {...settings}>
                    <div className="tab_info tab_info-phone fadee">
                      <img
                        src={dropCan}
                        alt="20 Liter water can"
                        style={{ width: "25px", marginLeft: "30px" }}
                      />
                      <h4
                        style={{
                          fontSize: "2.5vw",
                          lineHeight: "3vw",
                          width: "100%",
                          display: "flex",
                          gap: "20px",
                          marginLeft: "1px",
                        }}
                      >
                        No dependency on unreliable <br /> and unhygienic water
                        cans
                      </h4>
                    </div>
                    <div className="tab_info tab_info-phone">
                      <img
                        src={dropTick}
                        alt="Water Droplet with rupee symbol"
                        style={{ width: "25px", marginLeft: "30px" }}
                      />
                      <h4
                        style={{
                          fontSize: "2.5vw",
                          lineHeight: "3vw",
                          width: "100%",
                          display: "flex",
                          gap: "20px",
                          marginLeft: "1px",
                        }}
                      >
                        No expenses that disrupt <br />
                        your monthly budget
                      </h4>
                    </div>
                    <div className="tab_info tab_info-phone fadee">
                      <img
                        src={dropCross}
                        alt="Over purified water"
                        style={{ width: "25px", marginLeft: "30px" }}
                      />
                      <h4
                        style={{
                          fontSize: "2.5vw",
                          lineHeight: "3vw",
                          width: "100%",
                          display: "flex",
                          gap: "20px",
                          marginLeft: "1px",
                        }}
                      >
                        No more under-purified or
                        <br />
                        over-purified drinking water
                      </h4>
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </section>

          <div className="section-content">
            <p>
              When it comes to ensuring clean, safe, and healthy drinking water,
              the DrinkPrime RO water purifier emerges as a game-changer when
              compared to other RO water purifiers in the market. Since day one,
              it has been on a mission to redefine the experience of accessing
              purified water and making it a hassle-free experience. When you
              subscribe to DrinkPrime, you not only gain access to cutting-edge
              water purification technology but also enjoy an array of services
              that include free delivery, installation, maintenance, filter
              changes, and relocation. Their team of experts ensures that the
              water purifier is seamlessly set up in your home and consistently
              maintained, providing you with peace of mind from the very
              beginning.
            </p>

            <p>
              One remarkable feature of DrinkPrime is its customization
              approach. The RO water purifier is custom-built with filters
              tailored to the unique water quality of your area. This
              customisation ensures that you receive perfectly purified water,
              striking the ideal balance between over-purification and
              under-purification. The result is drinking water that is 100&amp;
              safe, refreshing, and clean, neither overpurified nor
              under-purified.
            </p>

            <p>
              The best part? The subscription plan for the DrinkPrime RO water
              purifier starts at just Rs 333, making it not only a convenient
              but also a highly cost-effective solution. You can choose from a
              variety of plans including solo, couple, family, and even
              unlimited! This is a great option for young couples living on
              rent, small families, and bachelors who have to frequently move to
              cities for work. With DrinkPrime, the journey to clean and safe
              drinking water becomes an effortless and budget-friendly
              experience.
            </p>
          </div>
          <section className="section-8">
            <div className="section-8-content">
              <h2>Book a 7-day risk free trial</h2>
              <p>Speak to a water-wellness expert</p>
              <div className="section_form" action="">
                <div className="inputControl">
                  <input type="text" name="name" placeholder="Name" />
                </div>
                <div className="inputControl">
                  <input type="email" name="email" placeholder="Email ID" />
                </div>
                <div className="inputControl">
                  <input
                    type="phone"
                    name="phone"
                    placeholder="Mobile number"
                  />
                </div>
                <div className="submitSuccess">
                  <button type="button" className="request-btn submit">
                    Submit{" "}
                  </button>
                </div>
              </div>
              <div className="expertImage">
                <img
                  src={ylg}
                  alt="DrinkPrime person with glass of water in hand"
                />
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Home;
