import { Box } from "@mui/material";
import { GridRow, Line } from "../../global/index";
import { HeadingSmall, HeadingSmallListItem } from "../index";

export const Connect = () => {
  return (
    <>
      <GridRow xxs="span 4" sm="span 6" md="span 12">
        <Line />
      </GridRow>
      <GridRow xxs="span 4" sm="span 6" md="span 2">
        <Box>
          <HeadingSmall text="CONNECT" />
        </Box>
      </GridRow>
      <GridRow xxs="span 4" sm="span 6" md="span 10">
        <ul>
          <HeadingSmallListItem text="Blog" />
          <HeadingSmallListItem text="Weekly Newsletter" />
          <HeadingSmallListItem text="Discourse" />
          <HeadingSmallListItem text="Planet" />
          <HeadingSmallListItem text="Teams" />
          <HeadingSmallListItem text="LoCos" />
          <HeadingSmallListItem text="Lists" />
          <HeadingSmallListItem text="IRC" />
        </ul>
      </GridRow>
    </>
  );
};
