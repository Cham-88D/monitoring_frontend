import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  birthday: String,
  gender:String,
  type:String

});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;