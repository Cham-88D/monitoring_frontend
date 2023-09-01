import Head from "next/head";
import { Box, Typography, Unstable_Grid2 as Grid, Avatar } from "@mui/material";

const Page = () => (
  <>
    <Head>
      <title>Physical activities</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
      }}
    >
      <Grid container spacing={0} justifyContent="center" alignItems="center">
        <Typography variant="head">Stress Reducing Techniques -</Typography>
        <Typography variant="head2">Physical activities </Typography>
      </Grid>
      <Grid container spacing={0} sx={{ marginTop: 8 }}>
        <Grid container item={true} xs={12}>
          <Grid item={true} xs={6} sx={{ borderRight: "1px  solid #C8CBD9" }}>
            <Box display="flex" alignItems="center">
              <Avatar
                alt="Image"
                src={"/assets/a2.jpeg"}
                sx={{
                  width: 40,
                  height: 40,
                  marginRight: 5,
                  marginLeft: 10,
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
                }}
              />

              <Typography variant="h6">{"Deep breathing exercises"}</Typography>
            </Box>
            <Grid
              item
              xs={12}
              sm={6}
              container
              direction="column"
              alignItems="center"
            >
              <Box>
                <img src="/assets/tip.jpeg" alt="Your Image" />
              </Box>

              <Box p={2}>
                <Typography variant="head2" align="center">
                  Take a moment to focus on your breath and practice deep
                  breathing exercises. Inhale deeply through your nose, hold for
                  a few seconds, and exhale slowly through your mouth. Repeat
                  this several times to promote relaxation and reduce stress.
                  <br />
                  more details : https://youtu.be/CQjGqtH-2YI
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid item={true} xs={6}>
            <Box display="flex" alignItems="center">
              <Avatar
                alt="Image"
                src={"/assets/a3.jpeg"}
                sx={{
                  width: 40,
                  height: 40,
                  marginRight: 5,
                  marginLeft: 10,
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
                }}
              />

              <Typography variant="h6">{"Hand massages"}</Typography>
            </Box>
            <Grid
              item
              xs={12}
              sm={6}
              container
              direction="column"
              alignItems="center"
            >
              <Box>
                <img src="/assets/tip.jpeg" alt="Your Image" />
              </Box>

              <Box p={2}>
                <Typography variant="head2" align="center">
                  Give yourself a quick hand massage during breaks. Apply gentle
                  pressure to the palms, fingers, and wrists using circular
                  motions or by rolling a small massage ball or a tennis ball in
                  your hands.
                  <br />
                  more details : https://youtu.be/CQjGqtH-2YI
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid container item={true} xs={12}>
          <Grid item={true} xs={6} sx={{ borderRight: "1px  solid #C8CBD9" }}>
            <Box display="flex" alignItems="center">
              <Avatar
                alt="Image"
                src={"/assets/a4.jpeg"}
                sx={{
                  width: 40,
                  height: 40,
                  marginRight: 5,
                  marginLeft: 10,
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
                }}
              />

              <Typography variant="h6">{"Desk yoga poses"}</Typography>
            </Box>
            <Grid
              item
              xs={12}
              sm={6}
              container
              direction="column"
              alignItems="center"
            >
              <Box>
                <img src="/assets/tip.jpeg" alt="Your Image" />
              </Box>

              <Box p={2}>
                <Typography variant="head2" align="center">
                  Incorporate desk-friendly yoga poses into your routine.
                  Examples include seated forward fold, seated spinal twist,
                  shoulder stretches, and neck rolls. These poses can help
                  relieve muscle tension and promote flexibility.
                  <br />
                  more details : https://youtu.be/CQjGqtH-2YI
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid item={true} xs={6}>
            <Box display="flex" alignItems="center">
              <Avatar
                alt="Image"
                src={"/assets/a9.jpeg"}
                sx={{
                  width: 40,
                  height: 40,
                  marginRight: 5,
                  marginLeft: 10,
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
                }}
              />

              <Typography variant="h6">{"Walking breaks"}</Typography>
            </Box>
            <Grid
              item
              xs={12}
              sm={6}
              container
              direction="column"
              alignItems="center"
            >
              <Box>
                <img src="/assets/tip.jpeg" alt="Your Image" />
              </Box>

              <Box p={2}>
                <Typography variant="head2" align="center">
                  Get up and take a short walk around your workspace or office.
                  Use this time to stretch your legs, breathe in fresh air, and
                  give your mind a break from the computer screen.
                  <br />
                  more details : https://youtu.be/CQjGqtH-2YI
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid container item={true} xs={12}>
          <Grid item={true} xs={6} sx={{ borderRight: "1px  solid #C8CBD9" }}>
            <Box display="flex" alignItems="center">
              <Avatar
                alt="Image"
                src={"/assets/a8.jpeg"}
                sx={{
                  width: 40,
                  height: 40,
                  marginRight: 5,
                  marginLeft: 10,
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
                }}
              />

              <Typography variant="h6">{"Active breaks"}</Typography>
            </Box>
            <Grid
              item
              xs={12}
              sm={6}
              container
              direction="column"
              alignItems="center"
            >
              <Box>
                <img src="/assets/tip.jpeg" alt="Your Image" />
              </Box>

              <Box p={2}>
                <Typography variant="head2" align="center">
                  Instead of sitting during breaks, engage in active movements.
                  Do a few sets of jumping jacks, jog in place, do high knees,
                  or perform a quick set of squats or lunges to get your heart
                  rate up and energize your body.
                  <br />
                  more details : https://youtu.be/CQjGqtH-2YI
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid item={true} xs={6}>
            <Box display="flex" alignItems="center">
              <Avatar
                alt="Image"
                src={"/assets/a7.jpeg"}
                sx={{
                  width: 40,
                  height: 40,
                  marginRight: 5,
                  marginLeft: 10,
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
                }}
              />

              <Typography variant="h6">{"Dance or movement breaks"}</Typography>
            </Box>
            <Grid
              item
              xs={12}
              sm={6}
              container
              direction="column"
              alignItems="center"
            >
              <Box>
                <img src="/assets/tip.jpeg" alt="Your Image" />
              </Box>

              <Box p={2}>
                <Typography variant="head2" align="center">
                  Take short dance breaks or engage in some freestyle movement
                  to music. Stand up, let loose, and enjoy a few minutes of
                  dancing or spontaneous movement to release stress and boost
                  your mood.
                  <br />
                  more details : https://youtu.be/CQjGqtH-2YI
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  </>
);

export default Page;
