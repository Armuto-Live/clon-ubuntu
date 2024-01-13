import React from "react";
import { GridRow, LayoutMaxWidth, PStrip } from "../global";
import { styled, Typography,Box } from "@mui/material";
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
      </LayoutMaxWidth>
      <LayoutMaxWidth>
        <GridRow xxs="span 4" sm="span 6" md="span 9" sx={{display:"flex"}}>
          <GridRow md="span 3">
            <p>12 January 2024</p>
            <span>Cloud-native infrastructure – When the future meets the present</span>
          </GridRow>
          <GridRow md="span 3">
            <p>12 January 2024</p>
            <span>Cloud-native infrastructure – When the future meets the present</span>
          </GridRow>
          <GridRow md="span 3">
            <p>12 January 2024</p>
            <span>Cloud-native infrastructure – When the future meets the present</span>
          </GridRow>
        </GridRow>
        <GridRow xxs="span 4" sm="span 6" md="span 3" sx={{display:"flex","&:before":{content:'""',color:"red",height:"100%",border:"thin solid red",marginRight:"1rem"}}} >
          <GridRow >
            <Box>
              <p>12 January 2024</p>
              <span>Cloud-native infrastructure – When the future meets the present</span>
            </Box>
          </GridRow>
        </GridRow>
      </LayoutMaxWidth>
    </PStrip>
  );
};
