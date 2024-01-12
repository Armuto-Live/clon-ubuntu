import React from "react";
import { Box, styled } from "@mui/material";

const StripNoticeContent = styled(Box)(
  ({theme, nopaddingtop, nopaddingbottom}) => ({
    padding: `${nopaddingtop ? 0 : "2rem"} 0 ${nopaddingbottom ? 0 : "2rem"} 0`,
    [theme.breakpoints.up('md')]:{
     padding: `${nopaddingtop ? 0 : "4rem"} 0 ${nopaddingbottom ? 0 : "4rem"} 0`,
    },
  })
);

export const PStrip = ({ children, nopaddingtop, nopaddingbottom }) => {
  return (
    <StripNoticeContent
      nopaddingtop={nopaddingtop}
      nopaddingbottom={nopaddingbottom}
    >
      {children}
    </StripNoticeContent>
  );
};
