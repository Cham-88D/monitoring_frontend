import {
  Box,
  CardContent,
  Typography,
  Stack,
  Grid,
  Avatar,
} from "@mui/material";

export const EyeTips = () => {
  return (
    <div>
      <Box>
        <CardContent sx={{ pt: 0 }}>
          <Box>
            <Typography variant="h6" fontFamily="Poppins">
              Things to maintain
            </Typography>
            <Typography variant="head2" fontFamily="Poppins">
              Be healthy with great habits.{" "}
            </Typography>

            <Stack
              component="ul"
              spacing={1}
              sx={{
                listStyle: "none",
                p: 0,
                m: 0,
                py: 4,
              }}
            >
              <Grid container spacing={0}>
                <Grid item xs={7}>
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
                      {" Take break from the screen every 20 minutes"}
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
                      {" Maintain the 50cm-60cm distance with the screens"}
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
                      {" Keep eye level to the top of the screen"}
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
                      {"   Look away from screen every 20 minutes"}
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
