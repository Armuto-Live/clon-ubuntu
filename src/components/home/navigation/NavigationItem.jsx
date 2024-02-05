import React from "react";

import { IconButton, Box, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { NavigationItemContent } from "../../../style";
import { LinkItem } from "../../global";




export const NavigationItem = ({ name,onClick,style }) => {
  return (
    <NavigationItemContent onClick={onClick} sx={style}>
        {name}
    </NavigationItemContent>
  );
};
