export default function PlusMinus({
  isOpen,
  isLast = false, // pass true for last item to stop the line
}) {
  return (
    <div className="relative flex items-start">
      {/* Vertical line */}
      {/* {!isLast && (
        <div className="absolute top-4 left-[7px] h-full w-[2px] bg-white/40" />
      )} */}

      {/* Plus / Minus Icon */}
      <div className="size-5 flex items-center justify-center z-10">
        {/* Horizontal bar (always visible) */}
        <div
          className={`relative w-3 md:w-[15px] h-[3px] md:h-[3px] ${isOpen ? "bg-[#E0E4CC]" : "bg-[#0a2955]"}`}
        >
          {/* Vertical bar */}
          <div
            className={`
              absolute inset-0
              w-3 md:w-[15px] h-[3px] md:h-[3px]
              ${isOpen ? "bg-[#E0E4CC]" : "bg-[#0a2955]"}
              transition-all duration-400
              ease-[cubic-bezier(0.17,0.67,0.09,0.97)]
              opacity-100
              ${isOpen ? "rotate-180" : "rotate-90"}
            `}
          />
        </div>
      </div>
    </div>
  );
}
