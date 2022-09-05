import { Typography, styled } from "@mui/material";
const StyledUnderline = styled(Typography)(({ theme }) => ({
  "&::after": {
    content: '""',
    backgroundColor: "#49a6e9",
    width: "5rem",
    height: "0.2rem",
    display: "block",
    margin: "1rem auto",
  },
  marginRight: "auto",
  marginLeft: "auto",
}));
const UnderLine = ({ text }: { text: string }) => {
  return <StyledUnderline variant="h3">{text}</StyledUnderline>;
};

export default UnderLine;
