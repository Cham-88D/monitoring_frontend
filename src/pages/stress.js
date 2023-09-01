import Head from "next/head";
import {
  Box,
  Container,
  Stack,
  Typography,
  Unstable_Grid2 as Grid,
  Paper,
} from "@mui/material";
import { StressTips } from "../sections/stress/stress_tips";
import { StressT } from "../sections/stress/stress_total";
import { StressP } from "src/sections/stress/stress_pie";
import { StressB } from "src/sections/stress/stress_bar";

const Page = () => (
  <>
    <Head>
      <title>Stress</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 2,
      }}
    >
      <Grid container spacing={0} justifyContent="center" alignItems="center">
        <Typography variant="head">Stress Monitoring and Relief</Typography>
      </Grid>
      <Box sx={{ py: "0.5%" }}></Box>
      <Grid container spacing={0}>
        <Grid container item={true} xs={12}>
          <Grid
            item={true}
            xs={6}
            sx={{
              borderRight: "1px solid #C8CBD9",
              borderBottom: "1px solid #C8CBD9",
            }}
          >
            <StressT />
          </Grid>
          <Grid item={true} xs={6} sx={{ borderBottom: "1px solid #C8CBD9" }}>
            <StressTips />
          </Grid>
        </Grid>

        <Grid container item={true} xs={12}>
          <Grid item={true} xs={6} sx={{ borderRight: "1px  solid #C8CBD9" }}>
            <StressP />
          </Grid>
          <Grid item={true} xs={6}>
            <StressB />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  </>
);

export default Page;
