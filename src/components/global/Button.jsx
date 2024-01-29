import React from "react";
import { styled, Link } from "@mui/material";
import { TakeOverCtasParraf, TakeOverLinkButton } from "../../style";
export const Button = ({ isStart,text }) => {
  return (
    <TakeOverCtasParraf
      sx={{ textAlign: isStart && "start" }}
    >
      <TakeOverLinkButton>{text}</TakeOverLinkButton>
    </TakeOverCtasParraf>
  );
};
