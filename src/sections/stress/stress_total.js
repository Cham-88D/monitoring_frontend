import { useEffect, useState } from "react";
import {
  Box,
  CardContent,
  Typography,
  Stack,
  Grid,
  Container,
} from "@mui/material";
import axios from "axios";

export const StressT = () => {
  const [total, setTotal] = useState(0);
  const [pos, setPos] = useState(0);
  const [neg, setNeg] = useState(0);

  const cal = (v1, v2) => {
    if (v1 !== 0) {
      return Math.trunc((v1 / v2) * 100);
    } else {
      return v1;
    }
  };

  const getData = async () => {
    const email = localStorage.getItem('email');
    try {
      const response = await axios.post("/api/stress/stress_total", {
        email: email,
      });

      if (response.status === 200) {
        setTotal(response.data.total);
        setPos(response.data.pos);
        setNeg(response.data.neg);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Box>
        <CardContent>
          <Container sx={{ width: "80%" }}>
            <Stack spacing={3}>
              <Box>
                <Typography variant="head2">
                  The history view function enables tracking and analyzing
                  stress over time, offering valuable insights for proactive
                  intervention, promoting well-being, and optimizing mental and
                  physical health management.
                </Typography>
              </Box>
              <Box
                sx={{
                  backgroundColor: "rgba(131, 130, 222, 0.40)",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "20px",
                }}
              >
                <Typography variant="h62">Total Stress Detections: </Typography>
                <Typography
                  variant="h6"
                  sx={{ marginLeft: 3, color: "#6463D6" }}
                >
                  {total}
                </Typography>
              </Box>
              <Grid container spacing={3}>
                <Grid item xs={5}>
                  <Box
                    sx={{
                      backgroundColor: "rgba(131, 130, 222, 0.40)",
                      borderRadius: "5px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "20px",
                    }}
                  >
                    <Typography variant="h62">Stress </Typography>
                    <Typography
                      variant="h6"
                      sx={{ marginLeft: 1, color: "#6463D6" }}
                    >
                      {cal(neg, total)}%
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={5}>
                  <Box
                    sx={{
                      backgroundColor: "rgba(131, 130, 222, 0.40)",
                      borderRadius: "5px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "20px",
                    }}
                  >
                    <Typography variant="h62">No Stress</Typography>
                    <Typography
                      variant="h6"
                      sx={{ marginLeft: 1, color: "#6463D6" }}
                    >
                      {cal(pos, total)}%
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Stack>
          </Container>
        </CardContent>
      </Box>
    </div>
  );
};
