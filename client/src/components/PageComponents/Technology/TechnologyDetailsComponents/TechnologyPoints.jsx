import { useState } from "react";
import { motion } from "framer-motion";
import PlusMinus from "@/components/Partials/utils/Icons/PlusMinus";

const TechnologyPoints = ({ points }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-w-full">
      <ul className="space-y-3">
        {points?.map((point, index) => {
          const isOpen = openIndex === index;

          return (
            <li key={index} className="flex gap-4">
              <div className="flex-1 border text-justify bg-white border-gray-300">
                <div
                  className={`p-3 cursor-pointer flex justify-between items-center font-semibold 
                  ${
                    isOpen
                      ? "bg-[#0a2955] text-white"
                      : "bg-white text-[#0a2955]"
                  }`}
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                >
                  <h1 className="text-sm md:text-lg">
                    {point.title}
                  </h1>
                  <PlusMinus isOpen={isOpen} />
                </div>

                {point.content && (
                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden px-6 text-[15px] font-medium tracking-wider text-gray-600"
                  >
                    <div className="py-2 md:text-base text-sm">
                      {point.content}
                    </div>
                  </motion.div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TechnologyPoints;
