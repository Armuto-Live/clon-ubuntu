import { Box } from "@mui/material";
import {
  PStrip,
  LayoutMaxWidth,
  GridRow,
  Line,
} from "../../global/index";
import {
  OpenStack,
  Kubernetes,
  InternetOfThings,
  SupportAndServices,
  Cloud,
  Containers,
  DataCentre,
  AIAndML,
  Partners,
  BottomContent
} from "./index";

export const ViewEnterprise = () => {
  return (
    <PStrip
      nopaddingbottom="true"
      nopaddingtop="true"
      sx={{ paddingTop: {xxs:"24px"} }}
    >
      <LayoutMaxWidth>
        <OpenStack />
        <Kubernetes />
        <InternetOfThings />
        <SupportAndServices />
        <GridRow xxs="span 4" sm="span 6" md="span 12" sx={{display:{xxs:"none",sm:"block"}}}>
          <Line />
        </GridRow>
        <Cloud/>
        <Containers/>
        <DataCentre/>
        <AIAndML/>
        <Partners/>
      </LayoutMaxWidth>
      <LayoutMaxWidth>
        <BottomContent/>
      </LayoutMaxWidth>
    </PStrip>
  );
};
