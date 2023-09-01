import { useState, useRef, useEffect } from "react";
import {
  Box,
  CardContent,
  Typography,
  Stack,
  Alert,
  Snackbar,
  Container,
  Button,
} from "@mui/material";
import axios from "axios";
import Webcam from "react-webcam";
import { useRouter } from "next/router";
export const Cam = () => {
  const webcamRef = useRef(null);
  const [capturedImages, setCapturedImages] = useState([]);
  const [isCapturing, setIsCapturing] = useState(false);
  const [captureCount, setCaptureCount] = useState(0);
  const [isCameraLoaded, setIsCameraLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const handleClick = () => {
    setOpen(true);
  };

  const handleNav = () => {
    router.push("/dashboard");
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/stop_task")
      .then((res) => {})
      .catch((e) => console.log(e));
    setIsCapturing(true);
  }, []);

  const handleUserMedia = () => {
    setIsCameraLoaded(true);
  };

  useEffect(() => {
    if (
      isCapturing &&
      isCameraLoaded &&
      capturedImages.length < 10 &&
      captureCount < 10
    ) {
      const captureInterval = setInterval(() => {
        capturePhoto();
      }, 2000);

      return () => clearInterval(captureInterval);
    }
  }, [isCapturing, isCameraLoaded, capturedImages, captureCount]);

  useEffect(() => {
    if (capturedImages.length > 0) {
      const lastImage = capturedImages[capturedImages.length - 1];
      postImage(lastImage);
    }
  }, [capturedImages]);

  const capturePhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImages([...capturedImages, imageSrc]);
    setCaptureCount(captureCount + 1);
  };

  const postImage = async (image) => {
    axios
      .post("http://localhost:5000/test", {
        image: image,
      })
      .then((res) => {
        if (
          res.data.message.eye !== "Eyes Open" ||
          res.data.message.posture !== "Correct"
        ) {
          handleClick();
          setIsCapturing(false);
        } else {
          setData(res.data.message);
        }
      })
      .catch((e) => console.error(e));
  };

  let display;

  if (data.eye === "Eyes Open" && data.posture === "Correct") {
    display = (
      <div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 2,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={25}
            height={25}
            fill="none"
          >
            <path
              stroke="#25B788"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12.5 22.917c5.73 0 10.417-4.688 10.417-10.417 0-5.73-4.688-10.417-10.417-10.417-5.73 0-10.417 4.688-10.417 10.417 0 5.73 4.688 10.417 10.417 10.417Z"
            />
            <path
              stroke="#25B788"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m8.073 12.5 2.948 2.948 5.906-5.896"
            />
          </svg>

          <Typography variant="header2">Eye Distance is correct</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={25}
            height={25}
            fill="none"
          >
            <path
              stroke="#25B788"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12.5 22.917c5.73 0 10.417-4.688 10.417-10.417 0-5.73-4.688-10.417-10.417-10.417-5.73 0-10.417 4.688-10.417 10.417 0 5.73 4.688 10.417 10.417 10.417Z"
            />
            <path
              stroke="#25B788"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m8.073 12.5 2.948 2.948 5.906-5.896"
            />
          </svg>

          <Typography variant="header2">Posture is correct</Typography>
        </Box>
      </div>
    );
  }

  return (
    <div>
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
          Failed
        </Alert>
      </Snackbar>
      <Box>
        <CardContent>
          <Container sx={{ width: "100%" }}>
            <Typography variant="header2">
              Use a room with good lighting conditions.{" "}
            </Typography>
            <br />
            <Typography variant="header2">
              Stay neck and shoulder in a relaxed position while keeping feet
              flat on the floor.
            </Typography>
            <br />
            <Typography variant="header2">
              Open the eyes and sit stay and still while staying convenient
              distance with the keyboard
            </Typography>
            <br />
            <Stack spacing={3} sx={{ marginTop: 2 }}>
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                className="webcam"
                onUserMedia={handleUserMedia}
              />
              {isCapturing ? (
                <div>{display} </div>
              ) : (
                <div>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="header2" sx={{ color: "red" }}>
                      Failed - Return to Dash Board
                    </Typography>
                  </Box>
                </div>
              )}
            </Stack>
          </Container>
        </CardContent>
      </Box>
    </div>
  );
};
