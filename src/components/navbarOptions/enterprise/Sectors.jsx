import { styled, Box } from "@mui/material";
import { GridRow, LinkItem, Line } from "../../global/index";
import { HeadingSmall, HeadingSmallListItem } from "../index";

export const Sectors = () => {
  return (
    <>
      <GridRow xxs="span 4" sm="span 6" md="span 12">
        <Line />
      </GridRow>
      <GridRow xxs="span 4" sm="span 6" md="span 3">
        <Box>
          <HeadingSmall text="Sectors" />
        </Box>
      </GridRow>
      <GridRow xxs="span 4" sm="span 6" md="span 9">
        <ul>
          <HeadingSmallListItem text="Telco" />
          <HeadingSmallListItem text="Finace" />
          <HeadingSmallListItem text="Government" />
          <HeadingSmallListItem text="Signage" />
          <HeadingSmallListItem text="Robotics" />
          <HeadingSmallListItem text="Gateways" />
          <HeadingSmallListItem text="Automotive" />
          <HeadingSmallListItem text="Organisations" />
        </ul>
      </GridRow>
    </>
  );
};
