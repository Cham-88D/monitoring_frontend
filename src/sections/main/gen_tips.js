import {
  Box,
  CardContent,
  Typography,
  Avatar,
  Stack,
  Grid,
} from "@mui/material";
import axios from "axios";
import { useEffect } from "react";

export const GenTips = () => {


  return (
    <div>
      <Box>
        <CardContent sx={{ pt: 0 }}>
          <Box>
            <Typography variant="h6" fontFamily="Poppins">
              General Tips
            </Typography>
            <Typography variant="head2" fontFamily="Poppins">
              Be healthy with great habits.
            </Typography>

            <Stack
              component="ul"
              spacing={1}
              sx={{
                listStyle: "none",
                p: 0,
                m: 0,
                py: 5,
              }}
            >
              <Grid container spacing={0}>
                <Grid item={true} xs={6}>
                  <Box display="flex" alignItems="center">
                    <Avatar
                      alt="Image"
                      src={"/assets/a1.jpeg"}
                      sx={{
                        width: 40,
                        height: 40,
                        marginRight: 5,
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
                      }}
                    />
                    <Typography variant="body1">
                      {"Take Healthy Meals"}
                    </Typography>
                  </Box>
                  <Box sx={{ py: "3%" }}></Box>
                  <Box display="flex" alignItems="center">
                    <Avatar
                      alt="Image"
                      src={"/assets/a2.jpeg"}
                      sx={{
                        width: 40,
                        height: 40,
                        marginRight: 5,
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
                      }}
                    />
                    <Typography variant="body1">{" Go to the Gym"}</Typography>
                  </Box>
                  <Box sx={{ py: "3%" }}></Box>
                  <Box display="flex" alignItems="center">
                    <Avatar
                      alt="Image"
                      src={"/assets/a3.jpeg"}
                      sx={{
                        width: 40,
                        height: 40,
                        marginRight: 5,
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
                      }}
                    />
                    <Typography variant="body1">
                      {"Gather with Friends"}
                    </Typography>
                  </Box>
                  <Box sx={{ py: "3%" }}></Box>
                  <Box display="flex" alignItems="center">
                    <Avatar
                      alt="Image"
                      src={"/assets/a8.jpeg"}
                      sx={{
                        width: 40,
                        height: 40,
                        marginRight: 5,
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
                      }}
                    />
                    <Typography variant="body1">
                      {"Be relax with Meditation"}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Stack>
          </Box>
        </CardContent>
      </Box>
    </div>
  );
};
