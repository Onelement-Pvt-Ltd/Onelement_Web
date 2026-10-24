import { Link } from "react-router-dom";
import TechnologyFallback from "@/assets/CarbonCapture.png";
import { getTechnologyImage } from "@/features/technology/data/technologyImages";

const FALLBACK_IMAGE = TechnologyFallback;

const TechnologySection = ({ tech, index }) => {
  const previewText = tech.description?.paragraphs?.[0];
  const imageFirst = index % 2 === 0;
  const image = getTechnologyImage(
    tech.slug,
    tech.banner?.image || FALLBACK_IMAGE
  );

  return (
    <Link
      to={`/technologies/details/${tech.slug}`}
      className="group block rounded-lg pl-14 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7BC96F] md:pl-0"
    >
      <div
        className={`flex flex-col gap-8 md:items-center md:gap-14 ${
          imageFirst ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        <div className="w-full md:w-1/2">
          <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-white">
            <img
              src={image}
              alt={tech.title}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = FALLBACK_IMAGE;
              }}
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <h2
            className="text-2xl font-semibold leading-tight text-[#0B2440] sm:text-3xl md:text-4xl"
          >
            {tech.title}
          </h2>

          {tech.banner?.subtitle && (
            <p className="mt-3 text-sm font-medium text-[#163B22] md:text-base">
              {tech.banner.subtitle}
            </p>
          )}

          {previewText && (
            <p className="mt-4 max-w-md text-base leading-relaxed text-[#4B5563]">
              {previewText}
            </p>
          )}

          <div className="mt-6 inline-flex flex-col">
            <span className="font-medium text-[#163B22]">
              View details
            </span>
            <span className="mt-1 h-0.5 w-0 bg-[#7BC96F] transition-all duration-500 group-hover:w-full" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TechnologySection;
