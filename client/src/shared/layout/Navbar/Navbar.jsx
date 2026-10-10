import Logo from "../../../assets/Logo.png";
import { NavLink } from "react-router-dom";
import { Menus } from "./navigationData";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.header className="fixed inset-x-0 top-0 z-[9999] mx-auto flex h-16 items-center bg-[#F6F8F6]/90 text-[15px] shadow-sm backdrop-blur-sm">
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
  );
};

export default Navbar;
