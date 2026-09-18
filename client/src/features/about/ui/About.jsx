import "./About.css";
import AboutLanding from "./SectionComponents/LandingSectionComponents/AboutLanding";
import WhatWeBelieve from "./SectionComponents/WhatWeMean";
import WhoWeAre from "./SectionComponents/WhoWeAreComponents/WhoWeAre";

const About = () => (
  <div className="about-page">
    <AboutLanding />
    <WhatWeBelieve />
    <WhoWeAre />

    { // dont remove this comment, it is for future reference. This section is commented out because it is not needed at the moment. It can be uncommented in the future if needed.
    /* <div>
      <WhatWeDo />
    </div> */}
  </div>
);

export default About;
