import React from "react";

import {
  StripNoticeWrapperNoBottom,
  StripNoticeNotification,
  StripNoticeNotificationContent,
} from "../../../style";

import { Typography } from "@mui/material";
import { GridRow,LayoutMaxWidth,LinkItem } from "../../global/index";

export const StripNotice = () => {
  return (
    <StripNoticeWrapperNoBottom>
      <LayoutMaxWidth>
        <GridRow xxs="span 4" sm="span 6" md="span 12">
          <StripNoticeNotification>
            <StripNoticeNotificationContent>
              <Typography>
                <LinkItem to={"/18-04"}>End of standard support for 18.04 LTS - 31 May 2023</LinkItem>
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
