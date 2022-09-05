import {
  AccordionSummary,
  Typography,
  AccordionDetails,
  Accordion,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
const Question = ({
  id,
  title,
  info,
}: {
  id: string;
  title: string;
  info: string;
}) => {
  return (
    <Accordion elevation={5} sx={{ paddingY: "0.3rem" }}>
      <AccordionSummary
        expandIcon={
          <AddIcon
            sx={{
              color: "red",
              fontSize: "1rem",
              backgroundColor: "#eae6eb",
              padding: "0.5rem",
              borderRadius: "50%",
            }}
          />
        }
        aria-controls={id}
        id={id}
      >
        <Typography variant="subtitle1" fontWeight="bold">
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography component="p">{info}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default Question;
