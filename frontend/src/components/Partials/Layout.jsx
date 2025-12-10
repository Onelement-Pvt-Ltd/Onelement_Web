import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
// import scrollToTop from "./scrollToTop";

const Layout = () => {
//   scrollToTop();
  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar />
      <main className="flex-grow">
        <Outlet key={location.pathname + location.search} /> {/* Renders the current route’s component */}
      </main>
      <Footer />
      {/* <div> hello </div> */}
    </div>
  );
};

export default Layout;
