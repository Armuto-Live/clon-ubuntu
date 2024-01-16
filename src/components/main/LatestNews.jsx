import React from "react";
import { GridRow, LayoutMaxWidth, PStrip,LinkItem } from "../global";
import { styled, Typography, Box } from "@mui/material";

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
            <LinkItem>&nbsp;our blog {"›"}</LinkItem>
          </Typography>
        </GridRow>
      </LayoutMaxWidth>
      <LayoutMaxWidth>
        <GridRow xxs="span 4" md="span 3">
          <Title>
            <time>12 January 2024</time>
          </Title>
          <SubTitle>
            <LinkItem>
              Cloud-native infrastructure – When the future meets the present
            </LinkItem>
          </SubTitle>
        </GridRow>
        <GridRow xxs="span 4" md="span 3">
          <Title>10 January 2024</Title>
          <SubTitle>
            <LinkItem>
              High Performance Computing – It’s all about the bottleneck
            </LinkItem>
          </SubTitle>
        </GridRow>
        <GridRow xxs="span 4" md="span 3">
          <Title>10 January 2024</Title>
          <SubTitle>
            <LinkItem href="">What is a sovereign cloud?</LinkItem>
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
              <LinkItem>
                Ubuntu Confidential VMs on Azure: Introducing Ephemeral OS disks
                & vTPMs
              </LinkItem>
            </SubTitle>
          </GridRow>
        </GridRow>
      </LayoutMaxWidth>
    </PStrip>
  );
};
