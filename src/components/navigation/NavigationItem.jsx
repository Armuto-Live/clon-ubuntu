import React from "react";

import { IconButton, Box, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { NavigationItemContent } from "../../style";
export const NavigationItem = ({ name }) => {
  return (
    <NavigationItemContent>
      {name}
    </NavigationItemContent>
  );
};
