import { Box, Typography } from "@mui/material";
import { GridRow, LinkItem, ParagraphSmall, Button } from "../../global/index";

import { TitleMobile, TextListSmallItem, TextListSmall } from "../index";
export const AIAndMachineLearning = () => {
  return (
    <GridRow xxs="span 4" sm="span 6" md="span 3" >
        <TitleMobile text={"AI & Machine Learning ›"} />
        <ParagraphSmall text="Ubuntu delivers hardware acceleration on NVIDIA for all clouds and bare metal." />
      <TextListSmall>
        <TextListSmallItem text="What is Kubeflow" />
        <TextListSmallItem text="Easy Kubeflow operations" />
        <TextListSmallItem text="Install Kubeflow in 5 min" />
      </TextListSmall>
      <Button text="Develop with AI/ML" isStart="true" />
    </GridRow>
  );
};
