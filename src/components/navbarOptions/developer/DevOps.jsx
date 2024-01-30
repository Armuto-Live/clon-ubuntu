import { Box, Typography, colors } from "@mui/material";
import { GridRow, LinkItem, ParagraphSmall, Button } from "../../global/index";
import { TitleMobile, TextListSmallItem, TextListSmall } from "../index";

export const DevOps = () => {
  return (
    <GridRow xxs="span 4" sm="span 2" md="span 3">
      <Box sx={{ display: { xxs: "none", sm: "block" } }}>
        <Typography variant="body2">Devops</Typography>
        <ParagraphSmall text="Automate everything from development to production." />
      </Box>
      <TitleMobile
        text={"Devops"}
        sx={{ display: { xxs: "block", sm: "none" }, color: "inherit" }}
      />
      <TextListSmall>
        <TextListSmallItem text="Ubuntu images on public clouds" />
        <TextListSmallItem text="Minimal Ubuntu for containers" />
        <TextListSmallItem text="Cloud-init - customise cloud instances" />
        <TextListSmallItem text="Juju for standardised operations" />
        <TextListSmallItem text="Charmed Kubernetes" />
        <TextListSmallItem text="MicroK8s - single node k8s for devs" />
        <TextListSmallItem text="MAAS - fast server provisioning" />
        <TextListSmallItem text="Multipass - Ubuntu on macOS" />
      </TextListSmall>
    </GridRow>
  );
};
