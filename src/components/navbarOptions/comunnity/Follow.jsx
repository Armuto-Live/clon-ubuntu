import { Box, Typography } from "@mui/material";
import { GridRow, ParagraphSmall } from "../../global/index";
import { TextListSmallItem, TextListSmall } from "../index";
import { ViewNavbarTitle } from "../../../style";
export const Follow = () => {
  return (
    <GridRow xxs="span 4" sm="span 6" md="span 4">
      <Box sx={{ display: { xxs: "none", sm: "block" } }}>
        <Typography variant="body2">Follow</Typography>
      </Box>
      <ViewNavbarTitle sx={{ display: { xxs: "block", sm: "none" } }}>
        Follow
      </ViewNavbarTitle>
      <TextListSmall>
        <TextListSmallItem text="Ubuntu on Twitter" />
        <TextListSmallItem text="Facebook" />
      </TextListSmall>
    </GridRow>
  );
};
