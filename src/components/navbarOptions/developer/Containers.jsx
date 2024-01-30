import { Box, Typography } from "@mui/material";
import { GridRow, LinkItem, ParagraphSmall, Button } from "../../global/index";

import { TitleMobile, TextListSmallItem, TextListSmall } from "../index";
export const Containers = () => {
  return (
    <GridRow xxs="span 4" sm="span 6" md="span 3">
      <TitleMobile text={"Containers ›"} />
      <TextListSmall>
        <TextListSmallItem text="Kubernetes on Ubuntu" />
        <TextListSmallItem text="Install K8s – workstations" />
        <TextListSmallItem text="Install K8s – clouds and clusters" />
        <TextListSmallItem text="Run pre-K8s apps in LXD containers" />
      </TextListSmall>
    </GridRow>
  );
};
