import { useState } from "react";
import AboutContent from "./AboutContent";
import AboutBento from "./AboutBento";
import LandingHeading from "./LandingHeading";

// import About_Bento_1 from "../../../../assets/AboutImages/About_Bento_1.png";
// import About_Bento_2 from "../../../../assets/AboutImages/About_Bento_2.png";
// import About_Bento_3 from "../../../../assets/AboutImages/About_Bento_3.png";
// import About_Bento_4 from "../../../../assets/AboutImages/About_Bento_4.png";

const AboutLanding = () => {
  const [isHoveredAbout, setIsHoveredAbout] = useState(false);

  const handleClick = () => {
    navigateTo("/about");
  };

  return (
    <section className="w-full bg-[#d9d9d9]">
      <div className="mx-auto flex max-w-[1450px] flex-col   px-5 py-12 sm:px-8 md:py-16 lg:px-10 lg:py-20 xl:px-14">
        <div className="flex flex-col items-center lg:gap-12 lg:flex-row lg:items-center lg:justify-between">
          <div className=" lg:w-[58%]">
            <LandingHeading />
          </div>
          <div className="flex w-full justify-center lg:w-[42%]">
            <AboutBento
              images={[
                // About_Bento_1,
                // About_Bento_2,
                // About_Bento_3,
                // About_Bento_4,
              ]}
            />
          </div>
        </div>

        {/* <AboutContent
          handleClick={handleClick}
          isHoveredAbout={isHoveredAbout}
          setIsHoveredAbout={setIsHoveredAbout}
        /> */}
      </div>
    </section>
  );
};

export default AboutLanding;