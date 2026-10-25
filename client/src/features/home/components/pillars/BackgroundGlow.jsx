import { motion } from "framer-motion";

const BackgroundGlow = () => {
  return (
    <>
      {/* Green Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.18, 0.3, 0.18],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        -top-44
        -left-44
        h-[420px]
        w-[420px]
        rounded-full
        bg-green-400/20
        blur-[120px]
      "
      />

      {/* Cyan Glow */}

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.18, 0.28, 0.18],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        right-[-120px]
        bottom-[-120px]
        h-[360px]
        w-[360px]
        rounded-full
        bg-cyan-400/20
        blur-[110px]
      "
      />

      {/* Grid */}

      <div
        className="
        absolute
        inset-0
        opacity-[0.04]
        bg-[linear-gradient(#0a2955_1px,transparent_1px),linear-gradient(90deg,#0a2955_1px,transparent_1px)]
        bg-size-[48px_48px]
      "
      />
    </>
  );
};

export default BackgroundGlow;