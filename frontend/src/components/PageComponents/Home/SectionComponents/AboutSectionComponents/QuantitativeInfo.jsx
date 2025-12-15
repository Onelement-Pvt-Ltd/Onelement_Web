import info from "@/components/Partials/utils/QuantativeInfo";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const QuantitativeInfo = () => {
  return (
    <div className="grid grid-cols-4  mt-20 w-full">
      {info.map((elem, idx) => (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          transition={{ duration: 2, delay: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          key={idx}
          className="w-full text-black flex justify-center items-center"
        >
          <div className="flex">
            {elem.icon && <elem.icon className="size-15" />}
          </div>
          {/* <div className="flex flex-col ml-4"> */}
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: `${elem.delay}` }}
            className="flex flex-col ml-4"
          >
            <h1 className="text-3xl font-bold">
              <CountUp
                start={0}
                end={elem.count}
                delay={elem.delay}
                duration={5}
                suffix="+"
              />
            </h1>
            <p className="text-[18px] font-semibold">
              {elem.name && elem.name}
            </p>
          </motion.div>
          {/* </div> */}
        </motion.div>
      ))}
    </div>
  );
};
export default QuantitativeInfo;
