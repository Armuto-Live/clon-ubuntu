import React from "react";
import { GridRow, LayoutMaxWidth, PStrip } from "../global";
import { styled, Typography } from "@mui/material";
import { NavigationLogoLink } from "../../style";
const Title = styled("h3")(({ theme }) => ({}));

export const LatestNews = () => {
  return (
    <PStrip nopaddingtop="true">
      <LayoutMaxWidth>
        <GridRow xxs="span 4" sm="span 6" md="span 12">
          <Typography variant="h3">
            Latest news from 
            <NavigationLogoLink>&nbsp;our  blog {"›"}</NavigationLogoLink>
          </Typography>
        </GridRow>
        <GridRow xxs="span 4" sm="span 6" md="span 12">
          asd
        </GridRow>
      </LayoutMaxWidth>
    </PStrip>
  );
};
