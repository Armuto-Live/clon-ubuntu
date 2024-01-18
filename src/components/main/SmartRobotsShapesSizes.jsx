import {
  PStripShadow,
  Items,
  StripNoticeLogoSection,
  StripNoticeLogoSectionItems,
} from "../../style";
import { PStrip, LayoutMaxWidth, GridRow, LinkItem } from "../global";
import Typography from "@mui/material/Typography";
import { InlineListItem, LogoItem, ItemTicked } from "./index";

export const SmartRobotsShapesSizes = () => {
  return (
    <PStrip>
      <LayoutMaxWidth>
        <GridRow xxs="span 4" sm="span 6" md="span 12">
          <Typography variant="h2">
            Smart robots of all shapes and sizes
          </Typography>
          <Typography variant="body2">
            From turtles to trucks, <LinkItem>Ubuntu drives the robot revolution</LinkItem>.
          </Typography>
        </GridRow>
      </LayoutMaxWidth>
      <PStripShadow>
        <LayoutMaxWidth>
          <GridRow xxs="span 4" sm="span 6" md="span 12">
            <Items>
              <ItemTicked>Full support for <LinkItem>ROS and ROS2</LinkItem> </ItemTicked>
              <ItemTicked>Security patches for long-term ROS</ItemTicked>
              <ItemTicked>Fault tolerant over-the-air updates</ItemTicked>
              <ItemTicked><LinkItem>CIS certification</LinkItem> for ROS and ROS2 </ItemTicked>
              <ItemTicked>
                Trim time-to-market with SMART START consulting
              </ItemTicked>
              <ItemTicked>Leading Robot-as-a-Platform ecosystem</ItemTicked>
              <ItemTicked>Curated app stores</ItemTicked>
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
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/e796fb76-abb-logo.png"
                  alt="ABB"
                />
                <LogoItem
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/2437987f-pal-robotics-logo.png"
                  alt="PAL Robotics"
                />
                <LogoItem
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/01e8486f-kuka-logo.png"
                  alt="KUKA"
                />
                <LogoItem
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/7e4f929b-apollo-logo.png"
                  alt="Apollo"
                />
                <LogoItem
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/466c2690-bosch-logo.png"
                  alt="Bosch"
                />
                <LogoItem
                  src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/59af2c8f-bmw-logo.png"
                  alt="BMW"
                />
              </StripNoticeLogoSectionItems>
            </StripNoticeLogoSection>
          </GridRow>
        </LayoutMaxWidth>
      </PStripShadow>
    </PStrip>
  );
};
