import CenterBox from "./components/CenterBox";
import Typography from "@mui/material/Typography";
import Input from "./components/Input";
function App() {
  return (
    <CenterBox _className={{ textAlign: "center", margin: "5rem auto" }}>
      <Typography variant="h5" sx={{ color: "#063251" }}>
        TIRED OF BORING LOREM IPSUM?
      </Typography>
      <Input />
    </CenterBox>
  );
}

export default App;
