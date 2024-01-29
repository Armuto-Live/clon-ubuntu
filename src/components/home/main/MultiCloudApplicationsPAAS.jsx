import {
  PStripShadow,
  Items,
  StripNoticeLogoSection,
  StripNoticeLogoSectionItems,
} from "../../../style";
import { PStrip, LayoutMaxWidth, GridRow, LinkItem } from "../../global";
import Typography from "@mui/material/Typography";
import { InlineListItem, LogoItem, ItemTicked } from "./index";

export const MultiCloudApplicationsPAAS = () => {
  return (
    <PStrip
      sx={{
        "&:after": {
          content: '""',
          position: "absolute",
          height: ".1875rem",
          bottom: "0",
          left: "0",
          right: "0",
          backgroundColor: "#e95420",
        },
      }}
    >
      <LayoutMaxWidth>
        <GridRow xxs="span 4" sm="span 6" md="span 12">
          <Typography variant="h2">
            Multi-cloud applications – beyond PAAS
          </Typography>
          <Typography variant="body2">
            <LinkItem>Universal model-driven operators for classic</LinkItem>{" "}
            and <LinkItem>Kubernetes estate</LinkItem>.
          </Typography>
        </GridRow>
      </LayoutMaxWidth>
      <PStripShadow>
        <LayoutMaxWidth>
          <GridRow xxs="span 4" sm="span 6" md="span 12">
            <Items>
              <ItemTicked>
                Operate smoothly across public and private cloud
              </ItemTicked>
              <ItemTicked>
                Reusable integration code as open source packages
              </ItemTicked>
              <ItemTicked>Fault tolerant over-the-air updates</ItemTicked>
              <ItemTicked>
                Python Operator Framework for rapid development
              </ItemTicked>
              <ItemTicked>
                Bring the K8s operator pattern to classic workloads
              </ItemTicked>
              <ItemTicked>Lifecycle management and Day 2 operations</ItemTicked>
              <ItemTicked>
                <LinkItem>Open collection</LinkItem> of community-driven
                operators
              </ItemTicked>
            </Items>
            <ul>
              <InlineListItem text="Learn more ›" />
              <InlineListItem text="Contact us ›" />
            </ul>
          </GridRow>
          <GridRow xxs="span 4" sm="span 6" md="span 12">
            <StripNoticeLogoSection>
              <StripNoticeLogoSectionItems>
                <LogoItem
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/1dc7af1e-panasonic-logo.png"
                  alt="Panasonic"
                />
                <LogoItem
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/52e19575-scania-logo.png"
                  alt="Scania"
                />
                <LogoItem
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/6a3b49ef-sbi-bits-logo.png"
                  alt="SBI BITS"
                />
                <LogoItem
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/de8ab04f-swissquote-logo.png"
                  alt="Swissquote"
                />
              </StripNoticeLogoSectionItems>
            </StripNoticeLogoSection>
          </GridRow>
        </LayoutMaxWidth>
      </PStripShadow>
    </PStrip>
  );
};
