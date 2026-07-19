import SectionHeading from "./SectonComponents/SectionHeading";
import CompanyIntro from "./SectonComponents/CompanyIntro";
import TechnologyVerticals from "./SectonComponents/TechnologyVerticals";

import WhoWeAreBento from "./SectonComponents/WhoWeAreBento";
import AboutApproach from "./SectonComponents/AboutApproach";

// import About_Bento_1 from "../../../../assets/AboutImages/About_Bento_1.png";
// import About_Bento_2 from "../../../../assets/AboutImages/About_Bento_2.png";
// import About_Bento_3 from "../../../../assets/AboutImages/About_Bento_3.png";
// import About_Bento_4 from "../../../../assets/AboutImages/About_Bento_4.png";

const AboutWhoWeAre = () => {
  const handleClick = () => {
    navigateTo("/about");
  };

  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex max-w-[1450px] flex-col gap-16 px-5 py-16 sm:px-8 lg:px-10 lg:py-24 xl:px-14">
        <div className="flex flex-col">
          <div className="flex w-full max-w-4xl">
            <SectionHeading />
          </div>

          <div className="flex flex-col md:flex-row items-center  justify-between">
            <div className="flex w-full max-w-lg justify-center">
              <WhoWeAreBento
                images={
                  [
                    // About_Bento_1,
                    // About_Bento_2,
                    // About_Bento_3,
                    // About_Bento_4,
                  ]
                }
              />
            </div>

            <div className="flex w-full max-w-3xl flex-col gap-16 md:pl-5 lg:flex-row lg:items-start lg:pl-15">
              <div className="max-w-2xl flex-1">
                <CompanyIntro />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <TechnologyVerticals />
        </div>

        <div className="w-full">
          <AboutApproach handleClick={handleClick} />
        </div>
      </div>
    </section>
  );
};

export default AboutWhoWeAre;
