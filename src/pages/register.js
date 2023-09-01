import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Alert,
  Box,
  Button,
  Link,
  Snackbar,
  Stack,
  TextField,
  Typography,
  Grid,
  Paper,
  MenuItem,
  responsiveFontSizes,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";


const Page = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      fname: "",
      lname: "",
      gender: "",
      birthday: "",
      type: "",
    },
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
        const response = await axios.post("/api/reg", {
          email: values.email,
          password: values.password,
          fname: values.fname,
          lname: values.lname,
          birthday: values.birthday,
          gender: values.gender,
          type: values.type,
        });

        if (response.status === 201) {
          router.push("/")
        } else {
          console.log(response)
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
          Registration Failed
        </Alert>
      </Snackbar>
      <Head>
        <title>Register</title>
      </Head>

      <Grid container spacing={0}>
        <Grid item={true} xs={6}>
          <Paper
            style={{
              height: "98vh",
              display: "flex",
              alignItem: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="/assets/bg2.jpeg"
              alt="Image"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </Paper>
        </Grid>
        <Grid item={true} xs={6}>
          <Box
            sx={{
              marginTop: "84px",
              backgroundColor: "background.paper",
              flex: "1 1 auto",
              alignItem: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                maxWidth: 550,
                px: 3,
                py: "100px",
                width: "100%",
              }}
            >
              <div>
                <Stack spacing={1} sx={{ mb: 3 }} alignitem={true}s="center">
                  <Typography
                    variant="h3"
                    fontWeight="bold"
                    fontFamily="Poppins"
                  >
                    Register for
                  </Typography>
                  <Typography
                    variant="h2"
                    fontWeight="bold"
                    color="#5BDA8A"
                    fontFamily="Poppins"
                  >
                    Life Fit Cam
                  </Typography>
                  <Typography variant="h6" fontFamily="Poppins">
                    Please enter your details
                  </Typography>
                </Stack>

                <form noValidate onSubmit={formik.handleSubmit}>
                  <Stack spacing={3}>
                    <Grid container>
                      <Grid item={true} xs={6}>
                        <TextField
                          style={{ width: "88%" }}
                          label="First name"
                          name="fname"
                          error={
                            !!(formik.touched.fname && formik.errors.fname)
                          }
                          helperText={
                            formik.touched.fname && formik.errors.fname
                          }
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.fname}
                        />
                      </Grid>
                      <Grid item={true} xs={6}>
                        <TextField
                          fullWidth
                          label="Last name"
                          name="lname"
                          error={
                            !!(formik.touched.lname && formik.errors.lname)
                          }
                          helperText={
                            formik.touched.lname && formik.errors.lname
                          }
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.lname}
                        />
                      </Grid>
                    </Grid>

                    <TextField
                      error={!!(formik.touched.email && formik.errors.email)}
                      fullWidth
                      helperText={formik.touched.email && formik.errors.email}
                      label="Email Address"
                      name="email"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      type="email"
                      value={formik.values.email}
                    />

                    <TextField
                      error={
                        !!(formik.touched.password && formik.errors.password)
                      }
                      fullWidth
                      helperText={
                        formik.touched.password && formik.errors.password
                      }
                      label="Password"
                      name="password"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      type="password"
                      value={formik.values.password}
                    />

                    <Grid container>
                      <Grid item={true} xs={6}>
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
                            !!(
                              formik.touched.birthday && formik.errors.birthday
                            )
                          }
                          helperText={
                            formik.touched.birthday && formik.errors.birthday
                          }
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </Grid>
                      <Grid item={true} xs={6}>
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
                            formik.touched.gender &&
                            Boolean(formik.errors.gender)
                          }
                          helperText={
                            formik.touched.gender && formik.errors.gender
                          }
                        >
                          <MenuItem value="Male">Male</MenuItem>
                          <MenuItem value="Female">Female</MenuItem>
                          <MenuItem  value="Other">Other</MenuItem>
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
                      <MenuItem value="Physical activities">Physical activities</MenuItem>
                      <MenuItem value="Relaxation techniques">Relaxation techniques</MenuItem>
                      <MenuItem value="Creative activities">Creative activities</MenuItem>
                      <MenuItem value="Social support">Social support</MenuItem>
                      <MenuItem value="Nature-based activities">Nature-based activities</MenuItem>
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
                    sx={{ mt: 3 }}
                    type="submit"
                    variant="contained"
                  >
                    Register
                  </Button>

                  <Typography
                    color="text.secondary"
                    variant="body2"
                    sx={{
                      marginTop: "2%",
                    }}
                  >
                    have an account? &nbsp;
                    <Link
                      component={NextLink}
                      href="/"
                      underline="hover"
                      variant="subtitle2"
                    >
                      Login
                    </Link>
                  </Typography>
                </form>
              </div>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Page;
