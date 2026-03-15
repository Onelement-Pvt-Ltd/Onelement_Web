import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "@/features/blog/blogSlice";

const BlogFilters = ({ meta }) => {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.blog);

  const handleChange = (e) => {
    const { name, value } = e.target;

    dispatch(setFilters({
      [name]: value || undefined
    }));
  };

  const availableMonths =
    filters.year && meta.monthsByYear[filters.year]
      ? meta.monthsByYear[filters.year]
      : [];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm space-y-6">
      <h3 className="font-semibold text-[#0a2955]">Filter</h3>

      <select name="category" onChange={handleChange} className="w-full border p-2 rounded">
        <option value="">All Categories</option>
        {meta.categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <select name="year" onChange={handleChange} className="w-full border p-2 rounded">
        <option value="">All Years</option>
        {meta.years.map((year) => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>

      {filters.year && (
        <select name="month" onChange={handleChange} className="w-full border p-2 rounded">
          <option value="">All Months</option>
          {availableMonths.map((month) => (
            <option key={month} value={month}>
              {new Date(0, month - 1).toLocaleString("default", { month: "long" })}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default BlogFilters;