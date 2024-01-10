import React, { useState } from "react";

import { Grid, Box } from "@mui/material";
import { GridRow,LayoutMaxWidth } from "../global";

import {
  TakeOverSection,
  TakeOverSectionAnimation,
  TakeOverTitle,
  TakeOverSubTitle,
  TakeOverCtasParraf,
  TakeOverLinkButton,
  TakeOverLinkText,
  TakeOverImg,
} from "../../style";


import { contentData } from "./contentTakeover";


export const Takeover = () => {
  const [random] = useState(Math.floor(Math.random() * contentData.length));

  const { title, subTitle, buttonText, text, imageSrc,height,width } = contentData[random];

  const backgroundImage = contentData[random].backgroundImage;

  return (
    <TakeOverSection sx={{ backgroundImage }}>
      <LayoutMaxWidth >
        <GridRow xxs="span 4" sm="span 6" md="span 7">
          <TakeOverTitle>{title}</TakeOverTitle>
          <TakeOverSubTitle variant="body1">{subTitle}</TakeOverSubTitle>
          <Box>
            <TakeOverCtasParraf variant="body2">
              <TakeOverLinkButton>{buttonText}</TakeOverLinkButton>
            </TakeOverCtasParraf>
            <TakeOverCtasParraf variant="body2">
              <TakeOverLinkText>{text}</TakeOverLinkText>
            </TakeOverCtasParraf>
          </Box>
        </GridRow>
        <GridRow
          xxs="span 4" sm="span 4" md="span 5"
          sx={{ display: { xxs: "none", md: "flex" } }}
        >
          <Grid container alignContent="center" justifyContent="center">
            <TakeOverImg src={imageSrc} width={width} height={height} />
          </Grid>
        </GridRow>
      </LayoutMaxWidth>
    </TakeOverSection>
  );
};
