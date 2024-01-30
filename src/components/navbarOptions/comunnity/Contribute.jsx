import { Box, Typography } from "@mui/material";
import { GridRow, ParagraphSmall } from "../../global/index";
import { TextListSmallItem, TextListSmall } from "../index";
import { ViewNavbarTitle } from "../../../style";

export const Contribute = () => {
  return (
    <GridRow xxs="span 4" sm="span 6" md="span 4">
      <Box sx={{ display: { xxs: "none", sm: "block" } }}>
        <Typography variant="body2">Contribute</Typography>
      </Box>
      <ViewNavbarTitle sx={{ display: { xxs: "block", sm: "none" } }}>
        Contribute
      </ViewNavbarTitle>
      <TextListSmall>
        <TextListSmallItem text="Translate Ubuntu into your language" />
        <TextListSmallItem text="Improve the documentation" />
        <TextListSmallItem text="Donate to the project" />
      </TextListSmall>
    </GridRow>
  );
};
