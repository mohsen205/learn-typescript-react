import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Avatar, Box, Typography, styled } from "@mui/material";
import people from "./data";

const ImageContainer = styled(Box)(({ theme }) => ({
  width: "11rem",
  display: "flex",
  margin: "0rem auto",
}));

const Review = ({ index }: { index: number }) => {
  return (
    <Box>
      <ImageContainer>
        <FormatQuoteIcon
          sx={{
            backgroundColor: "#49a6e9",
            padding: "0.5rem",
            color: "white",
            borderRadius: "50%",
            position: "relative",
            left: "20px",
            top: "15px",
            zIndex: 10,
          }}
        />
        <Box sx={{ backgroundColor: "#49a6e9", borderRadius: "50%" }}>
          <img
            src={people[index].image}
            alt={people[index].name}
            className="img-fluid"
          />
        </Box>
      </ImageContainer>

      <Typography variant="h6">{people[index].name}</Typography>
      <Typography variant="subtitle1" sx={{ color: "#2d87c8" }}>
        {people[index].job}
      </Typography>
      <Typography component="p" color="#617d98">
        {people[index].text}
      </Typography>
    </Box>
  );
};

export default Review;
