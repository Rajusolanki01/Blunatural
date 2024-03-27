import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import * as yup from "yup";
import { useFormik } from "formik";
import { axiosClient } from "../../utils/axiosClient";
import "./EnquiryModal.scss";
import { imgGirl } from "../assets";

const enquirySchema = yup.object({
  name: yup.string().required("Name is Required"),
  phone: yup.string().required("Phone Number Should be Valid"),
  city: yup.string().required("City is Required"),
});
const EnquiryModal = () => {
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
        const response = await axiosClient.post("send-enquiry", values);
        console.log(response);
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
    <div className="Eqnuiry-wrapper">
      <div className="nav-btn">
        <div onClick={() => setIsOpen(true)} style={{ cursor: "pointer" }}>
          Book Now
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="enquiry-modal-box"
          >
            <motion.div
              initial={{ scale: 0, rotate: "14.5deg" }}
              animate={{ scale: 1, rotate: "0deg" }}
              className="enquiry-box-modal"
            >
              <div className="enquiry-modal-content">
                <div className="enquiry-modal-content-close-btn">
                  <span onClick={() => setIsOpen(false)}>
                    <lord-icon
                      src="https://cdn.lordicon.com/nqtddedc.json"
                      trigger="boomerang"
                      colors="primary:#000"
                      style={{ width: "30px", height: "30px" }}
                    ></lord-icon>
                  </span>
                </div>
                <div className="enquiry-col">
                  <div>
                    <img
                      src={imgGirl}
                      alt="DrinkPrime Salesperson"
                      width={122}
                      height={193}
                    />
                    <h2> Enter Your Contact Details</h2>
                    <p className="p-para">(Assured Delivery within 48 hours)</p>
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
                          <option value="" defaultChecked="">
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
                      <p className="enquiry-para">
                        Already a Blunatural customer?{" "}
                        <a href="/contact" target="_blank">
                          Click here
                        </a>{" "}
                        to contact our customer support team
                      </p>
                      <div className="enquiry-submit">
                        <button
                          type="submit"
                          className="enquiry-request-btn submit"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                  <p className="enquiry-para" style={{ textAlign: "center" }}>
                    By creating an account on Blunatural, you agree to our{" "}
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

export default EnquiryModal;
