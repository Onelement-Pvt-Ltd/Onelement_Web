import Technology from "./technology.model.js";

// GET ALL TECHNOLOGIES
export const getAllTechnologies = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    const skip = (page - 1) * limit;

    const filter = {
      isDeleted: false,
      isActive: true
    };

    const total = await Technology.countDocuments(filter);

    const technologies = await Technology.find(filter)
      .select("-__v -createdAt -updatedAt")
      .skip(skip)
      .limit(Number(limit))
      .lean();

    res.status(200).json({
      success: true,
      data: technologies,
      pagination: {
        total,
        page: Number(page),
        totalPages: Math.ceil(total / limit)
      }
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};
// GET TECHNOLOGY BY SLUG
export const getTechnologyBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const technology = await Technology.findOne({
      slug,
      isDeleted: false,
      isActive: true
    })
      .select("-__v -createdAt -updatedAt")
      .lean();

    if (!technology) {
      return res.status(404).json({
        success: false,
        message: "Technology not found"
      });
    }

    res.status(200).json({
      success: true,
      data: technology
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};
