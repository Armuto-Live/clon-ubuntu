import { Typography } from "@mui/material";
import { GridRow } from "../../global/index";

import { TitleMobile, TextListSmallItem, TextListSmall } from "../index";
export const Partners = () => {
  return (
    <GridRow xxs="span 4" sm="span 6" md="span 4">
      <TitleMobile text="Partners ›" />
      <TextListSmall>
        <Typography variant="subtitle1" sx={{fontSize:{xxs:"1rem",sm:".98rem"},fontWeight:"350"}}>
          Our partners provide the expertise, integration and commitment to
          deliver the solutions you need. Meet our partner community, and learn
          about programs for working together.
        </Typography>
      </TextListSmall>
    </GridRow>
  );
};
