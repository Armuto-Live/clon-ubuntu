import React from "react";
import { Box, styled } from "@mui/material";

const StripNoticeContent = styled(Box)(
  ({theme, nopaddingtop, nopaddingbottom,light}) => ({
    backgroundColor:`${light && "#f7f7f7"}`,
    padding: `${nopaddingtop ? 0 : "2rem"} 0 ${nopaddingbottom ? 0 : "2rem"} 0`,
    [theme.breakpoints.up('md')]:{
     padding: `${nopaddingtop ? 0 : "4rem"} 0 ${nopaddingbottom ? 0 : "4rem"} 0`,
    },
  })
);

export const PStrip = ({ children, nopaddingtop, nopaddingbottom,light }) => {
  return (
    <StripNoticeContent
      nopaddingtop={nopaddingtop}
      nopaddingbottom={nopaddingbottom}
      light={light}
    >
      {children}
    </StripNoticeContent>
  );
};
