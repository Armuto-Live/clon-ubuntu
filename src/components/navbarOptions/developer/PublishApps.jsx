import { Box, Typography } from "@mui/material";
import { GridRow, LinkItem, ParagraphSmall, Button } from "../../global/index";
import { TitleMobile, TextListSmallItem, TextListSmall } from "../index";

export const PublishApps = () => {
  return (
    <GridRow xxs="span 4" sm="span 2" md="span 3">
      <Box sx={{ display: { xxs: "none", sm: "block" } }}>
        <Typography variant="body2">
          <LinkItem>Publish apps ›</LinkItem>
        </Typography>
        <ParagraphSmall text="Deliver your app to millions of Ubuntu users, servers and devices." />
      </Box>
      <TitleMobile
        text={"Publish apps ›"}
        sx={{ display: { xxs: "block", sm: "none" } }}
      />
      <TextListSmall>
        <TextListSmallItem text="Browse the snap store" />
        <TextListSmallItem text="The snap command line interface" />
        <TextListSmallItem text="Auto-build service for snaps" />
        <TextListSmallItem text="Snap documentation" />
        <TextListSmallItem text="Snap channels - track/risk/branch" />
      </TextListSmall>
      <Button text="Publish with Snapcraft" isStart="true" noMarginBotton="true" />
    </GridRow>
  );
};
