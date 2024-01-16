import { PStrip, LayoutMaxWidth, GridRow } from "../global";
import Typography from "@mui/material/Typography";

export const OpenSourceSecurity = () => {
  return (
    <PStrip>
      <LayoutMaxWidth>
        <GridRow xxs="span 12">
          <Typography variant="h2" color="initial">
            Open source security
          </Typography>
          <Typography variant="body2">
            Ubuntu Pro is more than Linux. Security and compliance for the full
            stack.
          </Typography>
          <Typography variant="subtitle1" sx={{maxWidth:"40em"}}>
            Secure your open source apps. Patch the full stack, from kernel to
            library and applications, for CVE compliance. Governments and
            auditors certify Ubuntu for FedRAMP, FISMA and HITECH.
          </Typography>
        </GridRow>
        <GridRow xxs="span 12">OpenSourceSecurity</GridRow>
        <GridRow xxs="span 12">OpenSourceSecurity</GridRow>
      </LayoutMaxWidth>
    </PStrip>
  );
};
