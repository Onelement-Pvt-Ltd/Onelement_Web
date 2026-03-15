import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const TechnologyCard = ({ tech, index }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      onClick={() => navigate(`/technologies/details/${tech.slug}`)}
      className="
        group 
        cursor-pointer 
        w-full 
        max-w-[360px] 
        h-[390px] 
        bg-white 
        rounded-3xl 
        overflow-hidden 
        shadow-md 
        hover:shadow-[0_15px_20px_rgba(10,41,85,0.25)] 
        transition-all
        duration-500 
        flex 
        flex-col
      "
    >
      {/* Image Section */}
      <div className="relative h-[200px] overflow-hidden">
        <img
          src={tech.banner?.image}
          alt={tech.title}
          className="
            w-full 
            h-full 
            object-cover 
            transition-transform 
            duration-700 
            group-hover:scale-110
          "
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

        {/* Floating Tag */}
       
      
      </div>

      {/* Content Section */}
      <div className="flex flex-col grow p-6 justify-between">
        <div>
          <h3
            className="
              text-xl 
              font-semibold 
              text-[#0a2955] 
              group-hover:text-[#1d6903] 
              transition-colors
              line-clamp-2
            "
          >
            {tech.title}
          </h3>

          <p
            className="
              mt-4 
              text-gray-600 
              text-sm 
              leading-relaxed 
              line-clamp-3
            "
          >
            {tech.banner?.subtitle}
          </p>
        </div>

        {/* Bottom Accent Line */}
        <div className="mt-6">
          <div
            className="
              h-0.5 
              w-0
              bg-[#1d6903] 
              transition-all 
              duration-500 
              group-hover:w-full
            "
          />
        </div>
      </div>
    </motion.div>
  );
};

export default TechnologyCard;
