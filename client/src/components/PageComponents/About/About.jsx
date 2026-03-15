import AboutLanding from "./SectionComponents/AboutLanding";
import WhatWeDo from "./SectionComponents/WhatWeDo";
import WhatWeMean from "./SectionComponents/WhatWeMean";
import WhoWeAre from "./SectionComponents/WhoWeAre";

const About = () => {
  return (
    <div className="flex flex-col mt-16">
      <div className=" flex text-white bg-[#0a2955]">
        <AboutLanding />
      </div>
      <div>
        <WhoWeAre />
      </div>
      <div>
        <WhatWeMean />
      </div>
      <div>
        <WhatWeDo />
      </div>
    </div>
  );
};
export default About;
