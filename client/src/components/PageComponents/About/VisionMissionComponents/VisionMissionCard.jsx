const VisionMissionCard = ({ id, label, description, align = "left" }) => {
  return (
    <div
      className={`relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm lg:p-10 ${
        align === "right" ? "text-right" : "text-left"
      }`}
    >
      <div className="absolute -right-6 -top-8 text-[110px] font-black leading-none text-white/5 lg:text-[140px]">
        {id}
      </div>

      <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7effe5]">
        {label}
      </span>

      <h2 className="mt-3 text-4xl font-black text-white lg:text-5xl">
        {label}
      </h2>

      <div
        className={`mt-5 h-1 w-24 rounded-full bg-linear-to-r from-[#35b46e] to-[#7effe5] ${
          align === "right" ? "ml-auto" : ""
        }`}
      />

      <p className="mt-8 text-[17px] leading-9 text-slate-300">
        {description}
      </p>
    </div>
  );
};

export default VisionMissionCard;