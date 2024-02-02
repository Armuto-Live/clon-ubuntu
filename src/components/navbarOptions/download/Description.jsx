import { styled,Typography } from "@mui/material";

const PSmall = styled(Typography)(({ theme }) => ({
  fontSize: ".875rem",
  paddingTop: ".55rem",
  marginBottom: "1.1rem",
  fontWeight: "350",
  marginTop:"-.5rem",
  display:"inline-block",
}));

export const Description = ({children}) => {
  return <PSmall>{children}</PSmall>;
};
