import { styled, Box, Typography } from "@mui/material";
import {
  PStrip,
  LayoutMaxWidth,
  GridRow,
  LinkItem,
  ParagraphSmall,
  Button,
} from "../../global/index";
import { TitleMobile, TextListSmallItem, TextListSmall } from "../index";
export const SupportAndServices = () => {
  return (
    <GridRow xxs="span 4" sm="span 2" md="span 3">
    <Box sx={{ display: { xxs: "none", sm: "block" } }}>
      <Typography variant="body2">
        <LinkItem>Support and services ›</LinkItem>
      </Typography>
      <ParagraphSmall
        text="Canonical provides 24/7 enterprise support, security, and break-fix engineering for Ubuntu, OpenStack, Docker and Kubernetes. Enterprise Linux done right."
      />
      <Button text="Get support" isStart="true" />
    </Box>
    <TitleMobile text={"Support and services ›"} sx={{display:{xxs:"block",sm:"none"}}}/>
    <TextListSmall>
      <TextListSmallItem
        text="Get support"
        sx={{ display: { xxs: "block", sm: "none" } }}
      />
      <TextListSmallItem text="Ubuntu Pro" />
      <TextListSmallItem text="Livepatch security updates" />
      <TextListSmallItem text="Landscape remote management" />
      <TextListSmallItem text="Compliance reporting" />
      <TextListSmallItem text="Managed Apps" />
      <TextListSmallItem text="Pricing" />
      <TextListSmallItem text="Observability" />
      <TextListSmallItem text="Security" />
      <TextListSmallItem text="Hardware certification" />
      <TextListSmallItem text="Get Ubuntu Pro on AWS" />
      <TextListSmallItem text="Get Ubuntu Pro on Azure" />
    </TextListSmall>
  </GridRow>
  )
}
