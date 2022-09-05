import people from "../data";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
const SingleSlider = ({ index }: { index: number }) => {
  console.log(index);
  return (
    <Card
      sx={{ backgroundColor: "transparent", textAlign: "center" }}
      elevation={0}
    >
      {index === 4 ? null : (
        <>
          <CardMedia
            component="img"
            alt={people[index].name}
            src={people[index].image}
            sx={{
              borderRadius: "50%",
              height: "12rem",
              width: "12rem",
              marginX: "auto",
            }}
          />
          <CardContent>
            <Typography
              variant="subtitle1"
              sx={{
                marginBottom: ".25rem",
                color: "#ba5d2c",
                textTransform: "uppercase",
                fontWeight: "bold",
                letterSpacing: "0.1rem",
              }}
            >
              {people[index].name}
            </Typography>
            <Typography
              component="p"
              sx={{
                marginBottom: "0.75rem",
                textTransform: "capitalize",
                color: "#324d67",
              }}
            >
              {people[index].title}
            </Typography>
            <Typography
              component="p"
              sx={{
                maxWidth: "35rem",
                margin: "2rem auto 0",
                color: "#617d98",
              }}
            >
              {people[index].quote}
            </Typography>
            <FormatQuoteIcon
              sx={{ fontSize: "3rem", color: "#ba5d2c", marginTop: "1rem" }}
            />
          </CardContent>
        </>
      )}
    </Card>
  );
};

export default SingleSlider;
