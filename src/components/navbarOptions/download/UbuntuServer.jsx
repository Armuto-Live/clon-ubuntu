import { Box, Typography } from "@mui/material";
import { GridRow, LinkItem, ParagraphSmall, Button } from "../../global/index";
import { TitleMobile, TextListSmallItem, TextListSmall } from "../index";

export const UbuntuServer = () => {
  return (
    <GridRow xxs="span 4" sm="span 6" md="span 3">
      <Box >
        <Typography variant="body2">
          <LinkItem>Ubuntu Server ›</LinkItem>
        </Typography>
        <ParagraphSmall text="The most popular server Linux in the cloud and data centre, you can rely on Ubuntu Server and its five years of guaranteed free upgrades." />

        <Button text="Get Ubuntu Server" isStart="true" noMarginBotton="true" />
      </Box>
      <TextListSmall>
        <TextListSmallItem text="Mac and Windows" />
        <TextListSmallItem text="ARM" />
        <TextListSmallItem text="IBM Power" />
        <TextListSmallItem text="s390x" />
      </TextListSmall>
    </GridRow>
  );
};
