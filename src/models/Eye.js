import mongoose from "mongoose";

const eyeSchema = new mongoose.Schema({
  username: String,
  prediction: String,
  confidence: Number,
  x: Number,
  y: Number,
  distance: Number,
  date: String,
  time: String,
  image: String,
});

const Eye = mongoose.models.Eye || mongoose.model("Eye", eyeSchema, "eye");

export default Eye;
