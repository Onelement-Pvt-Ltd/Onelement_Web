import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.98,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
};

const textVariants = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
};

const BlogSection = () => {
  return (
    <div className="flex justify-center min-h-screen bg-gray-400 items-center">
      {/* parent grid – DO NOT TOUCH GRID STRUCTURE */}
      <div className="parent w-[880px] h-[480px] mx-5">
        {/* div1 */}
        <motion.div
          className="div1 relative rounded-xl overflow-hidden group"
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          whileHover="hover"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="absolute inset-0 bg-[url('/src/assets/BlogImages/Blog1.png')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />

          <motion.div
            variants={textVariants}
            className="relative cursor-pointer z-10 h-full items-end p-6"
          >
            <div className="flex flex-col  min-h-full justify-between text-white">
              <div className="w-full flex justify-end">
                <Button
                  variant="outline"
                  className="hover:scale-[1.1] cursor-pointer border-3"
                >
                  <h1 className="text-xl font-semibold">More</h1>
                </Button>
              </div>
              <div className="relative z-20 overflow-visible rounded-md transform transition-transform duration-300 ease-linear hover:scale-105">
                <span className="text-white text-3xl font-bold">
                  Advantages of Going Solar
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* div2 */}
        <motion.div
          className="div2 relative rounded-xl overflow-hidden group"
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          whileHover="hover"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="absolute inset-0 bg-[url('/src/assets/BlogImages/Blog2.png')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />

          <motion.div
            variants={textVariants}
            className="relative cursor-pointer z-10 h-full flex items-end p-6"
          >
            <div className="flex flex-col w-full min-h-full justify-between text-white">
              <div className=" flex justify-end">
                <Button
                  variant="outline"
                  className="hover:scale-[1.1] cursor-pointer border-3"
                >
                  <h1 className="text-xl font-semibold">More</h1>
                </Button>
              </div>
              <div className="relative z-20 overflow-visible rounded-md transform transition-transform duration-300 ease-linear hover:scale-105">
                <span className="text-white text-xl font-bold">
                  Advantages of Going Solar
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* div3 */}
        <motion.div
          className="div3 relative rounded-xl overflow-hidden group"
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          whileHover="hover"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="absolute inset-0 bg-[url('/src/assets/BlogImages/Blog3.png')] bg-cover bg-center" />
          <div className="absolute inset-0  bg-black/20 group-hover:bg-black/30 transition" />

          <motion.div
            variants={textVariants}
            className="relative z-10 h-full flex items-end p-6"
          >
           <div className="flex flex-col min-w-full min-h-full justify-between text-white">
              <div className="flex justify-end">
                <Button
                  variant="outline"
                  className="hover:scale-[1.1] border-3"
                >
                  <h1 className="text-xl cursor-pointer font-semibold">More</h1>
                </Button>
              </div>
              {/* <div className="relative inline z-20 overflow-visible rounded-md transform transition-transform duration-300 ease-linear hover:scale-105"> */}
                <span className="text-white cursor-pointer hover:underline text-xl font-bold">
                  Advantages of Going Solar
                </span>
              {/* </div> */}
            </div>
          </motion.div>
        </motion.div>

        {/* div4 */}
        <motion.div
          className="div4 relative rounded-xl overflow-hidden group"
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          whileHover="hover"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="absolute inset-0 bg-[url('/src/assets/BlogImages/Blog4.png')] bg-cover bg-center" />
          <div className="absolute inset-0  bg-black/20 group-hover:bg-black/30 transition" />

          <motion.div
            variants={textVariants}
            className="relative z-10 h-full flex items-end p-6"
          >
            <div className="flex flex-col w-full  min-h-full justify-between text-white">
              <div className=" flex justify-end">
                <Button
                  variant="outline"
                  className="hover:scale-[1.1] border-3"
                >
                  <h1 className="text-xl font-semibold">More</h1>
                </Button>
              </div>
              <div className="relative z-20 overflow-visible rounded-md transform transition-transform duration-300 ease-linear hover:scale-105">
                <span className="text-white text-xl font-bold">
                  Advantages of Going Solar
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogSection;
