import { Box, Typography } from "@mui/material";
import {
  GridRow,
  LinkItem,
  ParagraphSmall,
  Button,
} from "../../global/index";
import { TitleMobile, TextListSmallItem, TextListSmall } from "../index";

export const OpenStack = () => {
  return (
    <GridRow xxs="span 4" sm="span 2" md="span 3">
      <Box sx={{ display: { xxs: "none", sm: "block" } }}>
        <Typography variant="body2">
          <LinkItem>OpenStack ›</LinkItem>
        </Typography>
        <ParagraphSmall
          text="Canonical is the leading provider of managed OpenStack. We also
        provide enterprise support, training, consulting and will help you
        design and deliver your new private cloud."
        />
        <Button text="Get OpenStack" isStart="true" />
      </Box>
      <TitleMobile text={"Fully managed OpenStack ›"} sx={{display:{xxs:"block",sm:"none"}}} />
      <TextListSmall>
        <TextListSmallItem
          text="Get OpenStack"
          sx={{ display: { xxs: "block", sm: "none" } }}
        />
        <TextListSmallItem text="Fully managed OpenStack" />
        <TextListSmallItem text="OpenStack features" />
        <TextListSmallItem text="Migrate from VMware" />
        <TextListSmallItem text="NFVi and Edge solutions" />
        <TextListSmallItem text="Multi-node OpenStack for workstations and edge / IoT" />
        <TextListSmallItem text="NFV Management and Orchestration (MANO)" />
        <TextListSmallItem text="OpenStack training" />
        <TextListSmallItem text="Pricing" />
        <TextListSmallItem text="Support" />
        <TextListSmallItem text="TCO calculator" />
      </TextListSmall>
    </GridRow>
  );
};
