import Head from "next/head";
import { Box, Typography, Unstable_Grid2 as Grid } from "@mui/material";
import Update from "../sections/account/update";
const Page = () => (
  <>
    <Head>
      <title>Account</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 2,
      }}
    >
      <Grid container spacing={0} justifyContent="center" alignItems="center">
        <Typography variant="head">My Profile</Typography>
      </Grid>
      <Box sx={{ py: "1%" }}></Box>
      <Grid container spacing={0} sx={{ marginLeft: 20 }}>
        <Grid container item={true} xs={12}>
          <Grid item={true} xs={4}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              py="20%"
            >
              <img src="/assets/pro.jpeg" alt="Centered Image" height="400px" />
            </Box>
          </Grid>
          <Grid item={true} xs={8} >
            <Update />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  </>
);

export default Page;
