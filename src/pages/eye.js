import Head from "next/head";
import {
  Box,
  Container,
  Stack,
  Typography,
  Unstable_Grid2 as Grid,
  Paper,
} from "@mui/material";
import { EyeTips } from "../sections/eye/eye_tips";
import { EyeT } from "src/sections/eye/eye_total";
import { EyeP } from "src/sections/eye/eye_pie";
import { EyeB } from "src/sections/eye/eye_bar";
const Page = () => (
  <>
    <Head>
      <title>Eye Health</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 2,
      }}
    >
      <Grid container spacing={0} justifyContent="center" alignItems="center">
        <Typography variant="head">Eye Health Tracking </Typography>
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
            <EyeT />
          </Grid>
          <Grid item={true} xs={6} sx={{ borderBottom: "1px solid #C8CBD9" }}>
            {" "}
            <EyeTips />
          </Grid>
        </Grid>

        <Grid container item={true} xs={12}>
          <Grid item={true} xs={6} sx={{ borderRight: "1px  solid #C8CBD9" }}>
            {" "}
            <EyeP />
          </Grid>
          <Grid item={true} xs={6}>
            <EyeB/>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  </>
);

export default Page;
