import React from "react";
import { styled, Link } from "@mui/material";
import { TakeOverCtasParraf, TakeOverLinkButton } from "../../style";
export const Button = ({ isStart,noMarginBotton,text }) => {
  return (
    <TakeOverCtasParraf
      sx={{ textAlign: isStart && "start", marginBottom: noMarginBotton && ".1rem" }}
    >
      <TakeOverLinkButton>{text}</TakeOverLinkButton>
    </TakeOverCtasParraf>
  );
};
