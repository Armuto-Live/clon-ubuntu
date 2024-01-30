import { Box, Typography } from "@mui/material";
import { GridRow, ParagraphSmall } from "../../global/index";
import { TextListSmallItem, TextListSmall } from "../index";
import { ViewNavbarTitle } from "../../../style";

export const Ethos = () => {
  return (
    <GridRow xxs="span 4" sm="span 6" md="span 4">
      <Box sx={{ display: { xxs: "none", sm: "block" } }}>
        <Typography variant="body2">Ethos</Typography>
        <ParagraphSmall text="The mission of Ubuntu is to bring the benefits of free software to the widest possible audience." />
      </Box>
      <ViewNavbarTitle sx={{ display: { xxs: "block", sm: "none" } }}>
      Ethos
      </ViewNavbarTitle>
      <TextListSmall>
        <TextListSmallItem text="Our mission" />
        <TextListSmallItem text="Ubuntu Code of Conduct" />
      </TextListSmall>
    </GridRow>
  );
};
