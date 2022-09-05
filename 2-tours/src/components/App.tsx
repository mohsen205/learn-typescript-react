import { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import Loading from "./Loading";
import { JSONArray } from "../components/type";
import Tours from "./Tours";
import Refresh from "./Refresh";

function App() {
  const [data, setData] = useState<JSONArray[]>([]);
  const [loading, setIsloading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get("https://course-api.com/react-tours-project")
      .then((response) => {
        if (!response.data) {
          setIsloading(true);
        }
        setIsloading(false);
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  const handleButtonClick = (id: string) => {
    let array: JSONArray[] = data.filter((data) => data.id !== id);
    setData(array);
  };
  const refresh = () => {
    document.location.reload();
  };
  return (
    <Box sx={{ margin: "5rem auto" }}>
      {loading ? (
        <Loading />
      ) : loading === false && data.length === 0 ? (
        <Refresh refresh={refresh} />
      ) : (
        <Tours tours={data} handleButtonClick={handleButtonClick} />
      )}
    </Box>
  );
}

export default App;
