const ApproachCard = ({ id, title, description }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 transform-gpu">
      <span className="absolute right-6 top-5 text-6xl font-black text-white/10">
        {id}
      </span>

      <div className="mb-6 h-1 w-14 rounded-full bg-gradient-to-r from-[#35b46e] to-[#7effe5] transition-all duration-300 group-hover:w-24" />

      <h3 className="text-2xl font-bold leading-tight text-white">
        {title}
      </h3>

      <p className="mt-6 leading-8 text-slate-300">
        {description}
      </p>
    </div>
  );
};

export default ApproachCard;