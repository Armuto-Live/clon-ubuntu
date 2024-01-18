import {
  PStripShadow,
  Items,
  StripNoticeLogoSection,
  StripNoticeLogoSectionItems,
} from "../../style";
import { PStrip, LayoutMaxWidth, GridRow, LinkItem } from "../global";
import Typography from "@mui/material/Typography";
import { InlineListItem, LogoItem, ItemTicked } from "./index";

export const DataCentreAutomation = () => {
  return (
    <PStrip light="true">
      <LayoutMaxWidth>
        <GridRow xxs="span 4" sm="span 6" md="span 12">
          <Typography variant="h2">Data centre automation</Typography>
          <Typography variant="body2">
            Turn a rack into a bare metal cloud. <LinkItem>Metal-as-a-Service provisions</LinkItem>
            Windows, ESXi and Linux.
          </Typography>
        </GridRow>
      </LayoutMaxWidth>
      <PStripShadow>
        <LayoutMaxWidth>
          <GridRow xxs="span 4" sm="span 6" md="span 12">
            <Items>
              <ItemTicked><LinkItem>Bare metal cloud</LinkItem> with on-demand servers </ItemTicked>
              <ItemTicked>Full disk encryption</ItemTicked>
              <ItemTicked>Remote edge cluster operations</ItemTicked>
              <ItemTicked>Infrastructure <LinkItem>monitoring</LinkItem> and discovery </ItemTicked>
              <ItemTicked>
                Ansible, Chef, Puppet, SALT, <LinkItem>Juju</LinkItem> integration
              </ItemTicked>
              <ItemTicked><LinkItem>Super fast install</LinkItem> from scratch</ItemTicked>
              <ItemTicked>
                VMWare ESXi, Windows, CentOS, RHEL, Ubuntu
              </ItemTicked>
              <ItemTicked>Custom images with pre-installed apps</ItemTicked>
              <ItemTicked><LinkItem>Disk</LinkItem> and <LinkItem>network</LinkItem> configuration</ItemTicked>
              <ItemTicked>
                API-driven DHCP, DNS, PXE, IPAM, provisioning
              </ItemTicked>
              <ItemTicked>LDAP authentication and RBAC</ItemTicked>
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
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/0352e974-verizon-logo.png"
                  alt="Verizon"
                />
                <LogoItem
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/ea3bc2f7-telefonica-logo.png"
                  alt="Telefónica"
                />
                <LogoItem
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/ce15a4d1-tele2-logo.png"
                  alt="TELE2"
                />
                <LogoItem
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/756e9ef4-telecom-italia-logo.png"
                  alt="Telecom Italia"
                />
                <LogoItem
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/83fb74ae-nec-logo.png"
                  alt="NEC"
                />
                <LogoItem
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/4af3ad39-barclays-logo.png"
                  alt="Barclays"
                />
              </StripNoticeLogoSectionItems>
            </StripNoticeLogoSection>
          </GridRow>
        </LayoutMaxWidth>
      </PStripShadow>
    </PStrip>
  );
};
