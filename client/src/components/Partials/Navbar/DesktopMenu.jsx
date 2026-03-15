import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const DesktopMenu = ({ menu }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const hasSubMenu = menu?.subMenu?.length > 0;

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: 10,
      pointerEvents: "none"
    },
    visible: {
      opacity: 1,
      y: 0,
      pointerEvents: "auto",
      transition: { duration: 0.2 }
    }
  };

  const isActive = location.pathname.startsWith(menu.path);

  return (
    <li
      className="relative h-16 flex items-center"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Main Menu Link */}

      <Link
        to={menu.path}
        className={`flex items-center gap-1 font-semibold px-4 transition
        ${isActive ? "text-[#1d6903]" : "text-[#0A2955] hover:text-[#1d6903]"}`}
      >
        {menu.name}

        {hasSubMenu && (
          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        )}
      </Link>

      {/* Dropdown */}

      {hasSubMenu && (
        <AnimatePresence>
          {open && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={dropdownVariants}
              className="
                absolute 
                left-0 
                top-full 
                mt-0
                w-64
                bg-white
                rounded-xl
                shadow-xl
                border
                border-gray-200
                overflow-hidden
                z-[999]
              "
            >
              <div className="py-2">

                {menu.subMenu.map((submenu, index) => (
                  <Link
                    key={index}
                    to={`${menu.path}${submenu.path}`}
                    className="
                      block
                      px-5
                      py-3
                      transition
                      hover:bg-gray-50
                      hover:text-[#1d6903]
                    "
                  >
                    <div className="flex flex-col">

                      <span className="font-medium">
                        {submenu.name}
                      </span>

                      {submenu.desc && (
                        <span className="text-xs text-gray-500 mt-1">
                          {submenu.desc}
                        </span>
                      )}

                    </div>
                  </Link>
                ))}

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </li>
  );
};

export default DesktopMenu;