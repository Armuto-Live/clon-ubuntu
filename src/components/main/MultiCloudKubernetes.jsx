import { Typography } from "@mui/material";
import { LayoutMaxWidth, PStrip, GridRow, LinkItem } from "../global";
import {
  PStripShadow,
  Items,
  StripNoticeLogoSection,
  StripNoticeLogoSectionItems,
} from "../../style";
import { InlineListItem, LogoItem, ItemTicked } from "./index";

export const MultiCloudKubernetes = () => {
  return (
    <PStrip>
      <LayoutMaxWidth>
        <GridRow xxs="span 4" sm="span 6" md="span 12">
          <Typography variant="h2">
            Multi-cloud Kubernetes and containers
          </Typography>
          <Typography variant="body2">
            <LinkItem>AKS. EKS. GKE.</LinkItem>Kubeadm.
            <LinkItem sx={{ display: "inline" }}>
              MicroK8s. Charmed Kubernetes.
            </LinkItem>{" "}
            All on Ubuntu.
          </Typography>
        </GridRow>
      </LayoutMaxWidth>
      <PStripShadow>
        <LayoutMaxWidth>
          <GridRow xxs="span 4" sm="span 6" md="span 12">
            <Items>
              <ItemTicked>Support for all public cloud Kubernetes</ItemTicked>
              <ItemTicked>On-prem MicroK8s, Charmed K8s, kubeadm </ItemTicked>
              <ItemTicked>
                <LinkItem>Fully-managed Kubernetes</LinkItem> on-prem or public
                cloud
              </ItemTicked>
              <ItemTicked>
                <LinkItem>Model-driven Kubernetes Operators</LinkItem>
              </ItemTicked>
              <ItemTicked>
                Full stack support for <LinkItem>apps</LinkItem>,{" "}
                <LinkItem>Kubernetes</LinkItem>, and <LinkItem>OS</LinkItem>
              </ItemTicked>
              <ItemTicked>
                <LinkItem>K8s architecture and deployment consulting</LinkItem>
              </ItemTicked>
              <ItemTicked>Cloud-native workload migration services</ItemTicked>
              <ItemTicked>GPU enablement for <LinkItem>AI/ML workloads on K8s</LinkItem></ItemTicked>
              <ItemTicked><LinkItem>Bare metal, OpenStack</LinkItem> and VMware </ItemTicked>{" "}
              <ItemTicked>
                Pluggable <LinkItem>CNIs, CSIs, CRIs and third-party tools</LinkItem>
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
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_576,h_576/https://assets.ubuntu.com/v1/de681426-aws-logo.png"
                  alt="Amazon Web Services"
                />
                <LogoItem
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_576,h_576/https://assets.ubuntu.com/v1/6ef81e08-microsoft-azure-new-logo.png"
                  alt="Microsoft Azure"
                />
                <LogoItem
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_576,h_576/https://assets.ubuntu.com/v1/d174f7bf-google-cloud-logo.png"
                  alt="Goggle Cloud"
                />
                <LogoItem
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/d493514f-liberty-global-logo.png"
                  alt="Liberty Global"
                />
                <LogoItem
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/aed42949-aci-universal-payments-logo.png"
                  alt="ACI"
                />
              </StripNoticeLogoSectionItems>
            </StripNoticeLogoSection>
          </GridRow>
        </LayoutMaxWidth>
      </PStripShadow>
    </PStrip>
  );
};
