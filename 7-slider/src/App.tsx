import CenterBox from "./components/CenterBox";
import SideLines from "./components/SideLines";
import Slider from "./components/Slider";
import { Container } from "@mui/material";
function App() {
  return (
    <>
      <CenterBox _className={{ margin: "5rem auto" }}>
        <SideLines />
      </CenterBox>
      <Container>
        <Slider />
      </Container>
    </>
  );
}

export default App;
