import { useEffect, useState } from "react";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import { Box, CardContent, Typography, Grid, Divider } from "@mui/material";
import axios from "axios";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 52,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(24px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#2ECA45",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#5BDA8A",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

export const Switch_model = () => {
  const [checkedA, setCheckedA] = useState(true);
  const [checkedP, setCheckedP] = useState(true);
  const [checkedS, setCheckedS] = useState(true);
  const [checkedE, setCheckedE] = useState(true);
  const [checkedST, setCheckedST] = useState(true);
  const [email, setEmail] = useState("");

  useEffect(() => {
    setEmail(localStorage.getItem("email"));
    axios
      .post("http://127.0.0.1:5000/start_task", { username: email })
      .then(() => {
        console.log("done");
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  const handleChangeAll = () => {
    setCheckedA((prev) => !prev);
  };

  useEffect(() => {
    if (checkedA == true) {
      axios
        .post("http://127.0.0.1:5000/start_task", { username: email })
        .then(() => {
          console.log("done");
          
        })
        .catch((e) => {
          console.error(e);
        });

        setCheckedP(true);
          setCheckedS(true);
          setCheckedST(true);
          setCheckedE(true);
    } else {
      axios
        .get("http://localhost:5000/stop_task")
        .then((res) => {
         
        })
        .catch((e) => console.log(e));

        setCheckedP(false);
        setCheckedS(false);
        setCheckedST(false);
        setCheckedE(false);
    }
  }, [checkedA]);

  useEffect(() => {
    control();
  }, [checkedE, checkedS, checkedST, checkedP]);

  const handleChangeP = () => {
    setCheckedP((prev) => !prev);
  };

  const handleChangeE = () => {
    setCheckedE((prev) => !prev);
  };

  const handleChangeS = () => {
    setCheckedS((prev) => !prev);
  };

  const handleChangeST = () => {
    setCheckedST((prev) => !prev);
  };

  const control = () => {
    axios
      .post("http://localhost:5000/control_panel", {
        position: checkedP,
        eye: checkedE,
        sleep: checkedS,
        stress: checkedST,
      })
      .then((res) => {
        console.log("d");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <Box sx={{ marginTop: 5 }}>
        <CardContent sx={{ pt: 0 }}>
          <Box>
            <Typography variant="h6" fontFamily="Poppins">
              Control Your Detections
            </Typography>
            <Grid container spacing={2} sx={{ marginTop: 2 }}>
              <Grid item={true} xs={6}>
                <p>All Detections</p>
              </Grid>
              <Grid item={true} xs={6}>
                <IOSSwitch
                  checked={checkedA}
                  onChange={handleChangeAll}
                  sx={{ marginTop: 1 }}
                />
              </Grid>
            </Grid>
            <Divider sx={{ borderColor: "neutral.700", width: "60%" }} />

            <Grid container spacing={2} sx={{ marginTop: 3 }}>
              <Grid item={true} xs={6}>
                <p>Posture Detections</p>
              </Grid>
              <Grid item={true} xs={6}>
                <IOSSwitch
                  checked={checkedP}
                  onChange={handleChangeP}
                  sx={{ marginTop: 1 }}
                />
              </Grid>
              <Grid item={true} xs={6}>
                <p>Sleepiness Detection</p>
              </Grid>
              <Grid item={true} xs={6}>
                <IOSSwitch
                  checked={checkedS}
                  onChange={handleChangeS}
                  sx={{ marginTop: 1 }}
                />
              </Grid>
              <Grid item={true} xs={6}>
                <p>Eye Detections</p>
              </Grid>
              <Grid item={true} xs={6}>
                <IOSSwitch
                  checked={checkedE}
                  onChange={handleChangeE}
                  sx={{ marginTop: 1 }}
                />
              </Grid>
              <Grid item={true} xs={6}>
                <p>Stress Detections</p>
              </Grid>
              <Grid item={true} xs={6}>
                <IOSSwitch
                  checked={checkedST}
                  onChange={handleChangeST}
                  sx={{ marginTop: 1 }}
                />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Box>
    </div>
  );
};
