import Stress from "../../../models/Stress";
import connectDB from "../../../utils/db";

connectDB();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    try {
      const stress = await Stress.find({ username: email });

      if (!stress) {
        return res.status(404).json({ error: "not found" });
      }
      let pos = 0;
      let neg = 0;
      let total = 0;

      stress.forEach(myFunction);
      function myFunction(x) {
        if (x.stress === "Not Stress") {
          pos += 1;
          total += 1;
        }

        if (x.stress === "Stress") {
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
