import React, { useRef, useEffect } from "react";
import Logo from "../../../assets/logo.png";
import { useNavigate, NavLink } from "react-router-dom";
import { Menus } from "../utils/NavbarMenu";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { motion } from "framer-motion";
import Info from "./Info";


const Navbar = (loc) => {
 
  const infoRef = useRef(null);
  const headerRef = useRef(null);
  const infoHeightRef = useRef(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const measure = () => {
      const infoEl = infoRef.current;
      if (!infoEl) {
        infoHeightRef.current = 0;
        return;
      }
      // prefer offsetHeight for an integer pixel measurement
      infoHeightRef.current = infoEl.offsetHeight || 0;
      console.log(rafRef.current);
    };

    measure();
    window.addEventListener("resize", measure);

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const headerEl = headerRef.current;
        if (!headerEl) return;
        const scrollY = window.scrollY || window.pageYOffset || 0;
        const translate = Math.min(Math.max(scrollY, 0), infoHeightRef.current);
        // translate header up by translate px (negative Y)
        headerEl.style.transform = `translateY(-${translate}px)`;
        // hint for better rendering
        headerEl.style.willChange = "transform";
      });
    };

    // initialize in case the page is pre-scrolled
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      // cleanup inline styles
      const headerEl = headerRef.current;
      if (headerEl) {
        headerEl.style.transform = "";
        headerEl.style.willChange = "";
      }
    };
  }, []);

  return (
    <div className="max-w-full relative z-9999">
      {/* Info placeholder — keep it here (you can replace with <Info /> or leave empty). We measure its height. */}
      {/* If you want the original Info component rendered, uncomment the next line */}
      <div ref={infoRef}>
        <Info />
      </div>

      <header
        ref={headerRef}
        className="h-16 mx-auto text-[15px]  fixed  md:mt-[30.5px] z-99 inset-0 flex-center bg-[#ffffffb9] backdrop-blur-sm"
      >
        <nav className="px-3.5 flex-center-between   w-full max-w-full mx-2.5">
          <div className="flex-center gap-x-3 relative">
            <div className="flex-center">
              <NavLink to="/" className="  rounded-md  ">
                <img src={Logo} alt="" className="w-24 bg-blend-color-burn" />
              </NavLink>
            </div>
          </div>
          <div className="gap-x-1 flex lg:flex-center">
            <ul className="gap-x-2 mr-10 lg:flex lg:flex-center hidden ">
              {Menus.map((menu) => (
                <DesktopMenu menu={menu} loc={loc} key={menu.name} />
              ))}
            </ul>
            <div className="flex-center gap-x-5">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#0A2955] text-white px-4 py-1.5 rounded shadow-md hover:bg-[#0a346e] transition-all"
                // onClick={handleLogin}
              >
                <a  key="contactus" href="#contactus">Contact Us</a>
              </motion.button>

              {/* )} */}

              <div className="lg:hidden">
                <MobileMenu Menus={Menus} />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
