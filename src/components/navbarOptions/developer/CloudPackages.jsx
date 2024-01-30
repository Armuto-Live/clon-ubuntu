import { Box, Typography } from "@mui/material";
import { GridRow, LinkItem, ParagraphSmall, Button } from "../../global/index";

import { TitleMobile, TextListSmallItem, TextListSmall } from "../index";
export const CloudPackages = () => {
  return (
    <GridRow xxs="span 4" sm="span 6" md="span 3">
      <TitleMobile text={"Cloud packages ›"} />
      <ParagraphSmall text="A standard way to deploy and operate cloud software like Hadoop, Spark, OpenStack and Kubernetes." />
      <Button text="Discover Charm Packages" isStart="true" />
    </GridRow>
  );
};
