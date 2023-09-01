import mongoose from 'mongoose';

const proSchema = new mongoose.Schema({
    username: String,
    stress: String,
    date: String,
    time: String,
    image: String

});

const Sleep = mongoose.models.Sleep || mongoose.model("Sleep", proSchema ,"sleep");

export default Sleep;