import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./AnimateFooterPopup.scss";
import * as yup from "yup";
import { useFormik } from "formik";
import { axiosClient } from "../../utils/axiosClient";
import { imgMan } from "../assets";

const enquirySchema = yup.object({
  name: yup.string().required("Name is Required"),
  phone: yup.string().required("Phone Number Should be Valid"),
  city: yup.string().required("City is Required"),
});

const AnimateFooterPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showReferralInput, setShowReferralInput] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      city: "",
    },
    validationSchema: enquirySchema,
    onSubmit: async (values) => {
      try {
        await axiosClient.post("send-enquiry", values);
        setIsOpen(false);
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleReferralClick = () => {
    setShowReferralInput(true);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.lordicon.com/lordicon.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="modal-wrapper">
      <div className="whatsapp-icon">
        {" "}
        <div onClick={() => setIsOpen(true)}>
          <span class="whatsapp-icon-svg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-270 -250 988 912">
              <path
                fill="#fff"
                d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
              ></path>
            </svg>
          </span>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="modal-box"
          >
            <motion.div
              initial={{ scale: 0, rotate: "14.5deg" }}
              animate={{ scale: 1, rotate: "0deg" }}
              className="box-modal"
            >
              <div className="modal-content">
                <div className="modal-content-close-btn">
                  <span onClick={() => setIsOpen(false)}>
                    <lord-icon
                      src="https://cdn.lordicon.com/nqtddedc.json"
                      trigger="boomerang"
                      colors="primary:#000"
                      style={{ width: "30px", height: "30px" }}
                    ></lord-icon>
                  </span>
                </div>
                <div className="col">
                  <div>
                    <img
                      src={imgMan}
                      alt="DrinkPrime Salesperson"
                      width={122}
                      height={193}
                    />
                    <h2>
                      {" "}
                      Share your contact details
                      <br />
                      We'll reach out to you within 3 hours!
                    </h2>
                    <form onSubmit={formik.handleSubmit}>
                      <label htmlFor="fname">First name</label>
                      <input
                        type="text"
                        id="fname"
                        name="name"
                        className="star"
                        placeholder="Name"
                        value={formik.values.name}
                        onChange={formik.handleChange("name")}
                        onBlur={formik.handleBlur("name")}
                        required=""
                      />
                      <div className="error text-danger my-1">
                        {formik.touched.name && formik.errors.name}
                      </div>
                      <label htmlFor="pnumber">Phone number</label>
                      <input
                        type="number"
                        id="pnumber"
                        name="phone"
                        placeholder="Phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange("phone")}
                        onBlur={formik.handleBlur("phone")}
                        required=""
                      />
                      <div className="error">
                        {formik.touched.phone && formik.errors.phone}
                      </div>
                      <div style={{ marginBottom: "-2px" }}>
                        <select
                          id="country"
                          name="city"
                          value={formik.values.city}
                          onChange={formik.handleChange("city")}
                          onBlur={formik.handleBlur("city")}
                        >
                          <option value="" selected="">
                            City
                          </option>
                          <option value="Bengaluru">Bengaluru/Bangalore</option>
                          <option value="Hyderabad">Hyderabad</option>
                          <option value="Gurgaon">Gurgaon/Gurugram</option>
                          <option value="Noida">Noida/Greater Noida</option>
                          <option value="Delhi">Delhi/New Delhi</option>
                          <option value="Ghaziabad">Ghaziabad</option>
                          <option value="Faridabad">Faridabad</option>
                          <option value="Others">Others</option>
                        </select>
                        <div className="error" style={{ marginTop: "-10px" }}>
                          {formik.touched.city && formik.errors.city}
                        </div>
                      </div>
                      <p className="referral2" onClick={handleReferralClick}>
                        Referral Code+
                      </p>
                      {showReferralInput && (
                        <input
                          className="referral2text"
                          type="text"
                          placeholder="Referral / Coupon Code"
                          name="coupon"
                        />
                      )}
                      <p className="para">
                        Already a Blunatural customer?{" "}
                        <a href="/contact" target="_blank">
                          Click here
                        </a>{" "}
                        to contact our customer support team
                      </p>
                      <div className="submit">
                        <button type="submit" className="request-btn submit">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                  <p
                    class="para"
                    style={{ textAlign: "center", marginBottom: "-10px" }}
                  >
                    By creating an account on DrinkPrime, you agree to our{" "}
                    <a href="/terms-of-use" target="_blank">
                      Terms of Use.
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimateFooterPopup;
