import React from "react";
import { GridRow, LayoutMaxWidth, PStrip } from "../global";
import { styled, Typography, Box } from "@mui/material";
import { NavigationLogoLink } from "../../style";

const Title = styled("p")(({ theme }) => ({
  marginBottom: ".1rem",
  fontWeight: "550",
  fontVariantCaps: "all-small-caps",
  fontVariantNumeric: "oldstyle-nums",
  letterSpacing: ".05rem",
  fontSize: "1.15rem",
  lineHeight: "1.5rem",
  marginTop: "0",
  paddingTop: ".4rem",
  maxWidth: "40em",
}));
const SubTitle = styled("h2")(({ theme }) => ({
  fontSize: "1.017rem",
  fontStyle: "normal",
  fontWeight: "550",
  lineHeight: "1.5rem",
  marginBottom: "1.1rem",
  marginTop: "0",
  maxWidth: "40em",
  paddingTop: ".4rem",
}));

export const LatestNews = () => {
  return (
    <PStrip nopaddingtop="true">
      <LayoutMaxWidth>
        <GridRow xxs="span 4" sm="span 6" md="span 12">
          <Typography variant="h3">
            Latest news from
            <NavigationLogoLink>&nbsp;our blog {"›"}</NavigationLogoLink>
          </Typography>
        </GridRow>
      </LayoutMaxWidth>
      <LayoutMaxWidth>
        <GridRow xxs="span 4" md="span 3">
          <Title>
            <time>12 January 2024</time>
          </Title>
          <SubTitle>
            <a href="">
              Cloud-native infrastructure – When the future meets the present
            </a>
          </SubTitle>
        </GridRow>
        <GridRow xxs="span 4" md="span 3">
          <Title>10 January 2024</Title>
          <SubTitle>
            <a href="">
              High Performance Computing – It’s all about the bottleneck
            </a>
          </SubTitle>
        </GridRow>
        <GridRow xxs="span 4" md="span 3">
          <Title>10 January 2024</Title>
          <SubTitle>
            <a href="">What is a sovereign cloud?</a>
          </SubTitle>
        </GridRow>
        <GridRow
          xxs="span 4"
          sm="span 6"
          md="span 3"
          sx={{
            position: "relative",
            "&:before": {
              content: '""',
              backgroundColor: "rgba(0,0,0,.2)",
              bottom: "auto",
              height: "1px",
              left: "0",
              position: "absolute",
              right: "0",
              top: "0",
              width: "auto",
            },
            "@media (min-width: 1037px)": {
              "&:before": {
                bottom: "0",
                height: "auto",
                left: "-1rem",
                width: "1px",
              },
            },
          }}
        >
          <GridRow>
            <Title>Spotlight</Title>
            <SubTitle>
              <a href="">
                Ubuntu Confidential VMs on Azure: Introducing Ephemeral OS disks
                & vTPMs
              </a>
            </SubTitle>
          </GridRow>
        </GridRow>
      </LayoutMaxWidth>
    </PStrip>
  );
};
