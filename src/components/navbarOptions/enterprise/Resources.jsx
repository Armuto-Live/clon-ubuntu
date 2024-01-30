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
          <HeadingSmallListItem text="Webinars" />
          <HeadingSmallListItem text="Tutorial" />
          <HeadingSmallListItem text="Videos" />
          <HeadingSmallListItem text="Case studies" />
          <HeadingSmallListItem text="Whitepapers" />
          <HeadingSmallListItem text="Docs" />
          <HeadingSmallListItem text="Trainig" />
          <HeadingSmallListItem text="Blog" />
          <HeadingSmallListItem text="Press centre" />
        </ul>
      </GridRow>
    </>
  );
};
