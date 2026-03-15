const BlogPagination = ({ page, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center gap-4 mt-10">
      <button
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        className="px-4 py-2 border rounded disabled:opacity-40"
      >
        Prev
      </button>

      <span className="font-medium">
        {page} / {totalPages}
      </span>

      <button
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
        className="px-4 py-2 border rounded disabled:opacity-40"
      >
        Next
      </button>
    </div>
  );
};

export default BlogPagination;