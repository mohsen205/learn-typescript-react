import { Box, Container } from "@mui/material";
import Reviews from "./Reviews";
import UnderLine from "./UnderLine";
function App() {
  return (
    <Container sx={{ marginY: "5rem" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box>
          <UnderLine text="Our Reviews" />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Reviews />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default App;
