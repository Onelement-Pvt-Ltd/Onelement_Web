// MotionCard.jsx
import React from "react";
import { motion } from "framer-motion";

/**
 * MotionCard
 * - Props:
 *    name
 *    activeIndex (number)
 *    index (number)
 *    onMouseEnter (fn)
 *    onMouseLeave (fn)
 *
 * The card animates to "hover" when activeIndex === index (programmatic hover),
 * and still responds to pointer hover via whileHover.
 */

export default function MotionCard({
  name,
  activeIndex,
  index,
  onMouseEnter,
  onMouseLeave,
}) {
  const isActive =
    typeof activeIndex === "number" && typeof index === "number"
      ? activeIndex === index
      : false;

  const variants = {
    initial: {
      scale: 1,
      boxShadow: "0px 0px 0px rgba(0,0,0,0)",
      zIndex: 1,
    },
    hover: {
      scale: 1.08,
      boxShadow: "0px 10px 35px rgba(10,41,85,0.25)",
      zIndex: 50,
    },
    tap: {
      scale: 0.97,
    },
  };

  return (
    // <motion.div
    //   variants={variants}
    //   initial="initial"
    //   animate={isActive ? "hover" : "initial"}        // programmatic hover
    //   whileHover="hover"                              // pointer hover
    //   whileTap="tap"
    //   transition={{
    //     type: "spring",
    //     stiffness: 240,
    //     damping: 20,
    //   }}
    //   onMouseEnter={() => onMouseEnter?.(index)}
    //   onMouseLeave={() => onMouseLeave?.(index)}
    //   className="
    //     bg-[#0a2955]
    //     text-white
    //     flex
    //     items-center
    //     justify-center
    //     rounded-md
    //     cursor-pointer
    //     w-[280px]
    //     py-5
    //     select-none
    //     relative
    //   "
    //   style={{ willChange: "transform" }}
    //   role="button"
    //   tabIndex={0}
    // >
    <div
      className="
         bg-[#0a2955]
         text-white
         flex
        items-center
         justify-center
         rounded-md
         cursor-pointer
       w-[280px]
         py-5
        select-none
        relative
     "
      style={{ willChange: "transform" }}
      role="button"
    >
      <h1 className="text-xl font-semibold">{name}</h1>
    </div>
    // </motion.div>
  );
}
