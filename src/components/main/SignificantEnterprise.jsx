import { GridRow, LayoutMaxWidth, LinkItem, PStrip } from "../global";
import { PStripShadow, Items } from "../../style";
import {Typography,Box} from "@mui/material";
import { ItemTicked } from "./index";
export const SignificantEnterprise = () => {
  return (
    <PStrip light="true">
      <LayoutMaxWidth>
        <GridRow xxs="span 4" sm="span 6" md="span 8">
          <Typography variant="h2">Significant enterprise savings</Typography>
          <Typography variant="body2">
            Sustainable open source at the lowest cost, everywhere.
          </Typography>
          <Typography variant="subtitle1">
            Rethink what’s possible with Linux and open source.
          </Typography>
          <Typography variant="subtitle1" sx={{ maxWidth: "40em" }}>
            Companies engage Canonical to drive down open source operating
            costs. Automate everything: multi-cloud operations, bare metal
            provisioning, edge clusters and IoT.
          </Typography>
        </GridRow>
        <GridRow
          xxs="span 4"
          sm="span 6"
          md="span 4"
          sx={{ display: { xxs: "none", sm: "flex" },justifyContent:"center", alignItems:"center" }}
        >
          <Box>
            <img src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_266,h_200/https://assets.ubuntu.com/v1/f129afea-Save+Money-Yen-Euro-Dollar-2020.svg" alt="" />
          </Box>
        </GridRow>
      </LayoutMaxWidth>
      <PStripShadow>
        <LayoutMaxWidth>
          <GridRow xxs="span 4" sm="span 6" md="span 12">
            <Items>
              <ItemTicked>No mandatory subscriptions for Ubuntu</ItemTicked>
              <ItemTicked>
                <LinkItem>Security, support</LinkItem> and fully managed{" "}
                <LinkItem>infra</LinkItem> and <LinkItem>apps</LinkItem>
              </ItemTicked>
              <ItemTicked>
                <LinkItem>Public cloud, data centre, edge cluster</LinkItem> and{" "}
                <LinkItem>appliances</LinkItem>
              </ItemTicked>
              <ItemTicked>
                <LinkItem>Long term maintenance commitment</LinkItem>
              </ItemTicked>
              <ItemTicked>
                Transparent pricing for enterprise and ISV
              </ItemTicked>
              <ItemTicked>
                <LinkItem>Switch from VMware to OpenStack</LinkItem>
              </ItemTicked>
              <ItemTicked>
                <LinkItem>TCO analysis of Open Infra</LinkItem>
              </ItemTicked>
              <ItemTicked>
                <LinkItem>451 study on private/public cloud costs</LinkItem>
              </ItemTicked>
            </Items>
            <LinkItem>Let’s talk open source ›</LinkItem>
          </GridRow>
        </LayoutMaxWidth>
      </PStripShadow>
    </PStrip>
  );
};
