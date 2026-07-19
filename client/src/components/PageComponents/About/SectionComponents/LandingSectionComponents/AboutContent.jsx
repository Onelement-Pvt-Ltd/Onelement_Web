import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import TechnologyCard from "./TechnologyCard";
import { technologies } from "../../../../Partials/utils/aboutData";

const AboutContent = ({
  handleClick,
  isHoveredAbout,
  setIsHoveredAbout,
}) => {
  return (
    <div className="mt-10">

      {/* <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">

        {technologies.map((technology) => (
          <TechnologyCard
            key={technology.id}
            {...technology}
          />
        ))}

      </div> */}

      <div className=" mt-8 flex w-full flex-col gap-8 border-t border-slate-300 pt-8 md:flex-row md:items-center ">

        <p className="max-w-xl text-base md:text-lg leading-8 text-[#0a2955]">
          Building scalable technologies that transform industrial emissions
          into sustainable opportunities for a cleaner tomorrow.
        </p>

        <motion.button
          whileHover={{ scale:1.04 }}
          whileTap={{ scale:.98 }}
          onClick={handleClick}
          onMouseEnter={() => setIsHoveredAbout(true)}
          onMouseLeave={() => setIsHoveredAbout(false)}
          className="group flex w-fit items-center gap-3 rounded-xl bg-gradient-to-r from-[#16792d] to-[#35b46e] px-8 py-4 font-semibold text-white"
        >
          Know More

          <motion.div
            animate={{ x:isHoveredAbout?5:0 }}
          >
            <ArrowRight size={18}/>
          </motion.div>

        </motion.button>

      </div>

    </div>
  );
};

export default AboutContent;