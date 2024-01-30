import { Box, Typography } from "@mui/material";
import { GridRow, LinkItem, ParagraphSmall, Button } from "../../global/index";

import { TitleMobile, TextListSmallItem, TextListSmall } from "../index";

export const Tutorials = () => {
  return (
    <GridRow xxs="span 4" sm="span 6" md="span 3">
      <TitleMobile text={"Tutorials ›"} />
      <ParagraphSmall text="Fun guides and HOWTOs covering Ubuntu cloud, desktop, server, community, IoT, packaging and more." />
      <TextListSmall>
        <TextListSmallItem text="How to write a tutorial" />
      </TextListSmall>
    </GridRow>
  );
};
