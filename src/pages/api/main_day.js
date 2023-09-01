import Eye from "../../models/Eye";
import Position from "../../models/Pos";
import Stress from "../../models/Stress";
import Sleep from "../../models/Sleep";
import connectDB from "../../utils/db";
connectDB();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    try {
      const eye = await Eye.find({ username: email }).limit(100);
      const position = await Position.find({ username: email }).limit(100);
      const stress = await Stress.find({ username: email }).limit(100);
      const sleep = await Sleep.find({ username: email }).limit(100);

      if (!eye || !position || !stress || !sleep) {
        return res.status(404).json({ error: "not found" });
      }

      let pos1 = 0;
      let neg1 = 0;
      let t1 = 0;

      let pos2 = 0;
      let neg2 = 0;
      let t2 = 0;

      let pos3 = 0;
      let neg3 = 0;
      let t3 = 0;

      let pos4 = 0;
      let neg4 = 0;
      let t4 = 0;

      eye.forEach(myFunction);
      function myFunction(x) {
        if (x.prediction === "Eyes Open") {
          pos1 += 1;
          t1 += 1;
        }

        if (x.prediction === "Eyes Close") {
          neg1 += 1;
          t1 += 1;
        }
      }

      stress.forEach(myFunction2);
      function myFunction2(x) {
        if (x.stress === "Not Stress") {
          pos2 += 1;
          t2 += 1;
        }

        if (x.stress === "Stress") {
          neg2 += 1;
          t2 += 1;
        }
      }

      position.forEach(myFunction3);
      function myFunction3(x) {
        if (x.posture === "Correct") {
          pos3 += 1;
          t3 += 1;
        }

        if (x.posture === "Incorrect") {
          neg3 += 1;
          t3 += 1;
        }
      }

      sleep.forEach(myFunction4);
      function myFunction4(x) {
        if (x.stress === "not sleepy") {
          pos4 += 1;
          t4 += 1;
        }

        if (x.stress === "sleepy") {
          neg4 += 1;
          t4 += 1;
        }
      }

      const cal = (v1, v2) => {
        if (v1 !== 0) {
          return Math.trunc((v1 / v2) * 100);
        } else {
          return v1;
        }
      };

      let chartData = [
        {
          cx: 110,
          cy: 150,
          r: 90,
          name: "Eye Health",
          percentage: cal(pos1, t1),
          color:"#2FBFDE"
        },
        {
          cx: 230,
          cy: 80,
          r: 70,
          name: "Mental Health",
          percentage: cal(pos2, t2),
          color:"#6463D6"
        },
        {
          cx: 310,
          cy: 250,
          r: 140,
          name: "Posture Health",
          percentage: cal(pos3, t3),
          color:"#F99C30"
        },
        {
          cx: 130,
          cy: 300,
          r: 110,
          name: "Productivity",
          percentage: cal(pos4, t4),
          color:"#5BDA8A"
        },
      ];
      res.status(200).json({ chartdata: chartData });
    } catch (error) {
      console.error("Error", error.message);
      res.status(500).json({ error: "Server error" });
    }
  }
}
