import React, { useLayoutEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import Info from "./Navbar/Info";
// import scrollToTop from "./scrollToTop";

const Layout = () => {
//   scrollToTop();
// const[location,setLocation] = useState({});
const loc = ScrollToTop()
console.log(loc);
  return (
    <div className="min-h-screen rajdhani-medium flex flex-col ">
        {/* <Info /> */}

      <Navbar loc={loc} />
      <main className="grow">
        <Outlet key={location.pathname + location.search} /> {/* Renders the current route’s component */}
      </main>
      <Footer />
      {/* <div> hello </div> */}
    </div>
  );
};

export default Layout;
