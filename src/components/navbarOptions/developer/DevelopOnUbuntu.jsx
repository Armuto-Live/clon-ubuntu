import { Box, Typography } from "@mui/material";
import {
  GridRow,
  LinkItem,
  ParagraphSmall,
  Button,
} from "../../global/index";
import { TitleMobile, TextListSmallItem, TextListSmall } from "../index";

export const DevelopOnUbuntu = () => {
  return (
    <GridRow xxs="span 4" sm="span 2" md="span 3">
    <Box sx={{ display: { xxs: "none", sm: "block" } }}>
      <Typography variant="body2">
        <LinkItem>Develop on Ubuntu ›</LinkItem>
      </Typography>
      <ParagraphSmall
        text="The best Linux platform for modern cloud and IoT development."
      />
    </Box>
    <TitleMobile text={"Develop on Ubuntu ›"} sx={{display:{xxs:"block",sm:"none"}}} />
    <TextListSmall>
      <TextListSmallItem
        text="Ubuntu Desktop"
      />
      <TextListSmallItem text="Deb, snap, and charm packages" />
      <TextListSmallItem text="Kernel selection & lifecycle" />
      <TextListSmallItem text="Multipass" />
      <TextListSmallItem text="Ubuntu on WSL" />
    </TextListSmall>
      <Button text="Develop with Ubuntu" isStart="true" noMarginBotton="true" />
  </GridRow>
  )
}
