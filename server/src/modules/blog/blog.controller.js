import Blog from "./blog.model.js";

export const getBlogs = async (req, res) => {
  try {
    const {
      category = [], year = [], month = [], page = 1, limit = 6
    } = req.validated.query;

    const filter = {};
    if (category.length) filter.category = { $in: category };

    if (year.length) {
      const ranges = year.flatMap((selectedYear) =>
        (month.length ? month : [null]).map((selectedMonth) => ({
          publishedAt: {
            $gte: new Date(Date.UTC(selectedYear, selectedMonth ? selectedMonth - 1 : 0, 1)),
            $lt: new Date(Date.UTC(selectedYear + (selectedMonth ? 0 : 1), selectedMonth || 0, 1))
          }
        }))
      );
      if (ranges.length === 1) Object.assign(filter, ranges[0]);
      else filter.$or = ranges;
    }

    const skip = (page - 1) * limit;

    const [total, blogs] = await Promise.all([
      Blog.countDocuments(filter),
      Blog.find(filter)
        .select("title slug excerpt coverImage category author publishedAt")
        .sort({ publishedAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean()
    ]);

    res.json({
      success: true,
      data: blogs,
      pagination: {
        total,
        page,
        totalPages: Math.ceil(total / limit)
      }
    });

  } catch (error) {
    console.error("Failed to fetch blogs", error);
    res.status(500).json({ message: "Failed to fetch blogs" });
  }
};

export const getHomeBlogs = async (req, res) => {
  try {
    const limit = 4;

    const blogs = await Blog.find({})
      .sort({ publishedAt: -1 }) // latest first
      .limit(limit)
      .select("title slug excerpt coverImage category author publishedAt")
      .lean();

    res.status(200).json({
      success: true,
      data: blogs
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch home blogs"
    });
  }
};

export const getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.validated.params.slug }).lean();

    if (!blog) return res.status(404).json({ message: "Not found" });

    res.json({ success: true, data: blog });
  } catch (error) {
    console.error("Failed to fetch blog", error);
    res.status(500).json({ message: "Failed to fetch blog" });
  }
};

export const createBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);

    res.status(201).json({
      success: true,
      data: blog
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        message: "Slug already exists"
      });
    }

    console.error("Failed to create blog", error);
    res.status(500).json({ message: "Failed to create blog" });
  }
};
export const getBlogMeta = async (req, res) => {
  try {
    const grouped = await Blog.aggregate([
      { $group: {
        _id: {
          category: "$category",
          year: { $year: { date: "$publishedAt", timezone: "UTC" } },
          month: { $month: { date: "$publishedAt", timezone: "UTC" } }
        },
        count: { $sum: 1 }
      } },
      { $sort: { "_id.category": 1, "_id.year": -1, "_id.month": 1 } }
    ]);

    const facets = grouped.map(({ _id, count }) => ({ ..._id, count }));
    const categories = [...new Set(facets.map((item) => item.category))];
    const years = [...new Set(facets.map((item) => item.year))].sort((a, b) => b - a);

    res.json({
      success: true,
      data: {
        categories,
        years,
        facets
      }
    });

  } catch (error) {
    console.error("Failed to fetch blog filters", error);
    res.status(500).json({ message: "Failed to fetch blog filters" });
  }
};

export const getRelatedBlogs = async (req, res) => {
  try {
    const currentBlog = await Blog.findOne({
      slug: req.validated.params.slug
    })
      .select("category")
      .lean();

    if (!currentBlog) {
      return res.status(404).json({ message: "Not found" });
    }

    const blogs = await Blog.find({
      category: currentBlog.category,
      slug: { $ne: req.validated.params.slug }
    })
      .select("title slug excerpt coverImage category author publishedAt")
      .sort({ publishedAt: -1 })
      .limit(3)
      .lean();

    res.json({ success: true, data: blogs });
  } catch (error) {
    console.error("Failed to fetch related blogs", error);
    res.status(500).json({ message: "Failed to fetch related blogs" });
  }
};
