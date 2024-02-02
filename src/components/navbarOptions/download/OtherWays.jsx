import { Box } from "@mui/material";
import { GridRow, Line, LinkItem } from "../../global/index";
import { HeadingSmall, HeadingSmallListItem } from "../index";
import { Description } from "./Description";

export const OtherWays = () => {
  return (
    <GridRow xxs="span 4" sm="span 6" md="span 3">
      <Box>
        <HeadingSmall text="OTHER WAYS TO DOWNLOAD" />
      </Box>
      <Box>
        <Description>
          Ubuntu is available via <LinkItem>BitTorrents</LinkItem> and via a minimal <LinkItem>network
          installer</LinkItem> that allows you to customise what is installed, such as
          additional languages. You can also find <LinkItem>older releases</LinkItem>.
        </Description>
      </Box>
    </GridRow>
  );
};
