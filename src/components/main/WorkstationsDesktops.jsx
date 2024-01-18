import {
  PStripShadow,
  Items,
  StripNoticeLogoSection,
  StripNoticeLogoSectionItems,
} from "../../style";
import { PStrip, LayoutMaxWidth, GridRow, LinkItem } from "../global";
import Typography from "@mui/material/Typography";
import { InlineListItem, LogoItem, ItemTicked } from "./index";

export const WorkstationsDesktops = () => {
  return (
    <PStrip>
      <LayoutMaxWidth>
        <GridRow xxs="span 4" sm="span 6" md="span 12">
          <Typography variant="h2">Workstations and desktops</Typography>
          <Typography variant="body2">
            <LinkItem>Optimised AI/ML</LinkItem> and cloud devops. The professional developer’s
            preference.
          </Typography>
        </GridRow>
      </LayoutMaxWidth>
      <PStripShadow>
        <LayoutMaxWidth>
          <GridRow xxs="span 4" sm="span 6" md="span 12">
            <Items>
              <ItemTicked><LinkItem>Active Directory</LinkItem> and LDAP integration </ItemTicked>
              <ItemTicked>Full disk encryption</ItemTicked>
              <ItemTicked>
                Security updates for the <LinkItem>full open source stack</LinkItem>
              </ItemTicked>
              <ItemTicked>Estate <LinkItem>monitoring and management</LinkItem></ItemTicked>
              <ItemTicked>Configuration lockdown</ItemTicked>
              <ItemTicked>Local Kubernetes for offline development</ItemTicked>
              <ItemTicked>
                Instant Ubuntu on Windows and macOS with <LinkItem>WSL</LinkItem> and <LinkItem>Multipass</LinkItem>
              </ItemTicked>
              <ItemTicked>
                Optimised images and <LinkItem>certified workstations</LinkItem>
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
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/11814428-hp-logo.png"
                  alt="Hewlett Packard"
                />
                <LogoItem
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/c70b529e-lenovo-logo.png"
                  alt="Lenovo"
                />
                <LogoItem
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/67f81bfe-intel-new-logo.png"
                  alt="Intel"
                />
                <LogoItem
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/cd765ccc-nvidia-logo.png"
                  alt="Nvidia"
                />
                <LogoItem
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/6079d02b-amd-logo.png"
                  alt="AMD"
                />
                <LogoItem
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/987acdaa-dell-logo.png"
                  alt="Dell"
                />
              </StripNoticeLogoSectionItems>
            </StripNoticeLogoSection>
          </GridRow>
        </LayoutMaxWidth>
      </PStripShadow>
    </PStrip>
  );
};
