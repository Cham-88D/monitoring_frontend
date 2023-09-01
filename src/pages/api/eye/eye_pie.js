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
      const now = new Date(); // Get the current date and time

      const filteredData = eye.filter((item) => {
        const itemDate = new Date(item.date);
        const timeDifference = now - itemDate;
        const hoursDifference = timeDifference / (1000 * 60 * 60);
        return hoursDifference <= 24;
      });

      let pos = 0;
      let neg = 0;

      filteredData.forEach(myFunction);
      function myFunction(x) {
        if (x.prediction === "Eyes Open") {
          pos += 1;
        }

        if (x.prediction === "Eyes Close") {
          neg += 1;
        }
      }
      let chartData = {
        Correct: pos,
        Incorrect: neg,
      };

      res.status(200).json({ chartdata: chartData });
    } catch (error) {
      console.error("Error", error.message);
      res.status(500).json({ error: "Server error" });
    }
  }
}
