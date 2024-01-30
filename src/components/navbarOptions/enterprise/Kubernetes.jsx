import { styled, Box, Typography } from "@mui/material";
import {
  PStrip,
  LayoutMaxWidth,
  GridRow,
  LinkItem,
  ParagraphSmall,
  Button,
} from "../../global/index";
import { TitleMobile, TextListSmallItem, TextListSmall } from "../index";
export const Kubernetes = () => {
  return (
    <GridRow xxs="span 4" sm="span 2" md="span 3">
      <Box sx={{ display: { xxs: "none", sm: "block" } }}>
        <Typography variant="body2">
          <LinkItem>Kubernetes ›</LinkItem>
        </Typography>
        <ParagraphSmall text="Canonical supports Kubeadm, MicroK8s and Charmed Kubernetes on VMware, OpenStack, bare metal, AWS, Azure, Google, Oracle Cloud, IBM Cloud and Rackspace." />
        <Button text="Get Kubernetes" isStart="true" />
      </Box>
      <TitleMobile text={"Kubernetes ›"} sx={{display:{xxs:"block",sm:"none"}}}/>
      <TextListSmall>
        <TextListSmallItem text="Industry report" />
        <TextListSmallItem text="What is Kubernetes" />
        <TextListSmallItem text="Multicloud K8s on bare metal, VMware, and all public clouds" />
        <TextListSmallItem text="Fully managed K8s" />
        <TextListSmallItem text="Get K8s for your workstation and edge / IoT" />
        <TextListSmallItem text="AI and ML on Kubernetes" />
        <TextListSmallItem text="Easy Kubeflow operations" />
        <TextListSmallItem text="GKE with Ubuntu on Google Cloud" />
        <TextListSmallItem text="TCO calculator" />
      </TextListSmall>
    </GridRow>
  );
};
