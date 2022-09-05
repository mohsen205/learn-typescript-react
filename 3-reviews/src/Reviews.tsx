import { Box, IconButton, Stack, Button, styled } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Review from "./Review";
import { useState } from "react";
import people from "./data";
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#ebf7ff",
  color: "#2d87c8",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "#49a6e9",
  },
}));

const Reviews = () => {
  const [index, setIndex] = useState<number>(0);

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        textAlign: "center",
        borderRadius: "0.5rem",
        padding: "1.5rem 2rem",
        width: { xs: "100%", sm: "80%", md: "60%", lg: "50%" },
      }}
    >
      <Review index={index} />
      <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
        <IconButton aria-label="backward" onClick={prevPerson}>
          <KeyboardArrowLeftIcon fontSize="large" />
        </IconButton>
        <IconButton aria-label="forward" onClick={nextPerson}>
          <KeyboardArrowRightIcon fontSize="large" />
        </IconButton>
      </Stack>
      <Box display="flex" justifyContent="center">
        <StyledButton variant="contained" size="small" onClick={randomPerson}>
          Suprise Me
        </StyledButton>
      </Box>
    </Box>
  );
};

export default Reviews;

const checkNumber = (number: number) => {
  if (number > people.length - 1) {
    return 0;
  }
  if (number < 0) {
    return people.length - 1;
  }
  return number;
};
