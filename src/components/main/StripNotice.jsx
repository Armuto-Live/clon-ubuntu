import React from "react";
import {
  StripNoticeWrapper,
  StripNoticeNotification,
  StripNoticeNotificationContent,
} from "../../style";
import { LayoutMaxWidth } from "../LayoutMaxWidth";
import { Typography } from "@mui/material";

export const StripNotice = () => {
  return (
    <StripNoticeWrapper>
      <LayoutMaxWidth>
        <StripNoticeNotification>
          <StripNoticeNotificationContent>
            <Typography>
              <a href="">End of standard support for 18.04 LTS - 31 May 2023</a>
            </Typography>
            <Typography>
              <span>
                Upgrade to the latest Ubuntu LTS or get extended coverage until
                2028 with Ubuntu Pro
              </span>
            </Typography>
          </StripNoticeNotificationContent>
        </StripNoticeNotification>
      </LayoutMaxWidth>
    </StripNoticeWrapper>
  );
};
