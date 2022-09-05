import { Box, Grid, Typography } from "@mui/material";
import Questions from "./components/Questions";
function App() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: "0.5rem",
        margin: "5rem auto",
        width: { xs: "100%", sm: "80%", md: "70%", lg: "60%" },
        padding: "2rem",
      }}
    >
      <Grid container>
        <Grid item md={3} xs={12}>
          <Typography variant="h5" sx={{}}>
            Questions And Answers About Login
          </Typography>
        </Grid>
        <Grid item md={8} xs={12}>
          <Questions />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
