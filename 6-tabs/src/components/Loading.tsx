import { Box, Typography } from "@mui/material";

const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        color: "#063251",
        marginTop: "5rem",
      }}
    >
      <Typography variant="h3">Loading...</Typography>
    </Box>
  );
};

export default Loading;
