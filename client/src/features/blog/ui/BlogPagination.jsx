const getPageNumbers = (page, totalPages) => {
  const delta = 1;
  const range = [];
  const withDots = [];
  let last;

  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= page - delta && i <= page + delta)) {
      range.push(i);
    }
  }

  range.forEach((i) => {
    if (last) {
      if (i - last === 2) withDots.push(last + 1);
      else if (i - last > 2) withDots.push("...");
    }
    withDots.push(i);
    last = i;
  });

  return withDots;
};

const BlogPagination = ({ page, totalPages, onPageChange }) => {
  if (!totalPages || totalPages <= 1) return null;

  const pages = getPageNumbers(page, totalPages);
  const canGoPrev = page > 1;
  const canGoNext = page < totalPages;

  const goTo = (target) => {
    if (target === page || target < 1 || target > totalPages) return;
    onPageChange(target);
  };

  return (
    <nav aria-label="Blog pagination" className="flex justify-center items-center flex-wrap gap-2">
      <button
        type="button"
        disabled={!canGoPrev}
        onClick={() => goTo(page - 1)}
        aria-label="Previous page"
        className="px-4 py-2 border rounded-lg disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white transition"
      >
        Prev
      </button>

      {pages.map((p, idx) =>
        p === "..." ? (
          <span key={`dots-${idx}`} className="px-2 text-gray-400 select-none">…</span>
        ) : (
          <button
            key={p}
            type="button"
            onClick={() => goTo(p)}
            aria-current={p === page ? "page" : undefined}
            className={`min-w-10 px-3 py-2 rounded-lg border transition ${
              p === page
                ? "bg-[#0a2955] text-white border-[#0a2955]"
                : "bg-white text-[#0a2955] border-gray-300 hover:bg-gray-50"
            }`}
          >
            {p}
          </button>
        )
      )}

      <button
        type="button"
        disabled={!canGoNext}
        onClick={() => goTo(page + 1)}
        aria-label="Next page"
        className="px-4 py-2 border rounded-lg disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white transition"
      >
        Next
      </button>
    </nav>
  );
};

export default BlogPagination;