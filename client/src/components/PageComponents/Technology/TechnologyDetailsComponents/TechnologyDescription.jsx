const TechnologyDescription = ({ title, paragraphs }) => {
  return (
    <div className="flex md:flex-row flex-col">
      <div className="text-2xl font-bold text-[#0a2955] md:w-100">
        <h1>
          About the <br />
          <span className="text-[#1d6903]">{title}</span>
        </h1>
      </div>

      <div className="w-full text-justify font-[450]">
        {paragraphs?.map((para, index) => (
          <p key={index} className="mt-5">
            {para}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TechnologyDescription;
