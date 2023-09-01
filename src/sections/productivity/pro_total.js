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

export const ProT = () => {
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
    const email = localStorage.getItem("email");
    try {
      const response = await axios.post("/api/pro/pro_total", {
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
                  The history view function allows you to track and analyze your
                  sleepiness detection and productivity records, enabling you to
                  gain insights, optimize your habits, and enhance overall
                  well-being and efficiency.
                </Typography>
              </Box>
              <Box
                sx={{
                  backgroundColor: "rgba(189, 222, 198, 0.50)",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "20px",
                }}
              >
                <Typography variant="h62">Total  Detections: </Typography>
                <Typography
                  variant="h6"
                  sx={{ marginLeft: 3, color: "#149D52" }}
                >
                  {total}
                </Typography>
              </Box>
              <Grid container spacing={3}>
                <Grid item xs={5}>
                  <Box
                    sx={{
                      backgroundColor: "rgba(189, 222, 198, 0.50)",
                      borderRadius: "5px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "20px",
                    }}
                  >
                    <Typography variant="h62">Sleepiness</Typography>
                    <Typography
                      variant="h6"
                      sx={{ marginLeft: 1, color: "#149D52" }}
                    >
                      {cal(neg, total)}%
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={5}>
                  <Box
                    sx={{
                      backgroundColor: "rgba(189, 222, 198, 0.50)",
                      borderRadius: "5px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "20px",
                    }}
                  >
                    <Typography variant="h62">Productivity</Typography>
                    <Typography
                      variant="h6"
                      sx={{ marginLeft: 1, color: "#149D52" }}
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
