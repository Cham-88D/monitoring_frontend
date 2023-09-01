import { useEffect, useState } from "react";
import { Box, CardContent, Typography, Stack, Container } from "@mui/material";
import axios from "axios";
import { BarChart, Bar, XAxis, Tooltip, Legend } from "recharts";
import SpinnerAnimation from "../../components/spinner";

const renderLegend = (props) => {
  const { payload } = props;
  return (
    <ul style={{ listStyle: "inne", padding: 0 }}>
      {payload.map((entry, index) => (
        <li
          key={`item-${index}`}
          style={{
            marginRight: 20,
            display: "flex",
            alignItems: "center",
            fontWeight: "bold",
          }}
        >
          <span
            style={{
              backgroundColor: entry.color,
              width: 20,
              height: 20,
              marginRight: 5,
            }}
          />
          {entry.value}
        </li>
      ))}
    </ul>
  );
};

export const EyeB = () => {
  const [data, setData] = useState([]);
  const [indata, setin] = useState(true);
  const [sp, setSP] = useState(true);
  const [diff, setDiff] = useState(0);

  const getData = async () => {
    setSP(false);
    setin(true);
    const email = localStorage.getItem('email');
    try {
      const response = await axios.post("/api/eye/eye_bar", {
        email: email,
      });

      if (response.status === 200) {
        setSP(true);
        setData(response.data.chartdata.data);
        setDiff(response.data.chartdata.count);
        if (response.data.chartdata.data.length === 0) {
          setin(false);
        }
      }
    } catch (error) {
      console.error("Error:", error.message);
      setSP(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const dayCounts = data.reduce((counts, item) => {
    const day = item.date;
    const correctCount = item.correct;
    const incorrectCount = item.incorrect;

    if (!counts[day]) {
      counts[day] = { correct: 0, incorrect: 0 };
    }

    counts[day].correct += correctCount;
    counts[day].incorrect += incorrectCount;

    return counts;
  }, {});

  const processedData = Object.keys(dayCounts).map((day) => ({
    day,
    correct: dayCounts[day].correct,
    incorrect: dayCounts[day].incorrect,
  }));

  return (
    <div>
      <Box>
        <CardContent>
          <Container sx={{ pt: 0 }}>
            <Typography variant="h6">Weekly Detections</Typography>
            <Typography variant="head2">{data.length} this week</Typography>
            <Box sx={{ display: "flex", mt: 3 }}>
              <Typography
                variant="h62"
                sx={{ color: "#146C9D" , marginRight: 1 }}
              >
                {diff}
              </Typography>
              <Typography variant="h62">vs last Week</Typography>
            </Box>

            {sp ? (
              <Stack spacing={3}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 5,
                  }}
                >
                  {indata ? (
                    <BarChart width={600} height={400} data={processedData}>
                      <XAxis dataKey="day"  tickFormatter={(day) => day.split('-')[2]}/>
                      <Tooltip />
                      <Legend content={renderLegend} />
                      <Bar dataKey="correct" fill="#aee7f5" barSize={20} />
                      <Bar dataKey="incorrect" fill="#59CBE5" barSize={20} />
                    </BarChart>
                  ) : (
                    <Box
                      sx={{
                        mt: 10,
                      }}
                    >
                      <Typography variant="head2">No Data</Typography>
                    </Box>
                  )}
                </Box>
              </Stack>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 5,
                }}
              >
                <SpinnerAnimation />
              </Box>
            )}
          </Container>
        </CardContent>
      </Box>
    </div>
  );
};
