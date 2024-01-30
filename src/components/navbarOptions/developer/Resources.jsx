import { Box } from "@mui/material";
import { GridRow, Line } from "../../global/index";
import { HeadingSmall, HeadingSmallListItem } from "../index";

export const Resources = () => {
  return (
    <>
      <GridRow xxs="span 4" sm="span 6" md="span 12">
        <Line />
      </GridRow>
      <GridRow xxs="span 4" sm="span 6" md="span 3">
        <Box>
          <HeadingSmall text="Resources" />
        </Box>
      </GridRow>
      <GridRow xxs="span 4" sm="span 6" md="span 9">
        <ul>
          <HeadingSmallListItem text="Docs" />
          <HeadingSmallListItem text="Ubuntu Discourse" />
          <HeadingSmallListItem text="Forum" />
          <HeadingSmallListItem text="Tutorials" />
          <HeadingSmallListItem text="Videos" />
          <HeadingSmallListItem text="Webinars" />
          <HeadingSmallListItem text="Whitepapers" />
          <HeadingSmallListItem text="Blog" />
        </ul>
      </GridRow>
    </>
  );
};
