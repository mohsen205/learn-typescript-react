import { Box, Stack, IconButton } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SingleSlider from "./SingleSlider";
import { useEffect, useState } from "react";
import data from "../data";
const Slider = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <Stack
      sx={{ marginTop: "2rem" }}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <IconButton
        sx={{
          height: "2.5rem",
          color: "white",
          backgroundColor: "#617d98",
          "&:hover": {
            backgroundColor: "#ba5d2c",
          },
        }}
        onClick={() => setIndex(index - 1)}
      >
        <KeyboardArrowLeftIcon />
      </IconButton>
      <SingleSlider index={index} />
      <IconButton
        sx={{
          height: "2.5rem",
          color: "white",
          backgroundColor: "#617d98",
          "&:hover": {
            backgroundColor: "#ba5d2c",
          },
        }}
        onClick={() => setIndex(index + 1)}
      >
        <KeyboardArrowRightIcon />
      </IconButton>
    </Stack>
  );
};

export default Slider;
