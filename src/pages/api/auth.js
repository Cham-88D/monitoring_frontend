import User from "../../models/User";
import connectDB from "../../utils/db";

connectDB();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email:email });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      const isPasswordValid = password ===user.password;

      if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
      res.status(200).json({ email:user.email });
    } catch (error) {
      console.error("Error logging in:", error.message);
      res.status(500).json({ error: "Server error" });
    }
  }
}
