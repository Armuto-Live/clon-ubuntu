import { Box, Typography } from "@mui/material";
import { GridRow, LinkItem, ParagraphSmall, Button } from "../../global/index";
import { TitleMobile, TextListSmallItem, TextListSmall } from "../index";

export const MakeDevices = () => {
  return (
    <GridRow xxs="span 4" sm="span 2" md="span 3">
    <Box sx={{ display: { xxs: "none", sm: "block" } }}>
      <Typography variant="body2">
        <LinkItem>Make devices ›</LinkItem>
      </Typography>
      <ParagraphSmall text="Use headless Ubuntu Server, or Ubuntu Core for embedded appliance security." />
    </Box>
    <TitleMobile
      text={"Make devices ›"}
      sx={{ display: { xxs: "block", sm: "none" } }}
    />
    <TextListSmall>
      <TextListSmallItem text="Secure, embedded Ubuntu Core" />
      <TextListSmallItem text="Make robots with app stores" />
      <TextListSmallItem text="Industrial gateways and controllers" />
      <TextListSmallItem text="Build a secure Ubuntu based kiosk" />
      <TextListSmallItem text="The leading OS for digital signage" />
      <TextListSmallItem text="Free appliance images for your PC or Raspberry Pi" />
    </TextListSmall>
    <Button text="Accelerate to market" isStart="true" noMarginBotton="true"/>
  </GridRow>
  )
}
