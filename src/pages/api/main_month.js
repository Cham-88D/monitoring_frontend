import { HealthAndSafety } from "@mui/icons-material";
import Eye from "../../models/Eye";
import Position from "../../models/Pos";
import Stress from "../../models/Stress";
import connectDB from "../../utils/db";
import Sleep from "../../models/Sleep";
import moment from "moment";
connectDB();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    try {
      const eye = await Eye.find({ username: email });
      const position = await Position.find({ username: email });
      const stress = await Stress.find({ username: email });
      const sleep = await Sleep.find({ username: email });
      if (!eye || !position || !stress || !sleep) {
        return res.status(404).json({ error: "not found" });
      }

      const currentDate = moment();
      const startOfCurrentWeek = currentDate.clone().startOf("month");
      const endOfCurrentWeek = currentDate.clone().endOf("month");

      const filteredData = eye.filter((item) => {
        const itemDate = moment(item.date);
        return itemDate.isBetween(
          startOfCurrentWeek,
          endOfCurrentWeek,
          null,
          "[]"
        );
      });

      const filteredData2 = position.filter((item) => {
        const itemDate = moment(item.date);
        return itemDate.isBetween(
          startOfCurrentWeek,
          endOfCurrentWeek,
          null,
          "[]"
        );
      });

      const filteredData3 = stress.filter((item) => {
        const itemDate = moment(item.date);
        return itemDate.isBetween(
          startOfCurrentWeek,
          endOfCurrentWeek,
          null,
          "[]"
        );
      });

      const filteredData4 = sleep.filter((item) => {
        const itemDate = moment(item.date);
        return itemDate.isBetween(
          startOfCurrentWeek,
          endOfCurrentWeek,
          null,
          "[]"
        );
      });

     
     
      let dt = [];

      filteredData.forEach(myFunction);
      function myFunction(x) {
        if (x.prediction === "Eyes Open") {
          let p1 = {
            date: x.date,
            Healthy: 1,
            Not_Healthy: 0,
          };

          dt.push(p1);
        }

        if (x.prediction === "Eyes Close") {
          let p2 = {
            date: x.date,
            Healthy: 0,
            Not_Healthy: 1,
          };

          dt.push(p2);
        }
      }

      filteredData3.forEach(myFunction2);
      function myFunction2(x) {
        if (x.stress === "Not Stress") {
          let p1 = {
            date: x.date,
            Healthy: 1,
            Not_Healthy: 0,
          };

          dt.push(p1);
        }

        if (x.stress === "Stress") {
          let p2 = {
            date: x.date,
            Healthy: 0,
            Not_Healthy: 1,
          };

          dt.push(p2);
        }
      }

      filteredData2.forEach(myFunction3);
      function myFunction3(x) {
        if (x.posture === "Correct") {
          let p1 = {
            date: x.date,
            Healthy: 1,
            Not_Healthy: 0,
          };

          dt.push(p1);
        }

        if (x.posture === "Incorrect") {
          let p2 = {
            date: x.date,
            Healthy: 0,
            Not_Healthy: 1,
          };

          dt.push(p2);
        }
      }



      filteredData4.forEach(myFunction4);
      function myFunction4(x) {
        if (x.stress === "sleepy") {
          let p1 = {
            date: x.date,
            Healthy: 0,
            Not_Healthy: 1,
          };

          dt.push(p1);
        }

        if (x.stress === "not sleepy") {
          let p2 = {
            date: x.date,
            Healthy: 1,
            Not_Healthy: 0,
          };

          dt.push(p2);
        }
      }
      let chartData = {
        data: dt,
      };

      res.status(200).json({ chartdata: chartData });
    } catch (error) {
      console.error("Error", error.message);
      res.status(500).json({ error: "Server error" });
    }
  }
}
