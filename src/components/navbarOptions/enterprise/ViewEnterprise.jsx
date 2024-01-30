import { styled, Box, Typography } from "@mui/material";
import {
  PStrip,
  LayoutMaxWidth,
  GridRow,
  LinkItem,
  ParagraphSmall,
  Button,
  Line,
} from "../../global/index";
import { TitleMobile, TextListSmallItem } from "../index";
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

const ListItems = styled("ul")(({ theme }) => ({
  display: "block",
  margin: "0",
  marginBottom: "1.45rem",
  fontSize: ".875rem",
  lineHeight: "1.25rem",
  paddingTop: ".55rem",
}));

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
      <LayoutMaxWidth >
        <BottomContent/>
      </LayoutMaxWidth>
    </PStrip>
  );
};
