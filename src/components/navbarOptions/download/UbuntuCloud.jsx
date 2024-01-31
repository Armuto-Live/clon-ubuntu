import { Box, Typography } from "@mui/material";
import { GridRow, LinkItem, ParagraphSmall, Button } from "../../global/index";
import { TitleMobile, TextListSmallItem, TextListSmall } from "../index";

export const UbuntuCloud = () => {
  return (
    <GridRow xxs="span 4" sm="span 6" md="span 3">
    <Box >
      <Typography variant="body2">
        <LinkItem>Ubuntu Cloud ›</LinkItem>
      </Typography>
      <ParagraphSmall text="Use Ubuntu optimised and certified server images on most major clouds." />

      <Button text="Get Ubuntu Server" isStart="true" noMarginBotton="true" />
    </Box>
    <TextListSmall>
      <TextListSmallItem text="Get started on Amazon AWS, Microsoft Azure, Google Cloud Platform and more…" />
      <TextListSmallItem text="Download cloud images for local development and testing" />
    </TextListSmall>
  </GridRow>
  )
}
