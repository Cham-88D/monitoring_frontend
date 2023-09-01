import Position from "../../../models/Pos";
import connectDB from "../../../utils/db";
import moment from "moment";
connectDB();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    try {
      const position = await Position.find({ username: email });

      if (!position) {
        return res.status(404).json({ error: "not found" });
      }

      const currentDate = moment();
      const startOfCurrentWeek = currentDate.clone().startOf("week");
      const endOfCurrentWeek = currentDate.clone().endOf("week");

      const filteredData = position.filter((item) => {
        const itemDate = moment(item.date);
        return itemDate.isBetween(
          startOfCurrentWeek,
          endOfCurrentWeek,
          null,
          "[]"
        );
      });

      const startOfPreviousWeek = currentDate
        .clone()
        .startOf("week")
        .subtract(7, "days");
      const endOfPreviousWeek = currentDate
        .clone()
        .startOf("week")
        .subtract(1, "days");

      const filteredData2 = position.filter((item) => {
        const itemDate = moment(item.date);
        return itemDate.isBetween(
          startOfPreviousWeek,
          endOfPreviousWeek,
          null,
          "[]"
        );
      });

      let dif = filteredData.length - filteredData2.length;
      let dt = [];

      filteredData.forEach(myFunction);
      function myFunction(x) {
        if (x.posture === "Correct") {
          let p1 = {
            date: x.date,
            correct: 0,
            incorrect: 1,
          };

          dt.push(p1);
        }

        if (x.posture === "Incorrect") {
          let p2 = {
            date: x.date,
            correct: 1,
            incorrect: 0,
          };

          dt.push(p2);
        }
      }

      let chartData = {
        data: dt,
        count: dif,
      };

      res.status(200).json({ chartdata: chartData });
    } catch (error) {
      console.error("Error", error.message);
      res.status(500).json({ error: "Server error" });
    }
  }
}
