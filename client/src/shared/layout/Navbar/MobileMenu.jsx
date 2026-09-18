import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { createPortal } from "react-dom";
import { NavLink, useLocation } from "react-router-dom";

const resolveSubmenuPath = (parentPath, childPath) =>
  childPath.startsWith(parentPath) ? childPath : `${parentPath}${childPath}`;

export default function MobileMenu({ Menus }) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);
  const location = useLocation();
  const reduceMotion = useReducedMotion();

  const closeDrawer = () => {
    setIsOpen(false);
    setExpandedMenu(null);
  };

  const toggleDrawer = () => {
    setIsOpen((current) => !current);
    setExpandedMenu(null);
  };

  useEffect(() => {
    if (!isOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event) => event.key === "Escape" && closeDrawer();
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const drawer = (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            aria-label="Close navigation"
            className="fixed inset-0 z-[9998] cursor-default bg-[#071526]/55 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.22 }}
            onClick={closeDrawer}
          />

          <motion.aside
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="fixed bottom-0 right-0 top-0 z-[10000] flex w-[min(88vw,390px)] flex-col overflow-hidden bg-[#f7f9f6] text-[#0B2440] shadow-[-24px_0_70px_rgba(7,21,38,0.22)]"
            initial={reduceMotion ? { opacity: 0 } : { x: "100%" }}
            animate={reduceMotion ? { opacity: 1 } : { x: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { x: "100%" }}
            transition={{ duration: reduceMotion ? 0 : 0.34, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="border-b border-[#0B2440]/10 px-6 pb-5 pt-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#1d6903]">
                Navigation
              </p>
              <p className="mt-2 text-2xl font-bold tracking-tight">Explore Onelement</p>
            </div>

            <motion.ul
              className="flex-1 overflow-y-auto px-3 py-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: reduceMotion ? 0 : 0.045, delayChildren: 0.08 },
                },
              }}
            >
              {Menus.map(({ name, path, subMenu }, index) => {
                const isExpanded = expandedMenu === index;
                const hasSubMenu = Boolean(subMenu?.length);
                const active =
                  path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

                return (
                  <motion.li
                    key={name}
                    variants={{
                      hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, x: 18 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    className="border-b border-[#0B2440]/8"
                  >
                    <div className="flex items-center">
                      <NavLink
                        to={path}
                        onClick={closeDrawer}
                        className={`flex-1 px-3 py-4 text-[17px] font-semibold transition-colors ${
                          active ? "text-[#1d6903]" : "hover:text-[#1d6903]"
                        }`}
                      >
                        <span className="mr-3 text-xs font-semibold text-[#0B2440]/35">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {name}
                      </NavLink>

                      {hasSubMenu && (
                        <button
                          type="button"
                          onClick={() => setExpandedMenu(isExpanded ? null : index)}
                          className="mr-2 grid h-10 w-10 place-items-center rounded-full hover:bg-[#163B22]/8"
                          aria-expanded={isExpanded}
                          aria-label={`${isExpanded ? "Collapse" : "Expand"} ${name} submenu`}
                        >
                          <motion.span
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: reduceMotion ? 0 : 0.2 }}
                          >
                            <ChevronDown size={18} />
                          </motion.span>
                        </button>
                      )}
                    </div>

                    <AnimatePresence initial={false}>
                      {hasSubMenu && isExpanded && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: reduceMotion ? 0 : 0.24, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <li className="mb-3 space-y-1 rounded-2xl bg-[#163B22]/6 p-2">
                            {subMenu.map(({ name: subName, path: subPath, icon: Icon }) => {
                              const destination = resolveSubmenuPath(path, subPath);
                              return (
                                <NavLink
                                  to={destination}
                                  key={subName}
                                  onClick={closeDrawer}
                                  className={({ isActive }) =>
                                    `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition-colors ${
                                      isActive
                                        ? "bg-[#163B22] text-white"
                                        : "hover:bg-white hover:text-[#1d6903]"
                                    }`
                                  }
                                >
                                  {Icon && <Icon size={17} strokeWidth={1.9} />}
                                  {subName}
                                </NavLink>
                              );
                            })}
                          </li>
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </motion.li>
                );
              })}
            </motion.ul>

            <div className="border-t border-[#0B2440]/10 bg-white/55 px-6 py-5">
              <p className="text-xs leading-5 text-slate-500">
                Developing sustainable technologies for a cleaner future.
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <div>
      <button
        type="button"
        className="relative z-[10001] grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-[#0B2440]/15 bg-white/70 text-[#0B2440] shadow-sm transition-colors hover:bg-[#0B2440] hover:text-white lg:hidden"
        onClick={toggleDrawer}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isOpen ? "close" : "menu"}
            initial={reduceMotion ? false : { opacity: 0, rotate: -35, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, rotate: 35, scale: 0.7 }}
            transition={{ duration: reduceMotion ? 0 : 0.16 }}
            className="absolute"
          >
            {isOpen ? <X size={19} /> : <Menu size={20} strokeWidth={2.6} />}
          </motion.span>
        </AnimatePresence>
      </button>

      {typeof document !== "undefined" && createPortal(drawer, document.body)}
    </div>
  );
}
