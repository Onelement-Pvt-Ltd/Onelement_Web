import { Link } from "react-router-dom";
import Blog1 from "@/assets/BlogImages/Blog1.png"; // TODO: swap for a dedicated technology fallback image

const FALLBACK_IMAGE = Blog1;

const heading = { fontFamily: "'Space Grotesk', sans-serif" };
const body = { fontFamily: "'IBM Plex Sans', sans-serif" };

const TechnologySection = ({ tech, index }) => {
  const previewText = tech.description?.paragraphs?.[0];
  const imageFirst = index % 2 === 0;

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
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100">
            <img
              src={tech.banner?.image || FALLBACK_IMAGE}
              alt={tech.title}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = FALLBACK_IMAGE;
              }}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <h2
            style={heading}
            className="text-2xl font-semibold leading-tight text-[#0B2440] sm:text-3xl md:text-4xl"
          >
            {tech.title}
          </h2>

          {tech.banner?.subtitle && (
            <p style={body} className="mt-3 text-sm font-medium text-[#163B22] md:text-base">
              {tech.banner.subtitle}
            </p>
          )}

          {previewText && (
            <p style={body} className="mt-4 max-w-md text-base leading-relaxed text-[#4B5563]">
              {previewText}
            </p>
          )}

          <div className="mt-6 inline-flex flex-col">
            <span style={body} className="font-medium text-[#163B22]">
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