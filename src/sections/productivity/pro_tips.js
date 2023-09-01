import {
  Box,
  CardContent,
  Typography,
  Avatar,
  Stack,
  Grid,
} from "@mui/material";

export const ProTips = () => {
  return (
    <div>
      <Box>
        <CardContent sx={{ pt: 0 }}>
          <Box>
            <Typography variant="h6">Reducing Tips</Typography>
            <Typography variant="head2">
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
                      {"Optimize your workstation"}
                    </Typography>
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
                      {"Take regular breaks"}
                    </Typography>
                  </Box>
                  <Box sx={{ py: "3%" }}></Box>
                  <Box display="flex" alignItems="center">
                    <Avatar
                      alt="Image"
                      src={"/assets/bg2.jpeg"}
                      sx={{
                        width: 40,
                        height: 40,
                        marginRight: 5,
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
                      }}
                    />
                    <Typography variant="body1">
                      {"Prioritize tasks with a to-do list"}
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
                    <Typography variant="body1">
                      {"Set realistic goals yourself"}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
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
                      {"Minimize distractions"}
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
                      {"Practice time blocking"}
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
                      {" Stay hydrated and nourished"}
                    </Typography>
                  </Box>
                  <Box sx={{ py: "3%" }}></Box>
                  <Box display="flex" alignItems="center">
                    <Avatar
                      alt="Image"
                      src={"/assets/a4.jpeg"}
                      sx={{
                        width: 40,
                        height: 40,
                        marginRight: 5,
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
                      }}
                    />
                    <Typography variant="body1">
                      {"Engage in physical activity"}
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
