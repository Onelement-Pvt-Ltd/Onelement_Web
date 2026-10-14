import mongoose from "mongoose";

export const buildBlogFilter = ({ category = [], year = [], month = [] }) => {
  const filter = {};

  if (category.length) {
    filter.category = mongoose.trusted({ $in: category });
  }

  if (year.length) {
    const ranges = year.flatMap((selectedYear) =>
      (month.length ? month : [null]).map((selectedMonth) => ({
        publishedAt: mongoose.trusted({
          $gte: new Date(Date.UTC(selectedYear, selectedMonth ? selectedMonth - 1 : 0, 1)),
          $lt: new Date(
            Date.UTC(selectedYear + (selectedMonth ? 0 : 1), selectedMonth || 0, 1)
          ),
        }),
      }))
    );

    if (ranges.length === 1) Object.assign(filter, ranges[0]);
    else filter.$or = ranges;
  }

  return filter;
};
