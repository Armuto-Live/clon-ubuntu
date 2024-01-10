import React from "react";
import { Link } from "react-router-dom";

import {
  StripNoticeWrapperNoBottom,
  StripNoticeNotification,
  StripNoticeNotificationContent,
} from "../../style";
import { LayoutMaxWidth } from "../global/LayoutMaxWidth";
import { Typography } from "@mui/material";
import { GridRow } from "../global/GridRow";
export const StripNotice = () => {
  return (
    <StripNoticeWrapperNoBottom>
      <LayoutMaxWidth>
        <GridRow xxs="span 4" sm="span 6" md="span 12">
          <StripNoticeNotification>
            <StripNoticeNotificationContent>
              <Typography>
                <Link to={"/18-04"}>End of standard support for 18.04 LTS - 31 May 2023</Link>
              </Typography>
              <Typography>
                <span>
                  Upgrade to the latest Ubuntu LTS or get extended coverage until
                  2028 with Ubuntu Pro
                </span>
              </Typography>
            </StripNoticeNotificationContent>
          </StripNoticeNotification>
        </GridRow>
      </LayoutMaxWidth>
    </StripNoticeWrapperNoBottom>
  );
};
