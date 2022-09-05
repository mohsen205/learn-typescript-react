import { Box, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import textArray from "./data";
const Text = ({ number }: { number: number }) => {
  const [text, setText] = useState<string[]>([]);
  useEffect(() => {
    if (number <= 7) {
      setText(textArray.slice(0, number));
    }
  }, []);
  return (
    <Stack
      mt="2rem"
      sx={{ width: { sx: "100%", sm: "80%", md: "60%", lg: "50%" } }}
    >
      {text.map((t) => {
        return (
          <Box
            sx={{
              color: "#617d98",
              textAlign: "center",
              width: "100%",
              marginTop: "1rem",
            }}
          >
            {t}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Text;
