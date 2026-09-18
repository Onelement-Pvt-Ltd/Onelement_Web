import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const resolveSubmenuPath = (parentPath, childPath) =>
  childPath.startsWith(parentPath) ? childPath : `${parentPath}${childPath}`;

const DesktopMenu = ({ menu }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  const menuId = useId();
  const hasSubMenu = Boolean(menu?.subMenu?.length);
  const isActive =
    menu.path === "/" ? location.pathname === "/" : location.pathname.startsWith(menu.path);
  const closeMenu = () => setOpen(false);

  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) closeMenu();
  };

  return (
    <li
      className="relative flex h-16 items-center"
      onMouseEnter={() => hasSubMenu && setOpen(true)}
      onMouseLeave={closeMenu}
      onFocus={() => hasSubMenu && setOpen(true)}
      onBlur={handleBlur}
      onKeyDown={(event) => event.key === "Escape" && closeMenu()}
    >
      <Link
        to={menu.path}
        aria-haspopup={hasSubMenu ? "menu" : undefined}
        aria-expanded={hasSubMenu ? open : undefined}
        aria-controls={hasSubMenu ? menuId : undefined}
        className={`group relative flex items-center gap-1.5 rounded-full px-4 py-2 font-semibold transition-colors duration-200 ${
          isActive
            ? "bg-[#163B22]/8 text-[#163B22]"
            : "text-[#0B2440] hover:bg-[#0B2440]/5 hover:text-[#163B22]"
        }`}
      >
        {menu.name}
        {hasSubMenu && (
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            aria-hidden="true"
          >
            <ChevronDown size={15} strokeWidth={2.4} />
          </motion.span>
        )}
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute bottom-0.5 left-4 right-4 h-0.5 origin-left rounded-full bg-[#61a652] transition-transform duration-300 ${
            isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
          }`}
        />
      </Link>

      <AnimatePresence>
        {hasSubMenu && open && (
          <motion.div
            id={menuId}
            role="menu"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 7, scale: 0.98 }}
            transition={{ duration: reduceMotion ? 0 : 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-full z-[999] w-[280px] pt-2"
          >
            <div className="overflow-hidden rounded-2xl border border-[#0B2440]/10 bg-white/95 p-2 shadow-[0_18px_50px_rgba(11,36,64,0.16)] backdrop-blur-xl">
              <p className="px-3 pb-2 pt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#1d6903]">
                Explore {menu.name}
              </p>

              {menu.subMenu.map((submenu, index) => {
                const Icon = submenu.icon;
                const path = resolveSubmenuPath(menu.path, submenu.path);
                const submenuActive = location.pathname === path;

                return (
                  <motion.div
                    key={submenu.name}
                    initial={reduceMotion ? false : { opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: reduceMotion ? 0 : index * 0.035 }}
                  >
                    <Link
                      to={path}
                      role="menuitem"
                      onClick={closeMenu}
                      className={`group/item flex items-center gap-3 rounded-xl px-3 py-3 transition-colors ${
                        submenuActive
                          ? "bg-[#163B22] text-white"
                          : "text-[#0B2440] hover:bg-[#eef4ed]"
                      }`}
                    >
                      {Icon && (
                        <span
                          className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${
                            submenuActive
                              ? "bg-white/12"
                              : "bg-[#163B22]/8 text-[#163B22] group-hover/item:bg-[#163B22]/12"
                          }`}
                        >
                          <Icon size={17} strokeWidth={1.9} />
                        </span>
                      )}
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold">{submenu.name}</span>
                        {submenu.desc && (
                          <span className={`mt-0.5 block text-xs leading-4 ${
                            submenuActive ? "text-white/70" : "text-slate-500"
                          }`}>
                            {submenu.desc}
                          </span>
                        )}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

export default DesktopMenu;
