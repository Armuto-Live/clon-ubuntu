import { PStripShadow,Items } from "../../style";
import { PStrip, LayoutMaxWidth, GridRow, LinkItem } from "../global";
import { styled, Typography, Box } from "@mui/material";
import { ItemTicked } from "./ItemTicked";
import { InlineListItem } from "./index";
import { Link } from "react-router-dom";

import {
  StripNoticeLogoSection,
  StripNoticeLogoSectionItems,
} from "../../style";

import { LogoItem } from "./LogoItem";


export const OpenSourceSecurity = () => {
  return (
    <PStrip>
      <LayoutMaxWidth>
        <GridRow xxs="span 4" sm="span 6" md="span 12">
          <Typography variant="h2" color="initial">
            Open source security
          </Typography>
          <Typography variant="body2">
            <LinkItem>Ubuntu Pro</LinkItem> is more than Linux.{" "}
            <LinkItem>Security and compliance</LinkItem> for the full stack.
          </Typography>
          <Typography variant="subtitle1" sx={{ maxWidth: "39em" }}>
            Secure your open source apps. Patch the full stack, from kernel to
            library and applications, for CVE compliance. Governments and
            auditors certify Ubuntu for FedRAMP, FISMA and HITECH.
          </Typography>
        </GridRow>
      </LayoutMaxWidth>
      <PStripShadow>
        <LayoutMaxWidth>
          <GridRow xxs="span 4" sm="span 6" md="span 12">
            <Items>
              <ItemTicked>
                10 year security maintenance and CVE Patching
              </ItemTicked>
              <ItemTicked>
                <LinkItem>Kernel Livepatch </LinkItem> for 24/7 patching with no
                downtime
              </ItemTicked>
              <ItemTicked>
                <LinkItem>Extended security</LinkItem> for infrastructure and
                applications
              </ItemTicked>
              <ItemTicked>
                <LinkItem>FIPS 140-2</LinkItem> cryptographic modules certified
                by NIST
              </ItemTicked>
              <ItemTicked>
                <LinkItem>Common Criteria EAL2:</LinkItem> ISO/IEC IS 15408
                validated by CSEC
              </ItemTicked>
              <ItemTicked>
                <LinkItem>DISA/STIG</LinkItem> hardening for DoD compliance
              </ItemTicked>
              <ItemTicked>
                <LinkItem>CIS profiles</LinkItem> for cyber defence and malware
                prevention
              </ItemTicked>
            </Items>
          </GridRow>
          <GridRow xxs="span 4" sm="span 6" md="span 12">
            <Typography variant="subtitle1">
              <LinkItem>Secure all your open source with us ›</LinkItem>
            </Typography>
          </GridRow>

          <GridRow xxs="span 4" sm="span 6" md="span 12">
            <StripNoticeLogoSection>
              <StripNoticeLogoSectionItems>
                <LogoItem
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_576,h_576/https://assets.ubuntu.com/v1/a94b7c55-nist-logo.png"
                  alt="Amazon Web Services logo"
                />
                <LogoItem
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_576,h_576/https://assets.ubuntu.com/v1/d05ddc19-%40sec-logo.png"
                  alt="Microsoft Azure logo"
                />
                <LogoItem
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_576,h_576/https://assets.ubuntu.com/v1/d16880fe-disa-logo.png"
                  alt="AT&T logo"
                />
                <LogoItem
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_576,h_576/https://assets.ubuntu.com/v1/00644094-cis-logo.png"
                  alt="Google Cloud logo"
                />
                <LogoItem
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_576,h_576/https://assets.ubuntu.com/v1/b3f94804-csec-logo.png"
                  alt="Google Cloud logo"
                />
              </StripNoticeLogoSectionItems>
            </StripNoticeLogoSection>
          </GridRow>
        </LayoutMaxWidth>
      </PStripShadow>
    </PStrip>
  );
};
