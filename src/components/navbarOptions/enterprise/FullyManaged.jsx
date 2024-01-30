import { styled, Box } from "@mui/material";
import { GridRow, LinkItem, Line } from "../../global/index";
import { HeadingSmall, HeadingSmallListItem } from "../index";

export const FullyManaged = () => {
  return (
    <>
      <GridRow xxs="span 4" sm="span 6" md="span 12">
        <Line />
      </GridRow>
      <GridRow xxs="span 4" sm="span 6" md="span 3">
        <Box>
          <HeadingSmall text="Fully managed" />
        </Box>
      </GridRow>
      <GridRow xxs="span 4" sm="span 6" md="span 9">
        <ul>
          <HeadingSmallListItem text="OpenStack" />
          <HeadingSmallListItem text="Kubernetes" />
          <HeadingSmallListItem text="Managed apps" />
          <HeadingSmallListItem text="Anbox Cloud" />
          <HeadingSmallListItem text="IoT Professional Services" />
        </ul>
      </GridRow>
    </>
  );
};
