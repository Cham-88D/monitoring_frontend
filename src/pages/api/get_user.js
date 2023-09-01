import User from "../../models/User";
import connectDB from "../../utils/db";

connectDB();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
    
      res.status(200).json({ user:user });
    } catch (error) {
      console.error("Error in:", error.message);
      res.status(500).json({ error: "Server error" });
    }
  }
}
