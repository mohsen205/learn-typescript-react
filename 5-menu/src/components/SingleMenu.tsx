import { Food } from "./Type";
import { Card, CardMedia, CardContent, Stack, Typography } from "@mui/material";
const SingleMenu = ({ id, title, category, price, img, desc }: Food) => {
  return (
    <Card
      sx={{ display: "flex", backgroundColor: "transparent" }}
      elevation={0}
    >
      <CardMedia
        component="img"
        src={img}
        alt={title}
        sx={{
          height: "12.5rem",
          width: "15.625rem",
          border: "0.3rem solid #c59d5f",
          borderRadius: "1rem",
        }}
      />
      <CardContent sx={{ paddingTop: "0rem" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ borderBottom: "0.1rem dotted #617d98" }}
        >
          <Typography
            variant="h6"
            sx={{
              margingBottom: "0.2rem",
              textTransform: "capitalize",
              letterSpacing: "0.1rem",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#c59d5f", margingBottom: "0.2rem" }}
          >
            ${price}
          </Typography>
        </Stack>
        <Typography component="p" sx={{ color: "#617d9", marginTop: "1rem" }}>
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SingleMenu;
