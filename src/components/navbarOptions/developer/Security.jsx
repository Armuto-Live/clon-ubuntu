import { Box } from "@mui/material";
import { GridRow, Line } from "../../global/index";
import { HeadingSmall, HeadingSmallListItem } from "../index";

export const Security = () => {
  return (
    <>
    <GridRow xxs="span 4" sm="span 6" md="span 12">
      <Line />
    </GridRow>
    <GridRow xxs="span 4" sm="span 6" md="span 3">
      <Box>
        <HeadingSmall text="SECURITY" />
      </Box>
    </GridRow>
    <GridRow xxs="span 4" sm="span 6" md="span 9">
      <ul>
        <HeadingSmallListItem text="Security" />
        <HeadingSmallListItem text="Certifications" /> 
        <HeadingSmallListItem text="Notices" />
        <HeadingSmallListItem text="CVEs" />
        <HeadingSmallListItem text="Expanded Security Maintenance" />
      </ul>
    </GridRow>
  </>
  )
}
