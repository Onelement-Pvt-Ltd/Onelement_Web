import { companyIntro } from "../utils/aboutWhoWeAreData";

const CompanyIntro = () => {
  return (
    <div className="space-y-4 lg:space-y-8">
      {companyIntro.map((paragraph, index) => (
        <p
          key={index}
          className="text-justify text-base leading-8 text-slate-600 info-text lg:text-lg"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default CompanyIntro;