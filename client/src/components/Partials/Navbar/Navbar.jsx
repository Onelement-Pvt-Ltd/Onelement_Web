import { useEffect, useRef, useState } from "react";
import Logo from "../../../assets/Logo.png";
import { NavLink } from "react-router-dom";
import { Menus } from "../utils/NavbarMenu";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { motion, useScroll, useTransform } from "framer-motion";
import Info from "./Info";

const Navbar = ({ loc }) => {
  const infoRef = useRef(null);
  const [infoHeight, setInfoHeight] = useState(0);

  useEffect(() => {
    const measure = () => setInfoHeight(infoRef.current?.offsetHeight || 0);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, (value) =>
    -Math.min(Math.max(value, 0), infoHeight)
  );

  return (
    <div className="relative z-[9999] max-w-full">
      <div ref={infoRef}>
        <Info />
      </div>

      <motion.header
        style={{ y: headerY }}
        className="fixed inset-0 z-[99] mx-auto flex h-16 items-center bg-[#F6F8F6]/90 text-[15px] backdrop-blur-sm md:mt-[30.5px]"
      >
        <nav className="mx-2.5 flex w-full max-w-full items-center justify-between px-3.5">
          <div className="flex items-center gap-x-3">
            <NavLink to="/" className="rounded-md">
              <img src={Logo} alt="OEPL" className="w-24" />
            </NavLink>
          </div>

          <div className="flex gap-x-1 lg:items-center">
            <ul className="mr-10 hidden gap-x-2 lg:flex lg:items-center">
              {Menus.map((menu) => (
                <DesktopMenu menu={menu} key={menu.name} />
              ))}
            </ul>

            <div className="flex items-center gap-x-5">
              <motion.a
                href="#contactus"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                className="rounded bg-[#0B2440] px-4 py-1.5 text-white shadow-md transition-colors hover:bg-[#163B22]"
              >
                Contact Us
              </motion.a>

              <div className="lg:hidden">
                <MobileMenu Menus={Menus} />
              </div>
            </div>
          </div>
        </nav>
      </motion.header>
    </div>
  );
};

export default Navbar;