import Head from "next/head";
import {
  Box,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { Cam } from "src/sections/calibrate/cam";
const Page = () => (
  <>
    <Head>
      <title>Calibrate</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 2,
      }}
    >
      <Grid container spacing={0} justifyContent="center" alignItems="center">
        <Typography variant="head">Calibrate Yourself</Typography>
      </Grid>

      <Box sx={{ py: "1%" }}></Box>
      <Grid container spacing={0} justifyContent="center" alignItems="center">
        <Cam />
      </Grid>
    </Box>
  </>
);

export default Page;
