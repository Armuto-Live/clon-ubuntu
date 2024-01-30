import { Box, Typography } from "@mui/material";
import { GridRow, ParagraphSmall } from "../../global/index";
import { TextListSmallItem, TextListSmall } from "../index";
import { ViewNavbarTitle } from "../../../style";
export const Learn = () => {
  return (
    <GridRow xxs="span 4" sm="span 6" md="span 4">
      <Box sx={{ display: { xxs: "none", sm: "block" } }}>
        <Typography variant="body2">Learn</Typography>
        <ParagraphSmall text="Tutorials cover a wide range of topics. Learn or teach something new to Ubuntu users." />
      </Box>
      <ViewNavbarTitle sx={{ display: { xxs: "block", sm: "none" } }}>
        Learn
      </ViewNavbarTitle>
      <TextListSmall>
        <TextListSmallItem text="Ubuntu Tutorials" />
        <TextListSmallItem text="Ubuntu documentation" />
        <TextListSmallItem text="Ubuntu events on Youtube" />
        <TextListSmallItem text="The Juju Cloud Operations Show" />
        <TextListSmallItem text="Get inspired by Ubuntu Masters" />
      </TextListSmall>
    </GridRow>
  );
};
