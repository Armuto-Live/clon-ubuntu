import React, { useState } from "react";

import { Grid, Box, styled } from "@mui/material";
import { GridRow, LayoutMaxWidth } from "../../global";

import {
  TakeOverSection,
  TakeOverSectionAnimation,
  TakeOverTitle,
  TakeOverSubTitle,
  TakeOverCtasParraf,
  TakeOverLinkButton,
  TakeOverLinkText,
  TakeOverImg,
} from "../../../style";

import { contentData } from "./contentTakeover";

const ContentInformation = styled(Grid)(({ theme }) => ({
  animation: `slideFromLeft .165s cubic-bezier(0.215, 0.61, 0.355, 1)`,
  "@keyframes slideFromLeft": {
    "0%": {
      transform: "translateX(-0.5rem)",
    },
    "100%": {
      transform: "translateX(0)",
    },
  },
}));

const ContentImg = styled(Grid)(({ theme }) => ({
  animation: `slideFromRight .165s cubic-bezier(0.215, 0.61, 0.355, 1)`,
  "@keyframes slideFromRight": {
    "0%": {
      transform: "translateX(0.5rem)",
    },
    "100%": {
      transform: "translateX(0)",
    },
  },
}));

export const Takeover = () => {
  const [random] = useState(Math.floor(Math.random() * contentData.length));

  const { title, subTitle, buttonText, text, imageSrc, height, width } =
    contentData[random];

  const backgroundImage = contentData[random].backgroundImage;

  return (
    <TakeOverSection sx={{ backgroundImage }}>
      <LayoutMaxWidth>
        <GridRow xxs="span 4" sm="span 6" md="span 7">
          <ContentInformation>
            <TakeOverTitle>{title}</TakeOverTitle>
            <TakeOverSubTitle>{subTitle}</TakeOverSubTitle>
            <Box>
              <TakeOverCtasParraf variant="body2">
                <TakeOverLinkButton>{buttonText}</TakeOverLinkButton>
              </TakeOverCtasParraf>
              <TakeOverCtasParraf variant="body2">
                <TakeOverLinkText>{text}</TakeOverLinkText>
              </TakeOverCtasParraf>
            </Box>
          </ContentInformation>
        </GridRow>
        <GridRow
          xxs="span 4"
          sm="span 4"
          md="span 5"
          sx={{ display: { xxs: "none", md: "flex" } }}
        >
          <ContentImg container alignContent="center" justifyContent="center">
            <TakeOverImg src={imageSrc} width={width} height={height} />
          </ContentImg>
        </GridRow>
      </LayoutMaxWidth>
    </TakeOverSection>
  );
};
