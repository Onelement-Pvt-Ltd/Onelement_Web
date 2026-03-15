import { BsPlayBtn } from "react-icons/bs";
import { motion } from "framer-motion";

const AboutVideo = () => {
  return (
    <div className="flex flex-col py-5 text-black bg-white">
      <div className="flex bg-gray-600 rounded-3xl  w-xl h-[400px]">
        <div className=" px-5 flex justify-center items-center h-[50px] bg-gray-100 rounded-tl-3xl rounded-br-3xl">
          <h1 className=" text-[16px] font-semibold">15+ Years Experience</h1>
        </div>
      </div>
      <div className="absolute md:block  translate-x-1/2 translate-y-6/4">
        <div className="flex justify-center items-center bg-gray-400 rounded-xl border-4 shadow-[0px_10px_15px_-6px_#7f7f7f] border-white  w-[280px] h-[200px] ">
          <motion.div
            initial={{ scale: 1, opacity: 0.8 }}
            whileHover={{ scale: 1.1, opacity: 1 }}
            whileTap={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            className="flex hover:cursor-pointer"
          >
            <BsPlayBtn strokeWidth="0.2px" className="size-12 text-white " />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default AboutVideo;
