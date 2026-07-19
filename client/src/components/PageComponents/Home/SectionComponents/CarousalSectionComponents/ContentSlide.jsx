import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ContentSlide = ({ pillar }) => {
  const Icon = pillar.icon;

  return (
    <motion.div
      key={pillar.name}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
      className="
        flex
        h-full
        flex-col
        justify-between
      "
    >
      {/* Top */}

      <div>

        {/* Icon */}

        <div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center

            rounded-2xl

            bg-gradient-to-br
            from-[#22b14c]
            to-[#0d8d45]

            shadow-lg
            shadow-green-500/30
          "
        >
          <Icon
            size={30}
            className="text-white"
          />
        </div>

        {/* Title */}

        <h2
          className="
            mt-8

            text-3xl

            md:text-4xl

            font-bold

            text-[#0a2955]
          "
        >
          {pillar.name}
        </h2>

        {/* Accent */}

        <div
          className="
            mt-5

            h-1

            w-24

            rounded-full

            bg-gradient-to-r
            from-[#22b14c]
            to-[#5cf0c3]
          "
        />

        {/* Description */}

        <p
          className="
            mt-8

            max-w-3xl

            text-lg

            leading-9

            text-slate-600
          "
        >
          {pillar.content}
        </p>

      </div>

      {/* Bottom */}

      <div
        className="
          mt-10

          flex

          items-center

          justify-between

          border-t

          border-slate-200

          pt-6
        "
      >

        <div>

          <p className="text-sm text-slate-500">
            One Element Pvt. Ltd.
          </p>

          <h4
            className="
              mt-1

              text-lg

              font-semibold

              text-[#0a2955]
            "
          >
            Building a Sustainable Future
          </h4>

        </div>

        <motion.button
          whileHover={{
            x: 5,
          }}
          className="
            flex

            items-center

            gap-2

            rounded-xl

            bg-[#0a2955]

            px-5

            py-3

            text-white

            transition-all

            hover:bg-[#144e87]
          "
        >
          Learn More

          <ArrowRight size={18} />

        </motion.button>

      </div>

    </motion.div>
  );
};

export default ContentSlide;