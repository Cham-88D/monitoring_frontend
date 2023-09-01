import { useEffect, useState } from "react";
import { Box, CardContent, Typography, Stack, Container } from "@mui/material";
import axios from "axios";
import { LineChart, Line, XAxis, Tooltip, Legend } from "recharts";
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

export const WeekChart = () => {
  const [data, setData] = useState([]);
  const [indata, setin] = useState(true);
  const [sp, setSP] = useState(true);
  const [diff, setDiff] = useState(0);

  const getData = async () => {
    setSP(false);
    setin(true);
    const email = localStorage.getItem("email");
    try {
      const response = await axios.post("/api/main_week", {
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
    const healthyCount = item.Healthy;
    const nothealthyCount = item.Not_Healthy;

    if (!counts[day]) {
      counts[day] = { Healthy: 0, Not_Healthy: 0 };
    }

    counts[day].Healthy += healthyCount;
    counts[day].Not_Healthy += nothealthyCount;

    return counts;
  }, {});

  const processedData = Object.keys(dayCounts).map((day) => ({
    day,
    Healthy: dayCounts[day].Healthy,
    Not_Healthy: dayCounts[day].Not_Healthy,
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
                sx={{ color: "#5BDA8A", marginRight: 1 }}
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
                    <LineChart width={500} height={300} data={processedData}>
                      <XAxis dataKey="day" tickFormatter={(day) => day.split('-')[2]}/>
                      <Tooltip />
                      <Legend content={renderLegend} />

                      <Line
                        type="linear"
                        dataKey="Healthy"
                        stroke="#5BDA8A"
                        strokeWidth={3}
                        dot={{ stroke: "#5BDA8A", strokeWidth: 2 }}
                      />
                      <Line
                        type="linear"
                        dataKey="Not_Healthy"
                        stroke="#bdbfbf"
                        strokeWidth={3}
                        dot={{ stroke: "#bdbfbf", strokeWidth: 2 }}
                      />
                    </LineChart>
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
