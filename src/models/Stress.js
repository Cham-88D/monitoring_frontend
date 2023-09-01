import mongoose from 'mongoose';

const stressSchema = new mongoose.Schema({
    username: String,
    stress: String,
    confidence: Number,
    date: String,
    time: String,
    image: String

});

const Stress = mongoose.models.Stress || mongoose.model("Stress", stressSchema,"stress");

export default Stress;