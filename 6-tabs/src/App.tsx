import CenterBox from "./components/CenterBox";
import Navigation from "./components/Navigation";
import UnderLine from "./components/UnderLine";
import Container from "@mui/material/Container";
import axios from "axios";
import { useState } from "react";
import { TabsProps } from "./components/Types";
import Loading from "./components/Loading";
const url: string = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState<Boolean>(true);
  const [data, setData] = useState<TabsProps[]>([]);
  axios
    .get(url)
    .then((response) => {
      let array: TabsProps[] = response.data;
      if (array.length === 0) {
        setLoading(true);
      } else {
        setLoading(false);
      }
      setData(array);
    })
    .catch((err) => console.log(err));

  return (
    <>
      {!loading && (
        <CenterBox _className={{ margin: "5rem auto" }}>
          <UnderLine text="Experience" />
        </CenterBox>
      )}
      <Container>
        {loading ? <Loading /> : <Navigation data={data} />}
      </Container>
    </>
  );
}

export default App;
