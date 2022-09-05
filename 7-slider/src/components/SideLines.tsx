import { Typography, Stack } from "@mui/material";
const SideLines = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Typography
        variant="h4"
        sx={{ color: "#ba5d2c", letterSpacing: "0.1rem", fontWeight: "bold" }}
      >
        /
      </Typography>
      <Typography variant="h4" sx={{ color: "#102a42", fontWeight: "bold" }}>
        Reviews
      </Typography>
    </Stack>
  );
};

export default SideLines;
