import React from "react";
import { styled, Typography } from "@mui/material";
import { LinkItem } from "../global";

const Title = styled(Typography)(({ theme }) => ({
    margin:"0",
  fontWeight: "550",
  fontVariantCaps: "all-small-caps",
  letterSpacing: ".05rem",
  marginBottom: ".6rem",
  fontSize: "1.294rem",
  paddingTop:".4rem",
}));
export const TitleMobile = ({ text,sx }) => {
  return (
    <Title  sx={sx}>
      <LinkItem>{text}</LinkItem>
    </Title>
  );
};
