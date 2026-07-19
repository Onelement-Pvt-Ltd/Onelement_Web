import { ArrowUpRight } from "lucide-react";

const VerticalCard = ({
  title,
  short,
  description,
  icon: Icon,
  iconColor,
}) => {
  return (
    <div className="group flex h-full cursor-pointer flex-col rounded-2xl border border-[#0a2955]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#16792d]/25 hover:shadow-[0_10px_30px_rgba(10,41,85,0.08)] transform-gpu will-change-transform">
      <div className="flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0a2955]/5 transition-colors duration-300 group-hover:bg-[#16792d]/10">
          <Icon
            className={`${iconColor} h-6 w-6 md:h-7 md:w-7`}
          />
        </div>

        <ArrowUpRight
          className="h-5 w-5 text-[#16792d] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
        />
      </div>

      <div className="mt-8">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#16792d]">
          {short}
        </span>

        <h3 className="mt-3 text-2xl font-bold leading-tight text-[#0a2955]">
          {title}
        </h3>

        <div className="mt-5 h-px w-14 bg-[#16792d]/30 transition-all duration-300 group-hover:w-24" />

        <p className="mt-5 text-[15px] leading-7 text-slate-600 md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default VerticalCard;