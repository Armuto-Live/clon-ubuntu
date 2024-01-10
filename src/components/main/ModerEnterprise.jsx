import { LogoItem } from "./LogoItem";
import { Typography,useMediaQuery } from "@mui/material";
import {
  LayoutMaxWidth,
  GridRow,
  Line,
  Button,
  LineSeparator,
} from "../global/index";

import {
  StripNoticeWrapperNoBottom,
  StripNoticeLogoSection,
  StripNoticeLogoSectionItems,
  StripNoticeLogoSectionItem,
} from "../../style";


export const ModerEnterprise = () => {
  const isSmallScreen = useMediaQuery('(min-width:768px)');

  return (
    <StripNoticeWrapperNoBottom>
      <LayoutMaxWidth>
        <GridRow xxs="span 4" sm="span 6" md="span 12">
          <Line />
        </GridRow>
        <GridRow xxs="span 4" sm="span 4" md="span 6">
          <Typography variant="h2">
            Modern enterprise {isSmallScreen ? '' : <br/>} open source
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
        <GridRow xxs="span 4" sm="span 6" md="span 12">
          <LineSeparator />
        </GridRow>
      </LayoutMaxWidth>
    </StripNoticeWrapperNoBottom>
  );
};
