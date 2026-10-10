import mongoose from "mongoose";

const analyticsSchema = new mongoose.Schema(
  {
    _id: { type: String, default: "site-views" },
    total: { type: Number, default: 0, min: 0 },
    daily: { type: Map, of: Number, default: {} },
    updatedAt: { type: Date, default: null },
  },
  { versionKey: false }
);

export default mongoose.model("Analytics", analyticsSchema);
