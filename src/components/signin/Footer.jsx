import { styled, Typography } from "@mui/material";
import { PStrip, LayoutMaxWidth, GridRow, LinkItem } from "../global";

const InlineList = styled("ul")(({ theme }) => ({}));

const InlineListItem = styled("li")(({ theme }) => ({
  position: "relative",
  display: "inline-block",
  marginRight: "20px",
  "&::after": {
    color: "#666",
    content: "'\u00b7'",
    fontSize: "1.4rem",
    lineHeight: "0",
    position: "absolute",
    right: "-.6rem",
    top: ".7rem",
  },
  "&:last-child::after": {
    content: "''",
  },
}));

export const Footer = () => {
  return (
    <PStrip
      sx={{
        padding: "1rem 0",
        fontWeight: "300",
        "@media (min-width:1037px)": {
          padding: "2rem 0",
        },
      }}
    >
      <LayoutMaxWidth sx={{ maxWidth: "72em" }}>
        <GridRow xxs="span 4" xs="span 4" md="span 12">
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: "300",
            }}
          >
            Ubuntu One. One place to log in to everything on Ubuntu.
          </Typography>
          <InlineList>
            <InlineListItem>
              <LinkItem>Terms</LinkItem>
            </InlineListItem>
            <InlineListItem>
              <LinkItem>Canonical privacy notice</LinkItem>
            </InlineListItem>
            <InlineListItem>
              <LinkItem>SSO privacy notice</LinkItem>
            </InlineListItem>
            <InlineListItem>
              <LinkItem>Support</LinkItem>
            </InlineListItem>
            <InlineListItem>
              <LinkItem>Manage your tracker settings</LinkItem>
            </InlineListItem>
            <InlineListItem>
              <LinkItem>Report a bug on this site</LinkItem>
            </InlineListItem>
            <InlineListItem>
              <LinkItem>Switch language</LinkItem>
            </InlineListItem>
          </InlineList>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: "300",
              maxWidth: "40em",
            }}
          >
            © Copyright 2024 Canonical Ltd. ‘Ubuntu One’ and ‘Canonical’ are
            registered trademarks of Canonical Ltd.
          </Typography>
        </GridRow>
      </LayoutMaxWidth>
    </PStrip>
  );
};
