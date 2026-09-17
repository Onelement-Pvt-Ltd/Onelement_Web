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

  const subMenuDrawer = {
    enter: { height: "auto", overflow: "hidden" },
    exit: { height: 0, overflow: "hidden" }
  };

  return (
    <div>
      <div className="relative h-auto">
        <button
          className="relative z-[999] cursor-pointer rounded-md border-3 p-1.5 font-extrabold text-[#0B2440] hover:border-[#0B2440] hover:bg-[#0B2440] hover:text-white lg:hidden"
          onClick={toggleDrawer}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <X className="h-[17px] w-[17px]" />
          ) : (
            <Menu className="h-[17px] w-[17px] stroke-[4px]" />
          )}
        </button>

        {isOpen && (
          <div
            className="absolute left-0 top-0 z-[9999] h-screen w-full bg-black/70"
            onClick={toggleDrawer}
          />
        )}

        <motion.div
          className="fixed left-0 top-0 z-[10000] h-screen w-2/3 overflow-y-auto bg-[#0B2440] p-6 pb-20 text-white backdrop-blur-lg duration-300 ease-linear"
          initial={{ x: "50%" }}
          animate={{ x: isOpen ? "50%" : "200%" }}
        >
          <div className="flex justify-end">
            <button
              className="cursor-pointer p-1"
              onClick={toggleDrawer}
              aria-label="Close menu"
            >
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
                    className="flex cursor-pointer items-center justify-between p-3 hover:bg-white/10"
                    onClick={() => setClicked(isClicked ? null : i)}
                  >
                    <NavLink to={path} onClick={toggleDrawer} className="py-2 pr-7">
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
                      className="sub-menu-mobile"
                    >
                      {subMenu.map(({ name, path, icon: Icon }) => (
                        <NavLink
                          to={path}
                          key={name}
                          onClick={toggleDrawer}
                          className="sub-menu-mobile flex cursor-pointer items-center gap-x-3 bg-[#163B22] p-4 hover:bg-[#0B2440]"
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