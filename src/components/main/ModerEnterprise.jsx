import React from "react";

import { StripNoticeWrapperNoBottom } from "../../style";
import { LayoutMaxWidth } from "../LayoutMaxWidth";
import { Grid, Typography } from "@mui/material";
import { Line } from "../Line";
import { Button } from "../global/Button";
import { LineSeparator } from "../global/LineSeparator";
import { Main } from "./Main";
import { Takeover } from "./Takeover";
export const ModerEnterprise = () => {
  return (
    <StripNoticeWrapperNoBottom>
      <LayoutMaxWidth>
        <Line/>
        <Grid item xs={12} md={6}>
            <Typography variant="h2">
                 Modern enterprise open source
            </Typography>
            <Typography variant="body2">
              Security, support, and managed services from the publisher of Ubuntu.
            </Typography>
          <Button/>
            
        </Grid>
        <Grid item >
          a
        </Grid>
        <LineSeparator/>
      </LayoutMaxWidth>
    </StripNoticeWrapperNoBottom>
  );
};
