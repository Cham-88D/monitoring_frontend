import Eye from "../../../models/Eye";
import connectDB from "../../../utils/db";

connectDB();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    try {
      const eye = await Eye.find({ username: email });

      if (!eye) {
        return res.status(404).json({ error: "not found" });
      }
      let pos = 0;
      let neg = 0;
      let total = 0;
 
      eye.forEach(myFunction);
      function myFunction(x) {
        if (x.prediction === "Eyes Open") {
          pos += 1;
          total += 1;
        }

        if (x.prediction === "Eyes Close") {
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
