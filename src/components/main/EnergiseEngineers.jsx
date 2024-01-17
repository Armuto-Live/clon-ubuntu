import React from "react";

import { PStrip, LayoutMaxWidth, GridRow, LinkItem } from "../global/index";
import { Box, Typography } from "@mui/material";
import { InlineListItem } from "./index";

export const EnergiseEngineers = () => {
  return (
    <PStrip light="true">
      <LayoutMaxWidth>
        <GridRow xxs="span 4" xs="span 6" md="span 8">
          <Typography variant="h2" color="initial">
            Energise your engineers
          </Typography>
          <Typography variant="body2" color="initial">
            Better security. More packages. Newer tools. All your open source,
            from cloud to edge.
          </Typography>
          <Typography variant="subtitle1">
            66% of experienced developers prefer Ubuntu.
          </Typography>
          <Typography variant="subtitle1" sx={{ marginTop: "-0.5rem" }}>
            That’s why Ubuntu supports the fastest, biggest and most successful
            digital operations.
          </Typography>
          <ul>
            <InlineListItem text="Let’s talk open source ›">
            </InlineListItem>
            <InlineListItem text="Watch Ubuntu Masters in action ›">
            </InlineListItem>
          </ul>
        </GridRow>
        <GridRow
          md="span 4"
          sx={{ display: { xxs: "none", md: "flex" }, alignItems: "center" }}
        >
          <Box>
            <Typography variant="subtitle1">
              <LinkItem href="">The 2020 HackerEarth Developer Survey</LinkItem>
            </Typography>
            <Box>
              <img
                src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_200,h_40/https://assets.ubuntu.com/v1/934a0626-Hackerearth_logo.svg"
                alt=""
              />
            </Box>
          </Box>
        </GridRow>
      </LayoutMaxWidth>
    </PStrip>
  );
};
