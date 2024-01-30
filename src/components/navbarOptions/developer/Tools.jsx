import { Box } from "@mui/material";
import { GridRow, Line } from "../../global/index";
import { HeadingSmall, HeadingSmallListItem } from "../index";

export const Tools = () => {
  return (
    <>
    <GridRow xxs="span 4" sm="span 6" md="span 12">
      <Line />
    </GridRow>
    <GridRow xxs="span 4" sm="span 6" md="span 3">
      <Box>
        <HeadingSmall text="TOOLS" />
      </Box>
    </GridRow>
    <GridRow xxs="span 4" sm="span 6" md="span 9">
      <ul>
        <HeadingSmallListItem text="cloud-init" />
        <HeadingSmallListItem text="netplan" /> 
        <HeadingSmallListItem text="Juju" />
        <HeadingSmallListItem text="Snapcraft" />
        <HeadingSmallListItem text="LXD" />
        <HeadingSmallListItem text="Multipass" />
      </ul>
    </GridRow>
  </>
  )
}
