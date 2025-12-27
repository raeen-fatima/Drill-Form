import mongoose from "mongoose";

const DrillSchema = new mongoose.Schema({
  username: String,
  github: String,
  portfolio: String,
});

export default   mongoose.models.Drill || mongoose.model("Drill", DrillSchema);