import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Link,
  Stack,
  TextField,
  Typography,
  Snackbar,
  Alert,
  Grid,
  Paper,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";

//login
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
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      password: Yup.string().max(25).required("Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post('/api/auth', {
          email: values.email,
          password: values.password,
        });
  
        if (response.status === 200) {

          localStorage.setItem('email', response.data.email);


          router.push("/calibrate")
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
          Login Failed
        </Alert>
      </Snackbar>

      <Head>
        <title>Login</title>
      </Head>

      <Grid container spacing={0}>
        <Grid item={true} xs={6}>
          <Paper
            style={{
              backgroundColor: "#D9FFE7",
              height: "98vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="/assets/bg1.png"
              alt="Image"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </Paper>
        </Grid>
        <Grid item={true} xs={6}>
          <Box
            sx={{
              marginTop: "20%",
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
                px: 3,
                py: "100px",
                width: "100%",
              }}
            >
              <div>
                <Stack spacing={1} sx={{ mb: 3 }} alignItems="center">
                  <Typography variant="h3" fontWeight="bold"  fontFamily="Poppins">Welcome to</Typography>
                  <Typography variant="h2" fontWeight="bold" color="#5BDA8A" fontFamily="Poppins">Life Fit Cam</Typography>
                  <Typography variant="h6" fontFamily="Poppins">
                    Please enter your details
                  </Typography>
                </Stack>

                <form noValidate onSubmit={formik.handleSubmit}>
                  <Stack spacing={3}>
                    <TextField
                      label="Email Address"
                      name="email"
                      fullWidth
                      type="email"
                      error={!!(formik.touched.email && formik.errors.email)}
                      helperText={formik.touched.email && formik.errors.email}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
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
                    Login
                  </Button>
                  <Typography
                    color="text.secondary"
                    variant="body2"
                    sx={{
                      marginTop: "2%",
                    }}
                  >
                    Don&apos;t have an account? &nbsp;
                    <Link
                      component={NextLink}
                      href="/register"
                      underline="hover"
                      variant="subtitle2"
                    >
                      Sign Up
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
