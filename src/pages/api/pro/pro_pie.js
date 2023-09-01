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
      const now = new Date(); 

      const filteredData = sleep.filter((item) => {
        const itemDate = new Date(item.date);
        const timeDifference = now - itemDate;
        const hoursDifference = timeDifference / (1000 * 60 * 60);
        return hoursDifference <= 24;
      });

      let pos = 0;
      let neg = 0;

      filteredData.forEach(myFunction);
      function myFunction(x) {
        if (x.stress === "not sleepy") {
          pos += 1;
        }

        if (x.stress === "sleepy") {
          neg += 1;
        }
      }
      let chartData = {
        no_sleep: pos,
        sleep: neg,
      };

      res.status(200).json({ chartdata: chartData });
    } catch (error) {
      console.error("Error", error.message);
      res.status(500).json({ error: "Server error" });
    }
  }
}
