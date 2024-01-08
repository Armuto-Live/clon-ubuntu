import React, { useState } from "react";

import { LayoutMaxWidth } from "../LayoutMaxWidth";

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
import { Grid, Box } from "@mui/material";
import { contentData } from "./contentTakeover";


export const Takeover = () => {
  const [random] = useState(Math.floor(Math.random() * contentData.length));

  const { title, subTitle, buttonText, text, imageSrc } = contentData[random];

  const backgroundImage = contentData[random].backgroundImage;

  return (
    <TakeOverSection sx={{ backgroundImage }}>
      <LayoutMaxWidth>
        <Grid item xs={12} md={7} lg={7} xl={7}>
          <TakeOverTitle variant="h4">{title}</TakeOverTitle>
          <TakeOverSubTitle variant="body1">{subTitle}</TakeOverSubTitle>
          <Box>
            <TakeOverCtasParraf variant="body2">
              <TakeOverLinkButton>{buttonText}</TakeOverLinkButton>
            </TakeOverCtasParraf>
            <TakeOverCtasParraf variant="body2">
              <TakeOverLinkText>{text}</TakeOverLinkText>
            </TakeOverCtasParraf>
          </Box>
        </Grid>
        <Grid
          item
          md={5}
          sx={{ display: { xxs: "none", md: "block" } }}
        >
          <Grid container alignContent="center" justifyContent="center">
            <TakeOverImg src={imageSrc} width="400" height="150" />
          </Grid>
        </Grid>
      </LayoutMaxWidth>
    </TakeOverSection>
  );
};
