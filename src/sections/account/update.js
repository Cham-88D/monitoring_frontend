import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Alert,
  Box,
  Button,
  Snackbar,
  Stack,
  TextField,
  Typography,
  Grid,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";

const Update = () => {
  const [open, setOpen] = useState(false);
  const [initialValues, setInitialValues] = useState({
    email: "",
    password: "",
    fname: "",
    lname: "",
    gender: "",
    birthday: "",
    type: "",
  });

  useEffect(() => {
    getData();
  }, []);
  const handleClick = () => {
    setOpen(true);
  };


  const getData = () => {
    const email = localStorage.getItem("email");
    axios
      .post("api/get_user", { email: email })
      .then((response) => {
        const apiData = response.data.user;
        setInitialValues({
          email: apiData.email,
          password: apiData.password,
          fname: apiData.firstname,
          lname: apiData.lastname,
          gender: apiData.gender,
          birthday: apiData.birthday,
          type: apiData.type,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(25)
        .required("Email is required"),
      password: Yup.string().max(15).required("Password is required"),
      fname: Yup.string().max(30).required("First Name is required"),
      lname: Yup.string().max(30).required("First Name is required"),
      birthday: Yup.date().required("Birthday is required"),
      gender: Yup.string().required("Please select an option"),
      type: Yup.string().required("Please select an option"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post("/api/update_user", {
          email: values.email,
          password: values.password,
          firstname: values.fname,
          lastname: values.lname,
          birthday: values.birthday,
          gender: values.gender,
          type: values.type,
        });

        if (response.status === 200) {
          getData();
        } else {
          handleClick();
        }
      } catch (error) {
        handleClick();
      }
    },
  });

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          sx={{ backgroundColor: "red", color: "white", width: "100%" }}
        >
          Update Failed
        </Alert>
      </Snackbar>

      <Box
        sx={{
          backgroundColor: "background.paper",
          flex: "1 1 auto",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            py: "100px",
            width: "100%",
          }}
        >
          <div>
            <form noValidate onSubmit={formik.handleSubmit}>
              <Stack spacing={3}>
                <Grid container>
                  <Grid item xs={6}>
                    <TextField
                      style={{ width: "88%" }}
                      label="First name"
                      name="fname"
                      error={!!(formik.touched.fname && formik.errors.fname)}
                      helperText={formik.touched.fname && formik.errors.fname}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.fname}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Last name"
                      name="lname"
                      error={!!(formik.touched.lname && formik.errors.lname)}
                      helperText={formik.touched.lname && formik.errors.lname}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.lname}
                    />
                  </Grid>
                </Grid>

                <TextField
                  error={!!(formik.touched.password && formik.errors.password)}
                  fullWidth
                  helperText={formik.touched.password && formik.errors.password}
                  label="Password"
                  name="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="password"
                  value={formik.values.password}
                />

                <Grid container>
                  <Grid item xs={6}>
                    <TextField
                      style={{ width: "88%" }}
                      id="birthday"
                      name="birthday"
                      label="Select a Date"
                      type="date"
                      value={formik.values.birthday}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        !!(formik.touched.birthday && formik.errors.birthday)
                      }
                      helperText={
                        formik.touched.birthday && formik.errors.birthday
                      }
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      select
                      id="gender"
                      name="gender"
                      label="Select an Option"
                      value={formik.values.gender}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.gender && Boolean(formik.errors.gender)
                      }
                      helperText={formik.touched.gender && formik.errors.gender}
                    >
                      <MenuItem value="Male">Male</MenuItem>
                      <MenuItem value="Female">Female</MenuItem>
                      <MenuItem value="Other">Other</MenuItem>
                    </TextField>
                  </Grid>
                </Grid>
                <TextField
                  fullWidth
                  select
                  id="type"
                  name="type"
                  label="How do you typically cope with stress when using a computer?"
                  value={formik.values.type}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.type && Boolean(formik.errors.type)}
                  helperText={formik.touched.type && formik.errors.type}
                >
                  <MenuItem value="Physical activities">
                    Physical activities
                  </MenuItem>
                  <MenuItem value="Relaxation techniques">
                    Relaxation techniques
                  </MenuItem>
                  <MenuItem value="Creative activities">
                    Creative activities
                  </MenuItem>
                  <MenuItem value="Social support">Social support</MenuItem>
                  <MenuItem value="Nature-based activities">
                    Nature-based activities
                  </MenuItem>
                  <MenuItem value="Self-care">Self-care</MenuItem>
                </TextField>
              </Stack>
              {formik.errors.submit && (
                <Typography color="error" sx={{ mt: 3 }} variant="body2">
                  {formik.errors.submit}
                </Typography>
              )}

              <Button
                fullWidth
                size="large"
                type="submit"
                sx={{
                  mt: 3,
                  border: "2px solid orange", // Border color
                  color:"solid orange",
                }}
              >
                Update Profile
              </Button>
            </form>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Update;
