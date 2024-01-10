import Reac, { useEffect, useState } from "react";

import {
  StripNoticeWrapperNoBottom,
  StripNoticeLogoSection,
  StripNoticeLogoSectionItems,
  StripNoticeLogoSectionItem,
} from "../../style";
import { Grid, Typography } from "@mui/material";
import { LayoutMaxWidth } from "../LayoutMaxWidth";
import { GridRow } from "../global/GridRow";
import { Line } from "../Line";
import { Button } from "../global/Button";
import { LineSeparator } from "../global/LineSeparator";
import { Main } from "./Main";
import { Takeover } from "./Takeover";
import { LogoItem } from "./LogoItem";
export const ModerEnterprise = () => {
  const [widthWindow, setWidthWindow] = useState(0);
  useEffect(() => {
    const updateWindow = () => setWidthWindow(window.innerWidth);
    window.addEventListener("resize", updateWindow);
    return () => window.removeEventListener("resize", updateWindow);
  });
  return (
    <StripNoticeWrapperNoBottom>
        <Line />
      <LayoutMaxWidth>
        <GridRow xxs="span 4" sm="span 4" md="span 6">
          <Typography variant="h2">
            Modern enterprise {widthWindow <= 473 ? <br /> : ""} open source
          </Typography>
          <Typography variant="body2">
            Security, support, and managed services from the publisher of
            Ubuntu.
          </Typography>
          <Button />
        </GridRow>
        <GridRow xxs="span 4" sm="span 2" md="span 6">
          <StripNoticeLogoSection>
            <StripNoticeLogoSectionItems>
              <LogoItem
                src="https://assets.ubuntu.com/v1/83ff4203-awshp-strip-customers.png"
                alt="Amazon Web Services logo"
              />
              <LogoItem
                src="https://assets.ubuntu.com/v1/7c601cb9-azurehp-strip-customers.png"
                alt="Microsoft Azure logo"
              />
              <LogoItem
                src="https://assets.ubuntu.com/v1/5ba04ee8-atthp-strip-customers.png"
                alt="AT&T logo"
              />
              <LogoItem
                src="https://assets.ubuntu.com/v1/fdb8126b-google+cloudhp-strip-customers.png"
                alt="Google Cloud logo"
              />
            </StripNoticeLogoSectionItems>
          </StripNoticeLogoSection>
        </GridRow>
      </LayoutMaxWidth>
      <LineSeparator />
    </StripNoticeWrapperNoBottom>
  );
};
