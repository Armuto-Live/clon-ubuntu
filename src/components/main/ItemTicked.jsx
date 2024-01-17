import { styled } from "@mui/material";

const Item = styled("li")(({theme}) => ({
  position: "relative",
  paddingLeft: "2rem",
  paddingBottom: ".25rem",
  paddingTop: ".25rem",
  display: "inline-block",
  fontSize:".97rem",
  width:"100%",
  "&::before": {
    content: '" "',
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 0a8 8 0 110 16A8 8 0 018 0zm0 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zm2.814 2.45l1.203.897-5.537 7.43-3.485-3.694 1.09-1.03 2.259 2.394 4.47-5.997z' fill='%23666'  fill-rule='nonzero'/%3E%3C/svg%3E")`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"1rem",
    position: "absolute",
    width: "2rem",
    height: "2rem",
    left: "0",
    top: ".5rem",
    bottom:"0",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize:"1.015rem",
    paddingTop:".30rem",
    paddingBottom:".30rem",
  },
}));

export const ItemTicked = ({children, text }) => {
  return <Item>{children}</Item>;
};
