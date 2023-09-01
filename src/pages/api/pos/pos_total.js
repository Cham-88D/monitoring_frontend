import Position from "../../../models/Pos";
import connectDB from "../../../utils/db";

connectDB();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    try {
      const posture = await Position.find({ username: email });

      if (!posture) {
        return res.status(404).json({ error: "not found" });
      }
      let pos = 0;
      let neg = 0;
      let total = 0;

      posture.forEach(myFunction);
      function myFunction(x) {
        if (x.posture === "Correct") {
          pos += 1;
          total += 1;
        }

        if (x.posture === "Incorrect") {
          neg += 1;
          total += 1;
        }
      }
      res.status(200).json({ total: total, pos: pos, neg: neg });
    } catch (error) {
      console.error("Error", error.message);
      res.status(500).json({ error: "Server error" });
    }
  }
}
