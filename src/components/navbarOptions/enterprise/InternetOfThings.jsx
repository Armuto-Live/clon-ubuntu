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
export const InternetOfThings = () => {
  return (
    <GridRow xxs="span 4" sm="span 2" md="span 3">
    <Box sx={{ display: { xxs: "none", sm: "block" } }}>
      <Typography variant="body2">
        <LinkItem>Internet of Things ›</LinkItem>
      </Typography>
      <ParagraphSmall text="Embedded Ubuntu gives you the best developer experience, security and long-term support. Choose between classic Ubuntu Server or the Ubuntu Core for appliances." />
      <Button text="Build your IoT on Ubuntu" isStart="true" />
    </Box>
    <TitleMobile text={"Internet of Things ›"} sx={{display:{xxs:"block",sm:"none"}}} />
    <TextListSmall>
      <TextListSmallItem text="Build your IoT on Ubuntu" 
          sx={{ display: { xxs: "block", sm: "none" } }}/>
      <TextListSmallItem text="Launch a product with our IoT Professional Services" />
      <TextListSmallItem text="Ubuntu Core - embedded & secure" />
      <TextListSmallItem text="Appliance images" />
      <TextListSmallItem text="Embedded Linux with Ubuntu" />
      <TextListSmallItem text="Snaps - secure packages for IoT" />
      <TextListSmallItem text="Supported boards and SoCs" />
      <TextListSmallItem text="Digital signage and smart displays" />
      <TextListSmallItem text="Robots and drones with app stores" />
      <TextListSmallItem text="Industrial gateways with Ubuntu" />
      <TextListSmallItem text="Automotive with Ubuntu" />
      <TextListSmallItem text="Networking with Ubuntu" />
    </TextListSmall>
  </GridRow>
  )
}
