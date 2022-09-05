import { useState } from "react";
import { Box, Typography, styled, Button } from "@mui/material";
import ReminderList from "./components/ReminderList";
const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  width: "25rem",
  borderRadius: "0.2rem",
  padding: "1rem 1.5rem",
  boxShadow: theme.shadows[5],
}));
function App() {
  const [isCleared, setIsCleared] = useState<Boolean>(false);
  return (
    <StyledBox>
      {isCleared ? (
        <Typography variant="h5">0 birthdays today </Typography>
      ) : (
        <Typography variant="h5">5 birthdays today </Typography>
      )}

      {!isCleared && <ReminderList />}
      <Button
        onClick={() => setIsCleared(true)}
        variant="contained"
        sx={{
          width: "100%",
          backgroundColor: "#f28ab2",
          "&:hover": {
            backgroundColor: "#f28ab2",
          },
          height: "2.75rem",
          textTransform: "capitalize",
          marginTop: "1rem",
        }}
        disableElevation
        disableRipple
      >
        Clear All
      </Button>
    </StyledBox>
  );
}

export default App;
