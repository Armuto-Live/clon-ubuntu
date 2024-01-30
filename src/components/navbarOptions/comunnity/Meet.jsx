import { Box, Typography } from "@mui/material";
import { GridRow, ParagraphSmall } from "../../global/index";
import { TextListSmallItem, TextListSmall } from "../index";
import { ViewNavbarTitle } from "../../../style";

export const Meet = () => {
  return (
    <GridRow xxs="span 4" sm="span 6" md="span 4">
      <Box sx={{ display: { xxs: "none", sm: "block" } }}>
        <Typography variant="body2">Meet</Typography>
        <ParagraphSmall text="Find and meet the people who shape the direction of Ubuntu." />
      </Box>
      <ViewNavbarTitle sx={{ display: { xxs: "block", sm: "none" } }}>
        Meet
      </ViewNavbarTitle>
      <TextListSmall>
        <TextListSmallItem text="Ubuntu Discourse" />
        <TextListSmallItem text="Ask Ubuntu — our StackExchange" />
        <TextListSmallItem text="Join your Local Community team" />
        <TextListSmallItem text="Ubuntu Forums" />
        <TextListSmallItem text="Chat on IRC" />
      </TextListSmall>
    </GridRow>
  );
};
