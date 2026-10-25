import { useEffect, useMemo } from "react";
import { Check, SlidersHorizontal } from "lucide-react";

const MONTH_NAMES = Array.from({ length: 12 }, (_, index) =>
  new Date(2020, index, 1).toLocaleString(undefined, { month: "short" })
);

const sameValues = (left, right) =>
  left.length === right.length && left.every((value, index) => value === right[index]);

const getOptions = (facets, categories, years) => {
  const categorySet = new Set(categories);
  const yearSet = new Set(years);
  const matchingCategories = facets.filter(
    (item) => !categorySet.size || categorySet.has(item.category)
  );
  const validYears = [...new Set(matchingCategories.map((item) => item.year))]
    .sort((a, b) => b - a);
  const matchingYears = matchingCategories.filter(
    (item) => !yearSet.size || yearSet.has(item.year)
  );
  const validMonths = [...new Set(matchingYears.map((item) => item.month))]
    .sort((a, b) => a - b);
  return { validYears, validMonths };
};

const OptionGroup = ({ label, hint, options, selected, onToggle, format = String }) => (
  <fieldset>
    <legend className="flex w-full items-baseline justify-between text-sm font-semibold text-slate-900">
      <span>{label}</span>
      <span className="text-[11px] font-normal text-slate-400">{hint}</span>
    </legend>
    <div className="mt-3 flex flex-wrap gap-2">
      {options.map((option) => {
        const active = selected.includes(option);
        return (
          <button
            key={option}
            type="button"
            aria-pressed={active}
            onClick={() => onToggle(option)}
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-2 text-xs font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 ${
              active
                ? "border-emerald-700 bg-emerald-700 text-white shadow-sm"
                : "border-slate-200 bg-white text-slate-600 hover:border-emerald-300 hover:text-emerald-800"
            }`}
          >
            {active && <Check aria-hidden="true" className="h-3.5 w-3.5" />}
            {format(option)}
          </button>
        );
      })}
    </div>
  </fieldset>
);

const BlogFilters = ({ meta, metaLoading, metaError, filters, onChange, onClear }) => {
  const facets = useMemo(() => meta?.facets ?? [], [meta]);
  const { validYears, validMonths } = useMemo(
    () => getOptions(facets, filters.categories, filters.years),
    [facets, filters.categories, filters.years]
  );
  const activeCount = filters.categories.length + filters.years.length + filters.months.length;

  useEffect(() => {
    if (!meta) return;
    const validCategories = filters.categories.filter((item) => meta.categories.includes(item));
    const options = getOptions(facets, validCategories, filters.years);
    const years = filters.years.filter((item) => options.validYears.includes(item));
    const monthsForYears = getOptions(facets, validCategories, years).validMonths;
    const months = years.length
      ? filters.months.filter((item) => monthsForYears.includes(item))
      : [];

    if (!sameValues(validCategories, filters.categories) ||
        !sameValues(years, filters.years) || !sameValues(months, filters.months)) {
      onChange({ categories: validCategories, years, months });
    }
  }, [facets, filters.categories, filters.months, filters.years, meta, onChange]);

  const toggleCategory = (category) => {
    const categories = filters.categories.includes(category)
      ? filters.categories.filter((item) => item !== category)
      : [...filters.categories, category];
    const options = getOptions(facets, categories, filters.years);
    const years = filters.years.filter((item) => options.validYears.includes(item));
    const months = years.length
      ? filters.months.filter((item) => getOptions(facets, categories, years).validMonths.includes(item))
      : [];
    onChange({ categories, years, months });
  };

  const toggleYear = (year) => {
    const years = filters.years.includes(year)
      ? filters.years.filter((item) => item !== year)
      : [...filters.years, year].sort((a, b) => b - a);
    const months = years.length
      ? filters.months.filter((item) => getOptions(facets, filters.categories, years).validMonths.includes(item))
      : [];
    onChange({ years, months });
  };

  const toggleMonth = (month) => {
    const months = filters.months.includes(month)
      ? filters.months.filter((item) => item !== month)
      : [...filters.months, month].sort((a, b) => a - b);
    onChange({ months });
  };

  if (metaError) return <div className="rounded-2xl border border-red-100 bg-red-50 p-5 text-sm text-red-700">Filter options could not be loaded.</div>;

  return (
    <div className="rounded-3xl border border-slate-200/80 bg-white p-5 shadow-[0_18px_50px_-35px_rgba(15,23,42,0.45)]">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2 text-slate-900">
          <SlidersHorizontal aria-hidden="true" className="h-4 w-4 text-emerald-700" />
          <h2 className="font-bold">Refine articles</h2>
          {activeCount > 0 && <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-bold text-emerald-800">{activeCount}</span>}
        </div>
        {activeCount > 0 && <button type="button" onClick={onClear} className="text-xs font-semibold text-emerald-700 hover:text-emerald-900">Clear</button>}
      </div>

      {metaLoading ? (
        <div className="mt-5 space-y-5 animate-pulse"><div className="h-20 rounded-2xl bg-slate-100" /><div className="h-16 rounded-2xl bg-slate-100" /></div>
      ) : (
        <div className="mt-5 space-y-6">
          <OptionGroup label="Categories" hint={filters.categories.length ? `${filters.categories.length} selected` : "All topics"} options={meta?.categories ?? []} selected={filters.categories} onToggle={toggleCategory} />
          <OptionGroup label="Years" hint={`${validYears.length} available`} options={validYears} selected={filters.years} onToggle={toggleYear} />
          {filters.years.length > 0 && validMonths.length > 0 && (
            <OptionGroup label="Months" hint="For selected topics & years" options={validMonths} selected={filters.months} onToggle={toggleMonth} format={(month) => MONTH_NAMES[month - 1]} />
          )}
        </div>
      )}
    </div>
  );
};

export default BlogFilters;
