import mongoose from "mongoose";

const pointSchema = new mongoose.Schema({
  title: String,
  content: String
});

const technologySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },

    slug: {
      type: String,
      required: true,
      unique: true,
      index: true
    },

    banner: {
      image: String,
      subtitle: String
    },

    description: {
      highlightTitle: String,
      paragraphs: [String]
    },

    points: [pointSchema],

    isActive: {
      type: Boolean,
      default: true,
      index: true
    },

    isDeleted: {
      type: Boolean,
      default: false,
      index: true
    }
  },
  { timestamps: true }
);

// Compound index for performance
technologySchema.index({ slug: 1, isDeleted: 1 });
technologySchema.index({ isActive: 1, isDeleted: 1 });

export default mongoose.model("Technology", technologySchema);
