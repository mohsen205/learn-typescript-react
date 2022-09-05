import { Button, Box, Typography } from "@mui/material";
const Refresh = ({ refresh }: { refresh: Function }) => {
  return (
    <Box display="flex" justifyContent="center">
      <Box>
        <Typography variant="h3" sx={{ color: "#063251" }}>
          No Tours Left
        </Typography>
        <Box display="flex" justifyContent="center">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#49a6e9",
              marginTop: "1rem",
            }}
            onClick={() => refresh()}
          >
            refresh
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Refresh;
