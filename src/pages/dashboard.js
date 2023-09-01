import Head from "next/head";
import { Box, Typography, Unstable_Grid2 as Grid } from "@mui/material";
import { GenTips } from "../sections/main/gen_tips";
import { Switch_model } from "../sections/main/switch";
import { WeekChart } from "src/sections/main/week_chart";
import { MonthChart } from "src/sections/main/month_chart";
import { DayChart } from "src/sections/main/day_chart";
const Page = () => (

  
  <>
    <Head>
      <title>DashBoard</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
      }}
    >
      <Grid container spacing={0} justifyContent="center" alignItems="center">
        <Typography variant="head">Dashboard</Typography>
      </Grid>
      <Grid container spacing={0}>
        <Grid container item={true} xs={12}>
          <Grid
            item={true}
            xs={8}
            sx={{
              borderRight: "1px solid #C8CBD9",
              borderBottom: "1px solid #C8CBD9",
            }}
          ><MonthChart/></Grid>
          <Grid item={true} xs={4} sx={{ borderBottom: "1px solid #C8CBD9" }}>
            <Switch_model />
          </Grid>
        </Grid>

        <Grid container item={true} xs={12}>
          <Grid
            item={true}
            xs={4}
            sx={{ borderRight: "1px  solid #C8CBD9" }}
          ><DayChart /></Grid>
          <Grid item={true} xs={4} sx={{ borderRight: "1px   solid #C8CBD9" }}>
            <Box
              sx={{
                py: 2,
              }}
            />
            <GenTips />
          </Grid>
          <Grid item={true} xs={4}><WeekChart/></Grid>
        </Grid>
      </Grid>
    </Box>
  </>
);

export default Page;
