import mongoose from 'mongoose';

async function connectDB() {
  try {
    await mongoose.connect("mongodb+srv://monitor:1234@cluster0.ysfwo.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
}

export default connectDB;
