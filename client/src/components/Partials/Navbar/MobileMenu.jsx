import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function MobileMenu({ Menus }) {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };
  // console.log(Menus)

  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };

  return (
    <div>
      <div className="realtive h-auto">
        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden z-999  relative text-[#0a2955] hover:bg-[#0a2955] hover:text-white hover:border-[#0a2955] cursor-pointer font-extrabold  p-1.5 border-3 rounded-md"
          onClick={toggleDrawer}
        >
          {isOpen ? (
            <X className="w-[17px] h-[17px] " />
          ) : (
            <Menu className="w-[17px] h-[17px] stroke-[4px]" />
          )}
        </button>

        {/* Overlay to prevent background elements from interfering */}
        {/* Overlay to prevent background elements from interfering */}
        {isOpen && (
          <div
            className="absolute top-0 left-0 w-full h-screen bg-black/70 z-9999"
            onClick={toggleDrawer}
          ></div>
        )}

        {/* Mobile Navigation Drawer */}
        <motion.div
          className="fixed top-0 h-screen left-0 w-2/3  bg-[#0a2955] backdrop-blur-lg text-white p-6  pb-20 z-9999 overflow-y-auto ease-linear   duration-300"
          initial={{ x: "50%" }}
          animate={{ x: isOpen ? "50%" : "200%" }}
        >
          <div className="flex justify-end">
            <button className="p-1 cursor-pointer" onClick={toggleDrawer}>
              <X size={28} />
            </button>
          </div>

          <ul className="mt-5">
            {Menus.map(({ name, path, subMenu }, i) => {
              const isClicked = clicked === i;
              const hasSubMenu = subMenu?.length;
             

              return (
                <li key={name} className="border-t-2 border-white/20">
                  <span
                    className="flex items-center justify-between p-3 hover:bg-white/10 cursor-pointer"
                    onClick={() => setClicked(isClicked ? null : i)}
                  >
                    <NavLink
                      to={path}
                      onClick={toggleDrawer}
                      className="pr-7 py-2"
                    >
                      {name}
                    </NavLink>
                    {hasSubMenu && (
                      <ChevronDown
                        className={`ml-auto transition-transform ${
                          isClicked ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </span>

                  {hasSubMenu && (
                    <motion.ul
                      initial="exit"
                      animate={isClicked ? "enter" : "exit"}
                      variants={subMenuDrawer}
                      className=" sub-menu-mobile"
                    >
                      {
                      subMenu.map(({ name, path, icon: Icon }) => (
                        <NavLink
                          to={path}
                          key={name}
                          onClick={toggleDrawer}
                          className={`flex p-4 items-center sub-menu-mobile bg-[#072651] hover:bg-[#06234b] gap-x-3 cursor-pointer`}
                        >
                          <Icon size={17} />
                          {name}
                        </NavLink>
                      ))}
                    </motion.ul>
                  )}
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
