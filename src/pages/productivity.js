import Head from "next/head";
import {
  Box,
  Container,
  Stack,
  Typography,
  Unstable_Grid2 as Grid,
  Paper,
} from "@mui/material";
import { ProTips } from "../sections/productivity/pro_tips";
import { ProT } from "../sections/productivity/pro_total";
import { ProP } from "src/sections/productivity/pro_pie";
import { ProB } from "src/sections/productivity/pro_bar";

const Page = () => (
  <>
    <Head>
      <title>Productivity</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 2,
      }}
    >
      <Grid container spacing={0} justifyContent="center" alignItems="center">
        <Typography variant="head">
          Sleepiness Tracking & Productivity History
        </Typography>
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
            <ProT />
          </Grid>
          <Grid item={true} xs={6} sx={{ borderBottom: "1px solid #C8CBD9" }}>
            {" "}
            <ProTips />
          </Grid>
        </Grid>

        <Grid container item={true} xs={12}>
          <Grid item={true} xs={6} sx={{ borderRight: "1px  solid #C8CBD9" }}>
            <ProP />{" "}
          </Grid>
          <Grid item={true} xs={6}>
          
            <ProB />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  </>
);

export default Page;
