import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const dropdownVariants = {
  hidden: { opacity: 0, y: 10, pointerEvents: "none" },
  visible: { opacity: 1, y: 0, pointerEvents: "auto", transition: { duration: 0.2 } }
};

const DesktopMenu = ({ menu }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const hasSubMenu = menu?.subMenu?.length > 0;

  const isActive =
    menu.path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(menu.path);

  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setOpen(false);
    }
  };

  return (
    <li
      className="relative flex h-16 items-center"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={handleBlur}
    >
      <Link
        to={menu.path}
        aria-haspopup={hasSubMenu || undefined}
        aria-expanded={hasSubMenu ? open : undefined}
        className={`group relative flex items-center gap-1 px-4 py-2 font-semibold transition ${
          isActive ? "text-[#163B22]" : "text-[#0B2440] hover:text-[#163B22]"
        }`}
      >
        {menu.name}
        {hasSubMenu && (
          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        )}
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute bottom-1 left-4 right-4 h-0.5 origin-left scale-x-0 bg-[#7BC96F] transition-transform duration-300 ${
            isActive ? "scale-x-100" : "group-hover:scale-x-100"
          }`}
        />
      </Link>

      {hasSubMenu && (
        <AnimatePresence>
          {open && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={dropdownVariants}
              className="absolute left-0 top-full z-[999] w-64 overflow-hidden rounded-b-xl border border-[#0B2440]/10 bg-white shadow-xl"
            >
              <div className="py-2">
                {menu.subMenu.map((submenu, index) => (
                  <Link
                    key={index}
                    to={`${menu.path}${submenu.path}`}
                    className="block px-5 py-3 transition hover:bg-[#F6F8F6] hover:text-[#163B22]"
                  >
                    <div className="flex flex-col">
                      <span className="font-medium">{submenu.name}</span>
                      {submenu.desc && (
                        <span className="mt-1 text-xs text-[#4B5563]">
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