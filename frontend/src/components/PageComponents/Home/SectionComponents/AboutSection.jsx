import AboutContent from "./AboutSectionComponents/AboutContent";
import AboutVideo from "./AboutSectionComponents/AboutVideo";

import QuantitativeInfo from "./AboutSectionComponents/QuantitativeInfo";

const AboutSection = () => {
  return (
    <div className="bg-white">
      <div className=" h-220 mx-20 flex flex-col justify-center items-center">
        <div className="flex  w-full justify-center">
          <div className="flex w-full gap-x-10 items-center justify-between">
            <div className="flex justify-center items-center h-150 mx-auto w-full">
              <AboutVideo />
            </div>
            <div className="flex justify-center h-150 mx-auto w-full">
              <AboutContent />
            </div>
          </div>
        </div>

        <QuantitativeInfo />
      </div>
    </div>
    // </div>
  );
};
export default AboutSection;
