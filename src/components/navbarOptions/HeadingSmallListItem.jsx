import { styled } from "@mui/material";
import {
  LinkItem,
} from "../global/index";

const ListItem = styled("li")(({ theme }) => ({
  display: "inline",
  position: "relative",
  padding: "0",
  margin: "0",
  fontSize:"14px",
  lineHeight: "1.25rem",
  paddingTop: ".55rem",
  marginRight:".6rem",
  [theme.breakpoints.up("xxs")]: {
    "&::after": {
      position: "relative",
      content: "''",
      lineHeight: "1.5rem",
      right: "-.25rem",
    },
  },
  [theme.breakpoints.up("md")]: {
    marginRight: ".8rem",
    "&::after": {
      content: "'•'",
    },
    "&:last-of-type::after": {
      content: "''",
    },
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "15.3px",
  },
}));
export const HeadingSmallListItem = ({text}) => {
  return (
    <ListItem>
      <LinkItem>{text}</LinkItem>
    </ListItem>
  );
};
