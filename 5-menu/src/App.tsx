import CenterBox from "./components/CenterBox";
import UnderLine from "./components/UnderLine";
import { Button, Stack, styled } from "@mui/material";
import Menu from "./components/Menu";
import { useState } from "react";
const StyledButton = styled(Button)(({ theme }) => ({
  color: "#c59d5f",
  textTransform: "capitalize",
  "&:hover": {
    color: "white",
    backgroundColor: "#c59d5f",
  },
}));
function App() {
  const [category, setCategory] = useState<string | null>(null);
  const handleMenu = (category: string | null) => {
    setCategory(category);
  };
  return (
    <CenterBox _className={{ marginTop: "5rem", marginBottom: "5rem" }}>
      <UnderLine text="Our Menu" />
      <CenterBox>
        <Stack direction="row" spacing={2}>
          <StyledButton variant="text" onClick={() => handleMenu(null)}>
            all
          </StyledButton>
          <StyledButton variant="text" onClick={() => handleMenu("breakfast")}>
            breakfast
          </StyledButton>
          <StyledButton variant="text" onClick={() => handleMenu("lunch")}>
            lunch
          </StyledButton>
          <StyledButton variant="text" onClick={() => handleMenu("shakes")}>
            shakes
          </StyledButton>
        </Stack>
      </CenterBox>
      <Menu category={category} />
    </CenterBox>
  );
}

export default App;
