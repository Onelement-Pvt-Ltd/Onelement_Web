import Blog from "./blog.model.js";

export const getBlogs = async (req, res) => {
  try {
    const { category, year, month, page = 1, limit = 6 } = req.query;

    const filter = {};
      // console.log('fetched blog data')

    if (category) filter.category = category;

    if (year) {
      const start = new Date(year, month ? month - 1 : 0, 1);
      const end = month
        ? new Date(year, month, 0)
        : new Date(year, 11, 31);

      filter.publishedAt = { $gte: start, $lte: end };
    }

    const skip = (page - 1) * limit;

    const total = await Blog.countDocuments(filter);

    const blogs = await Blog.find(filter)
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(Number(limit))
      .lean();

    res.json({
      success: true,
      data: blogs,
      pagination: {
        total,
        page: Number(page),
        totalPages: Math.ceil(total / limit)
      }
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
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
    const blog = await Blog.findOne({ slug: req.params.slug }).lean();

    if (!blog) return res.status(404).json({ message: "Not found" });

    res.json({ success: true, data: blog });
  } catch (error) {
    res.status(500).json({ message: error.message });
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

    res.status(500).json({ message: error.message });
  }
};
export const getBlogMeta = async (req, res) => {
  try {
    const blogs = await Blog.find({}, "category publishedAt").lean();

    const categories = [...new Set(blogs.map(b => b.category))];

    const yearsSet = new Set();
    const monthsByYear = {};
  ;
    blogs.forEach(blog => {
      const date = new Date(blog.publishedAt);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      yearsSet.add(year);

      if (!monthsByYear[year]) {
        monthsByYear[year] = new Set();
      }

      monthsByYear[year].add(month);
    });

    const years = Array.from(yearsSet).sort((a, b) => b - a);

    Object.keys(monthsByYear).forEach(year => {
      monthsByYear[year] = Array.from(monthsByYear[year]).sort((a, b) => a - b);
    });

    res.json({
      success: true,
      data: {
        categories,
        years,
        monthsByYear
      }
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};