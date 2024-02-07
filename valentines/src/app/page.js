"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);
  const [response, setResponse] = useState("");
  const [imageSrc, setImageSrc] = useState("/king.jpeg");
  const [imageWidth, setImageWidth] = useState(450);
  const [imageHeight, setImageHeight] = useState(600);

  const handleYesClick = () => {
    setIsClicked(true);
    setResponse("Yaaaaaaay!!!!!");
    setImageSrc("/pookie.jpeg");
    setImageWidth(360);
    setImageHeight(640);
  };

  const handleNoClick = () => {
    setIsClicked(true);
    setResponse("Kys");
    setImageSrc("/pookie2.jpeg");
    setImageWidth(600);
    setImageHeight(450);
  };

  return (
    <Box
      sx={{
        bgcolor: "pink",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <img
            src={imageSrc}
            alt="Changed"
            width={imageWidth}
            height={imageHeight}
          />
        </div>
        <Typography
          variant="h5"
          textAlign="center"
          marginTop={2}
          marginBottom={2}
        >
          {isClicked ? response : "Hey pookie, will you be my valentine?"}
        </Typography>
        {!isClicked && (
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: 2,
              marginBottom: 2,
            }}
          >
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleYesClick}
              >
                Yes!
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleNoClick}
              >
                Hell no!
              </Button>
            </Stack>
          </Container>
        )}
      </Container>
    </Box>
  );
}
