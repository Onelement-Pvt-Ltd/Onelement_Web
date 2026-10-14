import mongoose from "mongoose";
import Technology from "./technology.model.js";

// GET ALL TECHNOLOGIES
export const getAllTechnologies = async (req, res) => {
  try {
    const { page, limit } = req.validated.query;

    const skip = (page - 1) * limit;

    const filter = {
      isDeleted: false,
      isActive: true
    };

    const total = await Technology.countDocuments(filter);

    const technologies = await Technology.find(filter)
      .select("-__v -createdAt -updatedAt")
      .sort({ createdAt: -1, _id: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    res.status(200).json({
      success: true,
      data: technologies,
      pagination: {
        total,
        page,
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
    const { slug } = req.validated.params;

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

export const getRelatedTechnologies = async (req, res) => {
  try {
    const currentTechnology = await Technology.exists({
      slug: req.validated.params.slug,
      isDeleted: false,
      isActive: true
    });

    if (!currentTechnology) {
      return res.status(404).json({
        success: false,
        message: "Technology not found"
      });
    }

    const technologies = await Technology.find({
      slug: mongoose.trusted({ $ne: req.validated.params.slug }),
      isDeleted: false,
      isActive: true
    })
      .select("title slug banner description.highlightTitle description.paragraphs")
      .sort({ createdAt: -1 })
      .limit(3)
      .lean();

    res.status(200).json({ success: true, data: technologies });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};
