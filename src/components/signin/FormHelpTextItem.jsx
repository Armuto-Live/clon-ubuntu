import { styled } from "@mui/material";
import React from "react";

const HelpListItem = styled("li")(({ theme }) => ({
  fontSize: ".75rem",
}));
export const FormHelpTextItem = ({children}) => {
  return (
    <HelpListItem>{children}</HelpListItem>
  )
}
