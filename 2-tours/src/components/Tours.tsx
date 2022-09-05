import { Stack, Container } from "@mui/material";
import { JSONArray } from "../components/type";
import UnderLine from "./UnderLine";
import Tour from "./Tour";
const Tours = ({
  tours,
  handleButtonClick,
}: {
  tours: JSONArray[];
  handleButtonClick: Function;
}) => {
  return (
    <Container>
      <Stack spacing={2}>
        <UnderLine text="Our Tours" />
        {tours.map((tour) => {
          return <Tour key={tour.id} tour={tour} onclick={handleButtonClick} />;
        })}
      </Stack>
    </Container>
  );
};

export default Tours;
