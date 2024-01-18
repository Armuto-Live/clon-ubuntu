import {
  PStripShadow,
  Items,
  StripNoticeLogoSection,
  StripNoticeLogoSectionItems,
} from "../../style";
import { PStrip, LayoutMaxWidth, GridRow, LinkItem } from "../global";
import Typography from "@mui/material/Typography";
import { InlineListItem, LogoItem,ItemTicked } from "./index";

export const PublicCloud = () => {
  return (
    <PStrip>
      <LayoutMaxWidth>
        <GridRow xxs="span 4" sm="span 6" md="span 12">
          <Typography variant="h2">Public cloud optimisation</Typography>
          <Typography variant="body2">
            Most public cloud instances are Ubuntu, for performance and
            security.
          </Typography>
        </GridRow>
      </LayoutMaxWidth>
      <PStripShadow>
        <LayoutMaxWidth>
          <GridRow xxs="span 4" sm="span 6" md="span 12">
            <Items>
              <ItemTicked>
                Optimised kernels for AWS, Azure, Google, Oracle, IBM
              </ItemTicked>
              <ItemTicked>
                <LinkItem>FIPS, CIS hardening</LinkItem> and CVE fixes with
                Ubuntu Pro
              </ItemTicked>
              <ItemTicked>
                Minimise rolling reboots with{" "}
                <LinkItem>Kernel Livepatch</LinkItem>
              </ItemTicked>
              <ItemTicked>
                Network & storage performance optimisation
              </ItemTicked>
              <ItemTicked>
                GPU enablement for machines and containers
              </ItemTicked>
              <ItemTicked>Pay-as-you-go billing, no more licenses</ItemTicked>
              <ItemTicked>
                <LinkItem>Enterprise support</LinkItem> and{" "}
                <LinkItem>Extended Security Maintenance</LinkItem>
              </ItemTicked>
              <ItemTicked>Cloud workload migration service</ItemTicked>
              <ItemTicked>
                Containerisation and cloud-native migration service
              </ItemTicked>
              <ItemTicked>Fully managed application service</ItemTicked>
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
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_576,h_576/https://assets.ubuntu.com/v1/6889bfcb-uber-logo.png"
                  alt="Uber"
                />
                <LogoItem
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_576,h_576/https://assets.ubuntu.com/v1/2ef9f6ff-spotify-logo.png"
                  alt="Spotify"
                />
                <LogoItem
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_576,h_576/https://assets.ubuntu.com/v1/2b6c1718-bmp-paribas-logo.png"
                  alt="BNP Paribas"
                />
              </StripNoticeLogoSectionItems>
            </StripNoticeLogoSection>
          </GridRow>
        </LayoutMaxWidth>
      </PStripShadow>
    </PStrip>
  );
};
