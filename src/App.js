import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";
import ContactUs from "./pages/Contact Us/ContactUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />=
          </Route>
          <Route path="/contact-us" element={<ContactUs />} />=
        </Routes>
      </BrowserRouter>
      <div>
        <Toaster
          position="top-center"
          expand={false}
          toastOptions={{
            style: {
              background: "white",
              width: "300px",
              left: "100px",
              fontSize: "14px",
            },
            className: "class",
          }}
        />
      </div>
    </>
  );
}

export default App;
