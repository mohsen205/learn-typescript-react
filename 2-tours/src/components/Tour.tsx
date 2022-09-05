import {
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import { JSONArray } from "../components/type";

const Tour = ({ tour, onclick }: { tour: JSONArray; onclick: Function }) => {
  const { id, name, info, image, price } = tour;

  return (
    <Box width="100%" display="flex" justifyContent="center">
      <Card
        sx={{
          width: { sx: "100%", sm: "60%" },
        }}
      >
        <CardMedia component="img" image={image} alt={id} />
        <CardContent>
          <Stack direction="row" justifyContent="space-between" marginY={1}>
            <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
              {name}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "600",
                color: "#49a6e9",
                backgroundColor: "#ebf7ff",
                borderRadius: "0.1rem",
                padding: "0rem 0.5rem",
              }}
            >
              ${price}
            </Typography>
          </Stack>
          <Typography component="p">{info}</Typography>
          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="outlined"
              color="error"
              onClick={() => onclick(id)}
            >
              not interested
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Tour;
