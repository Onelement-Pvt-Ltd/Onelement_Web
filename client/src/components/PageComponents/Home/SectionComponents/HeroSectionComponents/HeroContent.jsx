import HeroImage from "../../../../../assets/HeroImage.png";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const HeroContent = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative z-20 flex items-center">
      <div
        className="
        mx-auto
        flex
        w-full
        max-w-7xl
        flex-col
        justify-center
      
        px-6
        py-10

        sm:px-10

        lg:px-14

        xl:px-16
      "
      >
        {/* ================= Logo ================= */}

        {/* <motion.img
          src={HeroImage}
          alt="OEPL"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
          w-36

          sm:w-48

          md:w-60

          lg:w-80

          xl:w-[420px]

          select-none
        "
        /> */}

        {/* ================= Company ================= */}

        <motion.h2
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.2,
          }}
          className="
          mt-6
            
          uppercase

          tracking-[4px]

          sm:tracking-[6px]

          text-[11px]

          sm:text-sm

          md:text-2xl
          font-bold
          lg:text-8xl
          
          text-white
        "
        >
          ONELEMENT ENERGY
        </motion.h2>

        {/* ================= Heading ================= */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
          }}
          className="
          mt-6

          max-w-5xl

          

          leading-[1.05]

          text-white
        "
          style={{
            fontSize: "clamp(2rem,5vw,5.4rem)",
          }}
        >
          Building a
          <br />
          <span className="text-[#4dff9e]">Sustainable Future</span>
        </motion.h1>

        {/* ================= CTA Section ================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.8,
          }}
          className="
          mt-12

          flex

          flex-col-reverse

          gap-10

          md:flex-row

          lg:items-center

          md:justify-between
        "
        >
          {/* Buttons */}

          <div
            className="
            flex

            w-full

            flex-col

            gap-4

            sm:w-auto

            lg:flex-row
          "
          >
            <motion.button
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.98,
              }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="
              flex

              w-full

              sm:w-auto

              cursor-pointer

              items-center

              justify-center

              gap-3

              rounded-xl

              bg-gradient-to-r

              from-[#16792d]

              to-[#35b46e]

              px-7

              py-4

              text-base

              sm:text-lg

              font-semibold

              text-white
            "
            >
              Explore Technologies
              <motion.div
                animate={{
                  x: hovered ? 6 : 0,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <ArrowRight size={20} strokeWidth={2.5} />
              </motion.div>
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
              w-full

              sm:w-auto

              cursor-pointer

              rounded-xl

              border

              border-white/20

              bg-white/10

              px-7

              py-4

              text-base

              sm:text-lg

              text-white

              backdrop-blur-md

              transition

              hover:bg-white/20
            "
            >
              Our Solutions
            </motion.button>
          </div>
          {/* ================= Quote ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 1,
              duration: 0.8,
            }}
            className="
              relative

              flex
              
              items-center
              justify-center

              rounded-2xl

              border
              border-white/10

              bg-white/5

              px-6
              py-6

              backdrop-blur-md

              lg:w-auto
              lg:px-8
            "
          >
            {/* Decorative Line */}

            <div className="absolute left-0 top-6 h-16 w-1 rounded-full bg-gradient-to-b from-[#35b46e] to-[#6dffd2]" />

            {/* Opening Quote */}

            <motion.span
              className="
                mr-3

                self-start

                font-serif

                text-5xl
                sm:text-6xl
                lg:text-7xl

                text-[#4dff9e]
              "
              animate={{
                scale: [1, 1.18, 1],
                opacity: [0.5, 1, 0.5],
                y: [0, -4, 0],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              "
            </motion.span>

            {/* Quote Text */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.2,
                duration: 0.6,
              }}
              className="text-center"
            >
              <h2
                className="
                  font-light

                  leading-relaxed

                  text-white

                  text-base

                  sm:text-lg

                  md:text-xl

                  lg:text-2xl
                "
              >
                Developing, Deploying & Decentralizing
                <br />
                <span className="font-semibold text-[#7effe5]">
                  Sustainable Technologies
                </span>
              </h2>
            </motion.div>

            {/* Closing Quote */}

            <motion.span
              className="
                ml-3

                self-end

                font-serif

                text-5xl
                sm:text-6xl
                lg:text-7xl

                text-[#4dff9e]
              "
              animate={{
                scale: [1, 1.18, 1],
                opacity: [0.5, 1, 0.5],
                y: [0, 4, 0],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              }}
            >
              "
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroContent;
