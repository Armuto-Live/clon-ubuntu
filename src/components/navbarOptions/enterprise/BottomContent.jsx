import { styled, Box } from "@mui/material";
import { GridRow, LinkItem,Line } from "../../global/index";
import { HeadingSmall, HeadingSmallListItem } from "../index";
import { Sectors,FullyManaged,Resources,Consulting } from "./index";

const ListItem = styled("li")(({ theme }) => ({
  display: "inline",
  position: "relative",
  padding: "0",
  margin: "0",
  fontSize: "14px",
  lineHeight: "1.25rem",
  paddingTop: ".55rem",
  marginRight: ".5rem",
  [theme.breakpoints.up("xxs")]: {
    "&::after": {
      position: "relative",
      content: "''",
      lineHeight: "1.5rem",
      right: "-.25rem",
    },
  },
  [theme.breakpoints.up("md")]: {
    "&::after": {
      position: "relative",
      content: "'•'",
      lineHeight: "1.5rem",
      right: "-.25rem",
    },
    "&:last-of-type::after": {
      position: "relative",
      content: "''",
      lineHeight: "1.5rem",
      right: "-.25rem",
    },
  },
}));

export const BottomContent = () => {
  return (
    <>
      <Sectors/>
      <FullyManaged/>
      <Resources/>
      <Consulting/>
    </>
  );
};
