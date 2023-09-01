import mongoose from 'mongoose';

const positionSchema = new mongoose.Schema({
    username: String,
    posture: String,
    confidence: Number,
    date: String,
    time: String,
    image: String

});

const Position = mongoose.models.Position || mongoose.model("Position", positionSchema,"position");

export default Position;