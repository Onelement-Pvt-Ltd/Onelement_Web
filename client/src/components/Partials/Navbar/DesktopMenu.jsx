import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { NavLink,Link } from "react-router-dom";
import Info from "./Info";

const DesktopMenu = ({ menu,loc }) => {
  const [isHover, toggleHover] = useState(false);
  const toggleHoverMenu = () => {
    console.log(!isHover)
    toggleHover(!isHover);
  };
  const isActiveMenu = loc.pathname==menu.path;
  // console.log(loc.pathname)
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
      display: "block",
    },
    exit: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  const hasSubMenu = menu?.subMenu?.length;
  // console.log(menu);
  return (
    <div >


    <motion.li
      className="group/link  z-9999"
      onHoverStart={() => {
        toggleHoverMenu();
      }}
      onHoverEnd={toggleHoverMenu}
      key={menu.name}
    >
      <Link 
        to={menu.path}
        className=" flex-center z-9 h-16 text-[#0A2955] font-semibold gap-1 hover:text-[#0a346e] cursor-pointer px-3 "
      >
        <p
          className={`${
            !hasSubMenu ? "nav-underline" : "nav-underline"
          } text-[#0A2955] text-decoration-none font-semibold gap-1 hover:text-[#0a346e]`}
        >
          {menu.name}
        </p>
        {hasSubMenu && (
          <ChevronDown className="mt-[0.6px] group-hover/link:rotate-180 duration-200" />
        )}
      </Link>
      {hasSubMenu && (
        <motion.div
          className="sub-menu  text-[#0A2955] bg-gray-300 absolute  flex  w-auto z-20  shadow-lg"
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}
        >
          {/* <div
            className={`grid gap-2 ${
              menu.gridCols === 3
                ? "grid-cols-3"
                : menu.gridCols === 2
                ? "grid-cols-2"
                : "grid-cols-1"
            }`}
          > */}
          <div className="flex flex-col">
            {hasSubMenu &&
              menu.subMenu.map((submenu, i) => (
                  <Link to={submenu?.path} className=" hover:bg-gray-200 hover:text-[#1f7902]">
                <div
                  className="flex justify-center items-center px-3 h-12 min-w-30  cursor-pointer bg-opacity-30 "
                  key={i}
                >
                  {menu.gridCols > 1 && menu?.subMenuHeading?.[i] && (
                    <p className="text-sm mb-2 text-gray-700">
                      {menu?.subMenuHeading?.[i]}
                    </p>
                  )}
                  <div className=" group/menubox">
                    {/* <div className="bg-white/5 w-fit p-2 rounded-md group-hover/menubox:bg-white/90 group-hover/menubox:text-[#009ca6] duration-300">
                      {submenu.icon && <submenu.icon />}
                    </div> */}
                    <div>
                      <h6 className="font-semibold">{submenu.name}</h6>
                      <p className="text-sm text-gray-600">{submenu.desc}</p>
                    </div>
                  </div>
                </div>
                </Link>
              ))}
          </div>
        </motion.div>
      )}
    </motion.li>
        </div>
  );
};
export default DesktopMenu;
