import { Typography } from "@mui/material";
import { LayoutMaxWidth, PStrip, GridRow, LinkItem } from "../global";
import {
  PStripShadow,
  Items,
  StripNoticeLogoSection,
  StripNoticeLogoSectionItems,
} from "../../style";
import { InlineListItem, LogoItem, ItemTicked } from "./index";

export const CarrierGradePrivateCloud = () => {
  return (
    <PStrip light="true">
      <LayoutMaxWidth>
        <GridRow xxs="span 4" sm="span 6" md="span 12">
          <Typography variant="h2">Carrier-grade private cloud</Typography>
          <Typography variant="body2">
            Operate <LinkItem>private cloud the smart way</LinkItem> – supported or <LinkItem>fully managed</LinkItem>.
          </Typography>
        </GridRow>
      </LayoutMaxWidth>
      <PStripShadow>
        <LayoutMaxWidth>
          <GridRow xxs="span 4" sm="span 6" md="span 12">
            <Items>
              <ItemTicked>
                10 year <LinkItem>security maintenance</LinkItem> and{" "}
                <LinkItem>support</LinkItem>
              </ItemTicked>
              <ItemTicked>
                <LinkItem>Hyperconverged</LinkItem> or segregated architecture
              </ItemTicked>
              <ItemTicked>
                <LinkItem>Encryption at rest for GDPR, HIPAA, FedRAMP</LinkItem>
              </ItemTicked>
              <ItemTicked>Wide choice of SDN and storage</ItemTicked>
              <ItemTicked>
                <LinkItem>Upgrades and day-2 operations, automated</LinkItem>
              </ItemTicked>
              <ItemTicked>
                Integrated logging, monitoring and alerting
              </ItemTicked>
              <ItemTicked>Platform and infrastructure hardening</ItemTicked>
              <ItemTicked>High availability</ItemTicked>
              <ItemTicked>
                <LinkItem>Carrier-grade NFVI</LinkItem>
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
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/bd2a3282-bt-logo.png"
                  alt="BT"
                />
                <LogoItem
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/c6e197c4-deutsche-telekom-logo.png"
                  alt="Deutsche Telecom"
                />
                <LogoItem
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/6143a8ce-rabobank-logo.png"
                  alt="Rabobank"
                />
                <LogoItem
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/698f7a58-best-buy-logo.png"
                  alt="Best Buy"
                />
                <LogoItem
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/b1e3d2d2-bloomberg-logo.png"
                  alt="Bloomberg"
                />
                <LogoItem
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/6cd78b57-at%26t-logo.png"
                  alt="AT&T"
                />
              </StripNoticeLogoSectionItems>
            </StripNoticeLogoSection>
          </GridRow>
        </LayoutMaxWidth>
      </PStripShadow>
    </PStrip>
  );
};
