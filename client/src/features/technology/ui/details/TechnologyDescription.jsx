const TechnologyDescription = ({ title, paragraphs }) => {
  return (
    <section className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1d6903]">
          Technology overview
        </p>
        <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#0a2955] sm:text-4xl">
          About the <span className="text-[#1d6903]">{title}</span>
        </h2>
      </div>

      <div className="max-w-3xl space-y-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
        {paragraphs?.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>
    </section>
  );
};

export default TechnologyDescription;
