import { useEffect, useState } from "react";
import { Box, CardContent, Typography, Stack, Container } from "@mui/material";
import axios from "axios";
import SpinnerAnimation from "../../components/spinner";
import { UncontrolledReactSVGPanZoom } from "react-svg-pan-zoom";

export const DayChart = () => {
  const [data, setData] = useState([]);
  const [indata, setin] = useState(true);
  const [sp, setSP] = useState(true);

  const getData = async () => {
    setSP(false);
    setin(true);
    const email = localStorage.getItem("email");
    try {
      const response = await axios.post("/api/main_day", {
        email: email,
      });

      if (response.status === 200) {
        setSP(true);
        setData(response.data.chartdata);
        if (response.data.chartdata.length === 0) {
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


  const minitiatureProps = {
    miniaturePosition: "none",
  }
  
  const toolbarProps = {
    toolbarPosition: "none"
  }
  return (
    <div>
      <Box>
        <CardContent>
          <Container sx={{ pt: 0 }}>
            <Typography variant="h6">Your Rating</Typography>
            {sp ? (
              <Stack spacing={3}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 1,
                  }}
                >
                  {indata ? (
                    <div
                      style={{
                        width: "100%",
                      }}
                    >
                      <UncontrolledReactSVGPanZoom
                        width={450}
                        height={600}
                        value={null}
                        tool="auto"
                        toolbarProps={toolbarProps}
                        miniatureProps={{
                          width: 0, 
                          height: 0, 
                        }}
                        detectAutoPan={false}

                      >
                        <svg
                          width={450}
                          height={600}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {data.map((circle, index) => (
                            <g key={index}>
                              <circle
                                cx={circle.cx}
                                cy={circle.cy}
                                r={circle.r}
                                fill={circle.color}
                              />
                              <text
                                x={circle.cx}
                                y={circle.cy}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fill="white"
                              >
                                {circle.name}
                              </text>
                               <text
                                x={circle.cx}
                                y={circle.cy+20}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fill="white"
                              >
                                {circle.percentage}
                              </text>
                            </g>
                          ))}
                        </svg>
                      </UncontrolledReactSVGPanZoom>
                    </div>
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
