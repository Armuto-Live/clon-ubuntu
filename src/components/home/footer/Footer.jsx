import { useState } from "react";
import { FooterListItem } from "./FooterListItem.jsx";
import {
  styled,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
  Typography,
} from "@mui/material";

import {
  LayoutMaxWidth,
  GridRow,
  LinkItem,
  LineSeparator,
} from "../../global/index";

import { DataFooter } from "./contentFooter.js";

const FooterContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    padding: "2.5rem 0",
  },
}));

const FooterLinks = styled("li")(({ theme }) => ({
  listStyleType: "none",
  padding: "0",
}));

const FooterItem = styled(Accordion)(({ theme }) => ({
  boxShadow: "none",
  borderBottom: "thin solid #d9d9d9",
  borderRadius: "none",
  fontSize: ".8rem",
  [theme.breakpoints.up("sm")]: {
    padding: "0",
    borderBottom: "none",
  },
}));

const FooterTitle = styled(AccordionSummary)(({ theme }) => ({
  margin: "0",
  padding: "0",
  "&:.css-195c94e-MuiButtonBase-root-MuiAccordionSummary-root": {
    cursor: "default",
  },
  "&:.css-o4b71y-MuiAccordionSummary-content": {
    margin: "0",
    cursor: "default",
  },
}));

const FooterSecondLevel = styled("h2")(({ theme }) => ({}));

const FooterAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  margin: "0",
}));

const FooterList = styled("ul")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  color: "#000",
  [theme.breakpoints.up("sm")]: {
    alignItems: "center",
    flexDirection: "row",
  },
}));

export const Footer = () => {
  const isSmallScreen = useMediaQuery("(min-width:620px)");
  const [expanded, setExpanded] = useState(isSmallScreen);

  const handleExpanded = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  const datos = [
    DataFooter.slice(0, 3),
    DataFooter.slice(3, 7),
    DataFooter.slice(7, 10),
    DataFooter.slice(10, 13),
    DataFooter.slice(13, 16),
    DataFooter.slice(16, 26),
  ];
  return (
    <FooterContainer>
      <LayoutMaxWidth>
        {datos.map((datos, index) => (
          <GridRow xxs="span 4" sm="span 2" md="span 2" key={index}>
            {datos.map(({ id, title, menu }) => {
              return (
                <FooterLinks key={id}>
                  <FooterItem
                    expanded={!isSmallScreen ? expanded : true}
                    onChange={!isSmallScreen ? handleExpanded : () => {}}
                  >
                    <FooterTitle>{title}</FooterTitle>
                    {menu.map(({ name, link }, index) => {
                      return (
                        <FooterAccordionDetails
                          sx={{ padding: "0" }}
                          key={index}
                        >
                          <LinkItem to={link} sx={{ color: "black" }}>
                            {name}
                          </LinkItem>
                        </FooterAccordionDetails>
                      );
                    })}
                  </FooterItem>
                </FooterLinks>
              );
            })}
          </GridRow>
        ))}
      </LayoutMaxWidth>
      <hr />
      <LayoutMaxWidth>
        <GridRow
          xxs="span 4"
          sm="span 6"
          md="span 7"
          sx={{ paddingTop: "1.5rem" }}
        >
          <FooterList>
            <FooterListItem
              sx={{
                border: "1.5px solid rgba(0,0,0,.56)",
                padding: "calc(.4rem - 1px) 1rem",
                display: { xxs: "none", sm: "block" },
              }}
              text="Contact us"
            />
            <FooterListItem
              text="Contact us"
              sx={{ display: { xxs: "block", sm: "none" } }}
            />
            <FooterListItem text="About us" />
            <FooterListItem text="Community" />
            <FooterListItem text="Careers" />
            <FooterListItem text="Blog" />
            <FooterListItem text="Resources" />
            <FooterListItem text="Press centre" />
          </FooterList>
          <Typography variant="subtitle2">
            © 2024 Canonical Ltd. Ubuntu and Canonical are registered trademarks
            of Canonical Ltd.
          </Typography>
          <FooterList>
            <FooterListItem text="Legal information" />
            <FooterListItem text="Data privacy" />
            <FooterListItem text="Manage your tracker settings" />
            <FooterListItem text="Report a bug on this site" />
          </FooterList>
        </GridRow>
        <GridRow xxs="span 4" sm="span 6" md="span 5">
          as
        </GridRow>
      </LayoutMaxWidth>
    </FooterContainer>
  );
};
