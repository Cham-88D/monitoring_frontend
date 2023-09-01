import Sleep from "../../../models/Sleep";
import connectDB from "../../../utils/db";

connectDB();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    try {
      const sleep = await Sleep.find({ username: email });

      if (!sleep) {
        return res.status(404).json({ error: "not found" });
      }
      let pos = 0;
      let neg = 0;
      let total = 0;

      sleep.forEach(myFunction);
      function myFunction(x) {
        if (x.stress === "not sleepy") {
          pos += 1;
          total += 1;
        }

        if (x.stress === "sleepy") {
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
