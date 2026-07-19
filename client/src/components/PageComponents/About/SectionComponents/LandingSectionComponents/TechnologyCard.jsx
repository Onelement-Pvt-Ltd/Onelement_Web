import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const TechnologyCard = ({ title, description, icon: Icon, iconColor }) => {
  return (
    <motion.div
      whileHover={{ x: 8, y: -2 }}
      transition={{ duration: 0.25 }}
      className="group flex gap-5 rounded-xl border border-[#16792d]/10  p-5 shadow-[0_6px_20px_rgba(22,121,45,0.08)] transition-all duration-300 hover:border-[#35b46e]/30 hover:shadow-[0_12px_30px_rgba(22,121,45,0.14)]"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#16792d]/10 sm:h-14 sm:w-14 lg:h-16 lg:w-16 lg:rounded-2xl">
        <Icon className={`${iconColor} h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7`} />
      </div>

      <div>
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-bold text-slate-900">{title}</h3>

          <ArrowUpRight
            size={16}
            className="text-[#35b46e] opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
          />
        </div>

        <p className="mt-2 max-w-md text-justify leading-7 text-slate-600 md:text-[15px] lg:text-lg">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default TechnologyCard;
