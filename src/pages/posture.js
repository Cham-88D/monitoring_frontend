import Head from "next/head";
import { Box, Typography, Unstable_Grid2 as Grid } from "@mui/material";
import { PosTips } from "../sections/posture/pos_tips";
import { PosT } from "../sections/posture/pos_total";
import { PosP } from "src/sections/posture/pos_pie";
import { PosB } from "src/sections/posture/pos_bar";
const Page = () => (
  <>
    <Head>
      <title>Posture</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 2,
      }}
    >
      <Grid container spacing={0} justifyContent="center" alignItems="center">
        <Typography variant="head">Posture Tracking History</Typography>
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
            <PosT />
          </Grid>
          <Grid item={true} xs={6} sx={{ borderBottom: "1px solid #C8CBD9" }}>
            {" "}
            <PosTips />
          </Grid>
        </Grid>

        <Grid container item={true} xs={12}>
          <Grid item={true} xs={6} sx={{ borderRight: "1px  solid #C8CBD9" }}>
            <PosP />
          </Grid>
          <Grid item={true} xs={6}>
            <PosB/>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  </>
);

export default Page;
