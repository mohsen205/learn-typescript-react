import { Stack } from "@mui/material";
import questions from "./data";
import Question from "./Question";

const Questions = () => {
  return (
    <Stack spacing={2}>
      {questions.map((quest) => {
        return (
          <Question
            id={quest.id}
            key={quest.id}
            info={quest.info}
            title={quest.title}
          />
        );
      })}
    </Stack>
  );
};

export default Questions;
