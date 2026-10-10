import "./About.css";
import AboutLanding from "./SectionComponents/LandingSectionComponents/AboutLanding";
import WhatWeMean from "./SectionComponents/WhatWeMean";
import WhoWeAre from "./SectionComponents/WhoWeAreComponents/WhoWeAre";
import Seo from "@/shared/seo/Seo";
import { breadcrumbSchema } from "@/shared/seo/seoData";

const About = () => (
  <div className="about-page">
    <Seo
      title="About Us"
      description="Learn about Onelement Energy's purpose, approach and work developing sustainable technologies for energy, environment and industry."
      path="/about"
      structuredData={breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
      ])}
    />
    <AboutLanding />
    <WhatWeMean />
    <WhoWeAre />

    { // dont remove this comment, it is for future reference. This section is commented out because it is not needed at the moment. It can be uncommented in the future if needed.
    /* <div>
      <WhatWeDo />
    </div> */}
  </div>
);

export default About;
