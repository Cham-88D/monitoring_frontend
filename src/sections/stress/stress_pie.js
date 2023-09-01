import { useEffect, useState } from "react";
import {
  Box,
  CardContent,
  Typography,
  Stack,
  Container,
} from "@mui/material";
import axios from "axios";
import { PieChart, Pie, Cell, Legend } from "recharts";
import SpinnerAnimation from "../../components/spinner";

const renderLegend = (props) => {
  const { payload } = props;
  return (
    <ul style={{ listStyle: 'none', padding: 0,  }}>
      {payload.map((entry, index) => (
        <li
          key={`item-${index}`}
          style={{
            marginRight: 20,
            display: 'flex',
            alignItems: 'center',
            fontWeight: 'bold', 
          }}
        >
          <span style={{ backgroundColor: entry.color, width: 20, height: 20, marginRight: 5 }} />
          {entry.value}
        </li>
      ))}
    </ul>
  );
};



export const StressP = () => {
  const [data, setData] = useState([]);
  const [nodata, setNo] = useState(true);
  const [sp, setSP] = useState(true);
  const COLORS = ["#6463D6", "#c7cceb"];

  const getData = async () => {
    setSP(false);
    setNo(true);
    const email = localStorage.getItem('email');
    try {
      const response = await axios.post("/api/stress/stress_pie", {
        email: email,
      });

      if (response.status === 200) {
        setSP(true);
        setData(response.data.chartdata);
        if (
          response.data.chartdata.stress === 0 &&
          response.data.chartdata.no_stress === 0
        ) {
          setNo(false);
        }
      }
    } catch (error) {
      console.error("Error:", error.message);
      setSP(false);
    }
  };

  const pieData = Object.keys(data).map((key) => ({
    name: key,
    value: data[key],
  }));

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Box>
        <CardContent>
          <Container sx={{ width: "80%" }}>
            <Typography variant="h6">Yesterday Detections</Typography>

            <Typography variant="head2">Last 24 hours</Typography>
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
                  {nodata ? (
                    <PieChart width={400} height={300}>
                      <Pie
                        data={pieData}
                        cx={200}
                        cy={150}
                        innerRadius={80}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                        label
                        iinstanceId="test"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))}
                      </Pie>
                      <Legend verticalAlign="bottom" height={10} content={renderLegend}/>
                    </PieChart>
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
