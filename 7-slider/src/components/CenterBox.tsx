import { Box, styled } from "@mui/material";
const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
}));
type CenterBoxType = {
  children: React.ReactNode;
  _className?: React.CSSProperties;
};
const CenterBox = ({ children, _className }: CenterBoxType) => {
  return (
    <StyledBox sx={_className}>
      <Box>{children}</Box>
    </StyledBox>
  );
};

export default CenterBox;
