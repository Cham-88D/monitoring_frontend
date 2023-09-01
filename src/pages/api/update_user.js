import User from "../../models/User";
import connectDB from "../../utils/db";

connectDB();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    try {
      const updatedItem = await User.findOneAndUpdate(
        { email: email },
        req.body,
        {
          new: true,
        }
      );

      res.status(200).json({ message: "User Updated" });
    } catch (error) {
      console.error("Error registering user:", error.message);
      res.status(500).json({ error: error });
    }
  }
}
