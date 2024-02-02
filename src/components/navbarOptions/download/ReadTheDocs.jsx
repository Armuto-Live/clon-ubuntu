import { Box } from "@mui/material";
import { GridRow, Line, LinkItem } from "../../global/index";
import { HeadingSmall, HeadingSmallListItem } from "../index";
import { Description } from "./Description";

export const ReadTheDocs = () => {
  return (
    <GridRow xxs="span 4" sm="span 6" md="span 3">
      <Box>
        <HeadingSmall text="READ THE DOCS" />
        <Description>
          Read the official docs for <LinkItem>Ubuntu Desktop</LinkItem>,{" "}
          <LinkItem>Ubuntu Server</LinkItem>, and{" "}
          <LinkItem>Ubuntu Core</LinkItem>
        </Description>
      </Box>
      <Box>
        <HeadingSmall sx={{ paddingTop: "1.95rem" }} text="UBUNTU APPLIANCES" />
        <Description>
          An <LinkItem>Ubuntu Appliance</LinkItem> is an official system image which blends a single
          application with Ubuntu Core. Certified to run on Raspberry Pi and PC
          boards.
        </Description>
      </Box>
    </GridRow>
  );
};
