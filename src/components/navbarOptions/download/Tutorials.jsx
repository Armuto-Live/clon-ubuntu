import { Box } from "@mui/material";
import { GridRow, Line, LinkItem } from "../../global/index";
import { HeadingSmall, HeadingSmallListItem } from "../index";
import { Description } from "./Description";

export const Tutorials = () => {
  return (
    <GridRow xxs="span 4" sm="span 6" md="span 3">
      <Box>
        <HeadingSmall text="Tutorials" />
      </Box>
      <Box>
        <Description>
          If you are already running Ubuntu - you can{" "}
          <LinkItem>upgrade</LinkItem> with the Software Updater
        </Description>
        <Description>
          Burn a DVD on <LinkItem>Ubuntu</LinkItem>, <LinkItem>macOS</LinkItem>, or <LinkItem>Windows</LinkItem>. Create a bootable USB stick
          on <LinkItem>Ubuntu</LinkItem>, <LinkItem>macOS</LinkItem>, or <LinkItem>Windows</LinkItem>
        </Description>
        <Description>
          Installation guides for <LinkItem>Ubuntu Desktop</LinkItem> and <LinkItem>Ubuntu Server</LinkItem>
        </Description>
        <Description>
          You can learn how to <LinkItem sx={{display:"inline"}}>try Ubuntu before you install</LinkItem>
        </Description>
      </Box>
    </GridRow>
  );
};
