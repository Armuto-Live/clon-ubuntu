import { Box } from "@mui/material";
import { GridRow, Line } from "../../global/index";
import { HeadingSmall, HeadingSmallListItem } from "../index";

export const Download = () => {
  return (
    <>
      <GridRow xxs="span 4" sm="span 6" md="span 12">
        <Line />
      </GridRow>
      <GridRow xxs="span 4" sm="span 6" md="span 3">
        <Box>
          <HeadingSmall text="Download" />
        </Box>
      </GridRow>
      <GridRow xxs="span 4" sm="span 6" md="span 9">
        <ul>
          <HeadingSmallListItem text="Ubuntu Desktop" />
          <HeadingSmallListItem text="Ubuntu Server" />
          <HeadingSmallListItem text="IoT" />
          <HeadingSmallListItem text="Cloud" />
          <HeadingSmallListItem text="Alternative downloads" />
          <HeadingSmallListItem text="Flavours" />
        </ul>
      </GridRow>
    </>
  );
};
