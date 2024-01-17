import React from "react";
import { styled, Link } from "@mui/material";
import { TakeOverCtasParraf, TakeOverLinkButton } from "../../style";
export const Button = ({ text }) => {
  return (
    <TakeOverCtasParraf
      sx={{
        textAlign: "center",
        "@media (min-width:876px)": {
          textAlign: "start",
        },
      }}
    >
      <TakeOverLinkButton>Get Ubuntu Pro</TakeOverLinkButton>
    </TakeOverCtasParraf>
  );
};
