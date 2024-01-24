import { useState } from "react";
import {
  styled,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
} from "@mui/material";

import { LayoutMaxWidth, GridRow, LinkItem } from "../../global/index";

import { DataFooter } from "./contentFooter.js";

const FooterContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    padding: "2.5rem 0",
  },
}));

const FooterLinks = styled("li")(({ theme }) => ({
  listStyleType: "none",
}));

const FooterItem = styled(Accordion)(({ theme }) => ({
  boxShadow: "none",
  borderBottom: "thin solid red",
  borderRadius: "none",
  padding: "0 1rem",
  fontSize: ".8rem",
  [theme.breakpoints.up("sm")]: {
    padding: "0",
    borderBottom: "none",
  },
}));

const FooterTitle = styled(AccordionSummary)(({ theme }) => ({
  // cursor:"default",
  // [theme.breakpoints.up("sm")]: {
  //   cursor: "default",
  // },
}));

const FooterSecondLevel = styled("h2")(({ theme }) => ({}));

export const Footer = () => {
  const isSmallScreen = useMediaQuery("(min-width:620px)");
  const [expanded, setExpanded] = useState(isSmallScreen);

  const handleExpanded = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <FooterContainer>
      <LayoutMaxWidth sx={{ padding: "0" }}>
        {DataFooter.map(({ id, title, menu }) => {
          return (
            <GridRow xxs="span 4" sm="span 2" md="span 2">
                <FooterLinks key={id}>
                  <FooterItem
                    expanded={!isSmallScreen ? expanded : true}
                    onChange={!isSmallScreen ? handleExpanded : () => {}}
                  >
                    <FooterTitle sx={{ padding: "0" }}>{title}</FooterTitle>
                    {menu.map(({ name, link, index }) => {
                      return (
                        <AccordionDetails sx={{ padding: "0" }}>
                          <LinkItem sx={{ color: "black" }} key={index}>
                            {name}
                          </LinkItem>
                        </AccordionDetails>
                      );
                    })}
                  </FooterItem>
                </FooterLinks>
            </GridRow>
          );
        })}
      </LayoutMaxWidth>
    </FooterContainer>
  );
};
