const TechnologyDescription = ({ title, paragraphs }) => {
  return (
    <div className="flex max-w-7xl px-5 md:flex-row justify-between flex-col">
      <div className=" text-3xl md:text-4xl font-bold text-[#0a2955] md:max-w-100">
        <h1>
          About the <br />
          <span className="text-[#1d6903]">{title}</span>
        </h1>
      </div>

      <div className="w-full text-[#0a2955] text-base md:text-xl max-w-4xl text-justify font-[450]">
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
