import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const FrontendLayout = () => {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "70px" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default FrontendLayout;
