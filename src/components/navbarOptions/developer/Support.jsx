import { Box } from "@mui/material";
import { GridRow, Line } from "../../global/index";
import { HeadingSmall, HeadingSmallListItem } from "../index";

export const Support = () => {
  return (
    <>
      <GridRow xxs="span 4" sm="span 6" md="span 12">
        <Line />
      </GridRow>
      <GridRow xxs="span 4" sm="span 6" md="span 3">
        <Box>
          <HeadingSmall text="SUPPORT" />
        </Box>
      </GridRow>
      <GridRow xxs="span 4" sm="span 6" md="span 9">
        <ul>
          <HeadingSmallListItem text="Read the docs" />
          <HeadingSmallListItem text="Ask Ubuntu" /> 
          <HeadingSmallListItem text="IRC Channels " />
          <HeadingSmallListItem text="Help" />
          <HeadingSmallListItem text="Commercial Support" />
        </ul>
      </GridRow>
    </>
  );
};
