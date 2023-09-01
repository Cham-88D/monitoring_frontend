import {
  Box,
  CardContent,
  Typography,
  Avatar,
  Stack,
  Grid,
  Link,
} from "@mui/material";
import NextLink from "next/link";

export const StressTips = () => {
  return (
    <div>
      <Box>
        <CardContent sx={{ pt: 0 }}>
          <Box>
            <Typography variant="h6">Reducing Tips</Typography>

            <Typography variant="head2">
              Unwind and find calm with positive habits.
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
                      src={"/assets/a2.jpeg"}
                      sx={{
                        width: 40,
                        height: 40,
                        marginRight: 5,
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
                      }}
                    />
                    <Link
                      component={NextLink}
                      href="/tip1"
                      underline="hover"
                      variant="body1"
                    >
                      <Typography variant="body1">
                        {"Physical activities"}
                      </Typography>
                    </Link>
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
                    <Link
                      component={NextLink}
                      href="/tip2"
                      underline="hover"
                      variant="body1"
                    >
                      <Typography variant="body1">
                        {"Relaxation techniques"}
                      </Typography>
                    </Link>
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
                    <Link
                      component={NextLink}
                      href="/tip3"
                      underline="hover"
                      variant="body1"
                    >
                      <Typography variant="body1">
                        {"Creative activities"}
                      </Typography>
                    </Link>
                  </Box>
                </Grid>
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
                    <Link
                      component={NextLink}
                      href="/tip4"
                      underline="hover"
                      variant="body1"
                    >
                      <Typography variant="body1">
                        {"Nature-based activities"}
                      </Typography>
                    </Link>
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
                    <Link
                      component={NextLink}
                      href="/tip5"
                      underline="hover"
                      variant="body1"
                    >
                      <Typography variant="body1">{"Self-care"}</Typography>
                    </Link>
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
                    <Link
                      component={NextLink}
                      href="/tip6"
                      underline="hover"
                      variant="body1"
                    >
                      <Typography variant="body1">
                        {" Social support"}
                      </Typography>
                    </Link>
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
