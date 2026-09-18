const BlogCardSkeleton = ({ variant }) => {
  const heightStyles = {
    horizontal: "min-h-[230px] md:min-h-[260px]",
    square: "min-h-[230px] md:min-h-[260px]",
    vertical: "min-h-[280px] md:min-h-[540px]",
  };

  return (
    <div
      className={`animate-pulse overflow-hidden rounded-[28px] bg-slate-200 ${heightStyles[variant]}`}
    >
      <div className="flex h-full flex-col justify-end bg-gradient-to-t from-slate-300 via-slate-200 to-slate-100 p-6">
        <div className="mb-5 h-6 w-24 rounded-full bg-slate-300" />

        <div className="space-y-3">
          <div className="h-5 w-4/5 rounded bg-slate-300" />
          <div className="h-5 w-3/5 rounded bg-slate-300" />
        </div>

        {variant !== "square" && (
          <div className="mt-5 space-y-2">
            <div className="h-4 w-full rounded bg-slate-300" />
            <div className="h-4 w-4/5 rounded bg-slate-300" />
          </div>
        )}

        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-slate-300" />
            <div className="h-4 w-24 rounded bg-slate-300" />
          </div>

          <div className="h-4 w-20 rounded bg-slate-300" />
        </div>
      </div>
    </div>
  );
};

export default BlogCardSkeleton;