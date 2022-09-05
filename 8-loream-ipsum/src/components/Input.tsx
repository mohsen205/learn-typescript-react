import { useState } from "react";
import { Stack, TextField, Button, Box } from "@mui/material";
import Text from "./Text";
const Input = () => {
  const [number, setNumber] = useState<number>(0);
  const [resulat, setResulat] = useState<number>(0);
  const handleChnage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setNumber(Number(newValue));
  };
  const handleGenerate = () => {
    setResulat(number);
  };
  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="center"
        mt="2rem"
      >
        <label htmlFor="number" className="label">
          Paragraphs:
        </label>
        <TextField
          placeholder="0"
          id="number"
          type="number"
          value={number}
          onChange={handleChnage}
          sx={{
            height: "2rem",
            width: "5rem",
          }}
          inputProps={{
            style: { padding: "5px 10px", backgroundColor: "white" },
          }}
        />
        <Button
          onClick={handleGenerate}
          variant="contained"
          sx={{
            backgroundColor: "#49a6e9",
            color: "#063251",
            padding: "3px 5px",
            "&:hover": {
              backgroundColor: "#a5d5f8",
              color: "#49a6e9",
            },
          }}
        >
          Generate
        </Button>
      </Stack>
      <Box display="flex" justifyContent="center">
        <Text number={resulat} />
      </Box>
    </>
  );
};

export default Input;
