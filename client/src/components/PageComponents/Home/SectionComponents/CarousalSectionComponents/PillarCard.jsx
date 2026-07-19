import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PillarCard = ({
  title,
  subtitle,
  icon: Icon,
  active,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => {
  return (
    <motion.div
      layout
      whileHover={{
        x: 8,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className={`
        relative
        overflow-hidden
        rounded-2xl
        cursor-pointer
        transition-all
        duration-300

        border

        ${
          active
            ? "border-green-400 bg-linear-to-r from-[#0a2955] to-[#22b14c] shadow-2xl shadow-green-500/30"
            : "border-slate-200 bg-white hover:border-green-300 hover:shadow-xl"
        }
      `}
    >
      {/* Active Indicator */}

      <motion.div
        layout
        className={`
          absolute
          left-0
          top-0
          h-full
          w-1.5

          ${
            active
              ? "bg-white"
              : "bg-transparent"
          }
        `}
      />

      <div className="flex items-center w-full md:justify-between md:p-3 lg:p-6">

        <div className="flex items-center gap-5">

          {/* Icon */}

          <div
            className={`
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-xl
              transition-all

              ${
                active
                  ? "bg-white/20"
                  : "bg-[#eef8f2]"
              }
            `}
          >
            <Icon
              size={26}
              className={
                active
                  ? "text-[white]"
                  : "text-[#22b14c]"
              }
            />
          </div>

          {/* Text */}

          <div>

            <h3
              className={`
                text-lg
                font-semibold

                ${
                  active
                    ? "text-white"
                    : "text-[#0a2955]"
                }
              `}
            >
              {title}
            </h3>

            <p
              className={`
                mt-1
                text-sm

                ${
                  active
                    ? "text-white/80"
                    : "text-slate-500"
                }
              `}
            >
              {subtitle}
            </p>

          </div>

        </div>

        {/* Arrow */}

        <motion.div
          animate={{
            x: active ? 6 : 0,
          }}
          transition={{
            duration: .25,
          }}
        >
          <ArrowRight
            className={
              active
                ? "text-white"
                : "text-slate-400"
            }
          />
        </motion.div>

      </div>

      {/* Bottom Glow */}

      {active && (

        <motion.div
          layoutId="activeGlow"
          className="
            absolute
            bottom-0
            left-0
            h-[3px]
            w-full

            bg-white
          "
        />

      )}

    </motion.div>
  );
};

export default PillarCard;
