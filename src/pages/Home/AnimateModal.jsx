import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./AnimateModal.scss";
import { RO1, RO2, RO3, RO4, modalbg1 } from "../../components/assets";

const AnimateModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModalAtIndex = (index) => {
    setSelectedImageIndex(index);
    setIsOpen(true);
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
      <div className="features-imgs">
        <div
          onClick={() => {
            setIsOpen(true);
            openModalAtIndex(0);
          }}
        >
          <img src={RO1} alt="RO Images" className="sediment" />
        </div>
        <div
          onClick={() => {
            setIsOpen(true);
            openModalAtIndex(3);
          }}
        >
          <img src={RO3} alt="RO Images" className="carbon" />
        </div>
        <div
          onClick={() => {
            setIsOpen(true);
            openModalAtIndex(2);
          }}
        >
          <img src={RO4} alt="RO Images" className="romembrane" />
        </div>
        <div
          onClick={() => {
            setIsOpen(true);
            openModalAtIndex(1);
          }}
        >
          <img src={RO2} alt="RO Images" className="silver" />
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedIndex={selectedImageIndex}
      />
    </div>
  );
};

const Modal = ({ isOpen, setIsOpen, selectedIndex }) => {
  const modalDataArray = [
    {
      title: "What is",
      subtitle: "Sediment filter",
      description:
        "We use a food-grade polypropylene yarn wound multi-layer sediment filter with high dust holding capacity. This is different from the other sediment filters which are low-cost melt blown cartridges. They have low dust holding capacity as well. We use a custom-made sediment filter that will remove even the smallest suspended matter so that output water is crystal clear and pure.",
      imageLabel: "Input water quality",
      imageUrl: modalbg1,
      imageAlt: "Ro-images",
      processLabel: "Blunatural filtration process",
      processDescription:
        "Food-Grade Polypropylene Yarn- Wound Sediment Filter + Coconut Shell Activated Carbon Block + Low TDS Reduction RO Membrane for Chemical & Microbial Contaminant Removal + Bacteriostatic Silver Impregnated Post Carbon Filter",
    },

    {
      title: "What is",
      subtitle: "Carbon silver activated filter",
      description:
        "The post carbon cartridge contains bacteriostatic silver impregnated with activated carbon which will enhance the taste of water and also prevents the growth of microorganisms in the filter. This filter polishes the post RO water and provides a better and natural taste experience.",
      imageLabel: "Input water quality",
      imageUrl: modalbg1,
      imageAlt: "Ro-images",
      processLabel: "Blunatural filtration process",
      processDescription:
        "100% Cotton Yarn Sediment Filter + Pre Carbon Block with Organic Activated Charcoal + Chemical Free RO Membrane with Germs Remover + Silver Impregnated Post Carbon Filter",
    },

    {
      title: "What is",
      subtitle: "RO Membrane",
      description:
        "The RO membrane removes all impurities from water including salt, bacteria, lead, and chromium. We use high quality and Chlorine resistant reverse osmosis polyamide membrane which will reduce the chemical and microbiological contaminants to acceptable limits specified by BIS as per IS: 10500 – 2012 standard.",
      imageLabel: "Input water quality",
      imageUrl: modalbg1,
      imageAlt: "Ro-images",
      processLabel: "Blunatural filtration process",
      processDescription:
        "Food-Grade Polypropylene Yarn-Wound Sediment Filter + CoconutShell Activated Carbon Block + LowTDS Reduction RO Membrane forChemical & Microbial Contaminant Removal + Bacteriostatic Silver Impregnated Post Carbon Filter",
    },

    {
      title: "What is",
      subtitle: "Carbon filter",
      description:
        "Pre carbon filters remove (by adsorption principle) colour, bad odour, bad taste, and organic impurities, which includes pesticides, insecticides, herbicides, chlorine, chlorination by-products (Cancer causing), etc. from the water. The filters are made up of food-grade natural coconut shell activated carbon with a high iodine value. We use custom-made bacteriostatic, activated carbon which had undergone rigorous quality tests.",
      imageLabel: "Input water quality",
      imageUrl: modalbg1,
      imageAlt: "Ro-images",
      processLabel: "Blunatural filtration process",
      processDescription:
        "Food-Grade Polypropylene Yarn-Wound Sediment Filter +  Coconut Shell Activated Carbon Block + Low TDS Reduction RO Membrane for Chemical & Microbial Contaminant Removal + Bacteriostatic Silver Impregnated Post Carbon Filter",
    },
  ];
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="modal"
        >
          <motion.div
            initial={{ scale: 0, rotate: "14.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            className="modal-box"
            style={{ height: "100vh" }}
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
              <p className="modal-content-h1">
                {modalDataArray[selectedIndex].title}
              </p>
              <p className="modal-content-h2">
                {modalDataArray[selectedIndex].subtitle}
              </p>
              <p className="modal-content-h3">
                {modalDataArray[selectedIndex].description}
              </p>
              <div className="modal-content-h4">
                <div className="modal-content-h4-img">
                  <span style={{ fontSize: "1.413vw", fontWeight: "700" }}>
                    {modalDataArray[selectedIndex].imageLabel}
                  </span>
                  <img
                    src={modalDataArray[selectedIndex].imageUrl}
                    alt={modalDataArray[selectedIndex].imageAlt}
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="modal-content-h4-text">
                  <span style={{ fontSize: "1.413vw", fontWeight: "700" }}>
                    {modalDataArray[selectedIndex].processLabel}
                  </span>
                  <p style={{ fontSize: "1.13vw" }}>
                    {modalDataArray[selectedIndex].processDescription}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimateModal;
