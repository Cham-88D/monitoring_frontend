import {
  Box,
  CardContent,
  Typography,
  Avatar,
  Stack,
  Grid,
} from "@mui/material";

export const PosTips = () => {
  return (
    <div>
      <Box>
        <CardContent sx={{ pt: 0 }}>
          <Box>
            <Typography variant="h6" fontFamily="Poppins">
              Benefits of Maintaining a Correct Posture
            </Typography>
            <Typography variant="head2" fontFamily="Poppins">
              Small habits, big health rewards
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
                <Grid item xs={6}>
                  <Box display="flex" alignItems="center">
                    <Avatar
                      alt="Image"
                      src={"/assets/a5.jpeg"}
                      sx={{
                        width: 40,
                        height: 40,
                        marginRight: 5,
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
                      }}
                    />
                    <Typography variant="body1">
                      {"Reduces risk of spinal problems"}
                    </Typography>
                  </Box>
                  <Box sx={{ py: "3%" }}></Box>
                  <Box display="flex" alignItems="center">
                    <Avatar
                      alt="Image"
                      src={"/assets/a7.jpeg"}
                      sx={{
                        width: 40,
                        height: 40,
                        marginRight: 5,
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
                      }}
                    />
                    <Typography variant="body1">
                      {"Reduces muscle imbalances"}
                    </Typography>
                  </Box>
                  <Box sx={{ py: "3%" }}></Box>
                  <Box display="flex" alignItems="center">
                    <Avatar
                      alt="Image"
                      src={"/assets/a12.jpeg"}
                      sx={{
                        width: 40,
                        height: 40,
                        marginRight: 5,
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
                      }}
                    />
                    <Typography variant="body1">
                      {"Improved breathing"}
                    </Typography>
                  </Box>{" "}
                  <Box sx={{ py: "3%" }}></Box>
                  <Box display="flex" alignItems="center">
                    <Avatar
                      alt="Image"
                      src={"/assets/a11.jpeg"}
                      sx={{
                        width: 40,
                        height: 40,
                        marginRight: 5,
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
                      }}
                    />
                    <Typography variant="body1">
                      {"Enhanced confidence"}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box display="flex" alignItems="center">
                    <Avatar
                      alt="Image"
                      src={"/assets/a6.jpeg"}
                      sx={{
                        width: 40,
                        height: 40,
                        marginRight: 5,
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
                      }}
                    />
                    <Typography variant="body1">
                      {"Increases natural energy"}
                    </Typography>
                  </Box>
                  <Box sx={{ py: "3%" }}></Box>
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
                      {"Improved digestion "}
                    </Typography>
                  </Box>
                  <Box sx={{ py: "3%" }}></Box>
                  <Box display="flex" alignItems="center">
                    <Avatar
                      alt="Image"
                      src={"/assets/a10.jpeg"}
                      sx={{
                        width: 40,
                        height: 40,
                        marginRight: 5,
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
                      }}
                    />
                    <Typography variant="body1">
                      {" Stay hydrated and nourished"}
                    </Typography>
                  </Box>
                  <Box sx={{ py: "3%" }}></Box>
                  <Box display="flex" alignItems="center">
                    <Avatar
                      alt="Image"
                      src={"/assets/a9.jpeg"}
                      sx={{
                        width: 40,
                        height: 40,
                        marginRight: 5,
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
                      }}
                    />
                    <Typography variant="body1">
                      {"Long-term health benefits"}
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
