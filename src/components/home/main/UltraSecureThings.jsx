import {
  PStripShadow,
  Items,
  StripNoticeLogoSection,
  StripNoticeLogoSectionItems,
} from "../../../style";
import { PStrip, LayoutMaxWidth, GridRow, LinkItem } from "../../global";
import Typography from "@mui/material/Typography";
import { InlineListItem, LogoItem, ItemTicked } from "./index";

export const UltraSecureThings = () => {
  return (
    <PStrip light="true">
      <LayoutMaxWidth>
        <GridRow xxs="span 4" sm="span 6" md="span 12">
          <Typography variant="h2">Ultra secure things</Typography>
          <Typography variant="body2">
            <LinkItem> Ubuntu Core Appliances</LinkItem> with transactional
            updates <LinkItem>for a better embedded Linux</LinkItem>.
          </Typography>
        </GridRow>
      </LayoutMaxWidth>
      <PStripShadow>
        <LayoutMaxWidth>
          <GridRow xxs="span 4" sm="span 6" md="span 12">
            <Items>
              <ItemTicked>
                OTA compressed updates for apps, kernel and OS
              </ItemTicked>
              <ItemTicked>Automatic rollback and data snapshots</ItemTicked>
              <ItemTicked>
                <LinkItem>Managed private app stores</LinkItem> for secure fleet
                management
              </ItemTicked>
              <ItemTicked>DevSecOps pipeline for edge app delivery </ItemTicked>
              <ItemTicked>
                Built-in device recovery and remote disk repair{" "}
              </ItemTicked>
              <ItemTicked>
                10 year security maintenance for every device
              </ItemTicked>
              <ItemTicked>Provable system and software integrity</ItemTicked>
              <ItemTicked>Secure boot backed by root of trust</ItemTicked>
              <ItemTicked>Full disk encryption with hardware keys</ItemTicked>
              <ItemTicked>FIPS certifiable embedded Linux</ItemTicked>
              <ItemTicked>
                <LinkItem>Support for real-time compute</LinkItem>
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
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/67f81bfe-intel-new-logo.png"
                  alt="Intel"
                />
                <LogoItem
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/5e075792-rexroth-logo.png"
                  alt="Bosch Rexroth"
                />
                <LogoItem
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/711be910-arm-logo.png"
                  alt="ARM"
                />
                <LogoItem
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/987acdaa-dell-logo.png"
                  alt="Dell"
                />
                <LogoItem
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/2b253402-advantech-logo.png"
                  alt="Advantech"
                />
              </StripNoticeLogoSectionItems>
            </StripNoticeLogoSection>
          </GridRow>
        </LayoutMaxWidth>
      </PStripShadow>
    </PStrip>
  );
};
