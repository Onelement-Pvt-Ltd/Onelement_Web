// import AboutLanding from "./SectionComponents/AboutLanding";
import AboutLanding from "./SectionComponents/LandingSectionComponents/AboutLanding"; 
import WhatWeDo from "./SectionComponents/WhatWeDo";
import WhatWeBelieve from "./SectionComponents/WhatWeMean";
// import WhoWeAre from "./SectionComponents/WhoWeAre";
import WhoWeAre from "./SectionComponents/WhoWeAreComponents/WhoWeAre";

const About = () => {
  return (
    <div className="flex flex-col mt-16">
      <div className=" flex text-white bg-[#0a2955]">
        <AboutLanding />
      </div>
      <div>
        <WhatWeBelieve />
      </div>
      <div>
        <WhoWeAre />
      </div>
      {/* <div>
        <WhatWeDo />
      </div> */}
    </div>
  );
};
export default About;
