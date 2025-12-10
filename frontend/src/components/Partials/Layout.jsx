import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
// import scrollToTop from "./scrollToTop";

const Layout = () => {
//   scrollToTop();
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
      <Navbar />
        <Outlet key={location.pathname + location.search} /> {/* Renders the current route’s component */}
      <Footer />
      </main>
      {/* <div> hello </div> */}
    </div>
  );
};

export default Layout;
