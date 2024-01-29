import { styled, Box, Typography } from "@mui/material";
import { PStrip, LayoutMaxWidth, GridRow, LinkItem,ParagraphSmall,Button } from "../../global/index";
import { TitleMobile } from "../TitleMobile";

export const ViewEnterprise = () => {
  return (
    <LayoutMaxWidth>
      <GridRow
        xxs="span 4"
        sm="span 2"
        md="span 3"
        sx={{ paddingTop: "1.5rem" }}
      >
        <Box sx={{display:{xxs:"none",sm:"block"}}}>
          <Typography variant="body2">
            <LinkItem>OpenStack ›</LinkItem>
          </Typography>
          <ParagraphSmall text="Canonical is the leading provider of managed OpenStack. We also
            provide enterprise support, training, consulting and will help you
            design and deliver your new private cloud."/>
          <Button text="Get OpenStack" isStart="true" />
        </Box>
        <TitleMobile text={"Fully managed OpenStack ›"} />

      </GridRow>
      <GridRow xxs="span 4" sm="span 2" md="span 3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        soluta, itaque officiis sunt sapiente, vero laboriosam eaque voluptate
        fugit reiciendis maiores necessitatibus ratione recusandae. Voluptate
        quidem molestias eum aperiam. Recusandae?
      </GridRow>
      <GridRow xxs="span 4" sm="span 2" md="span 3">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus eum
        ratione animi ipsam quas quasi. Doloribus tenetur aspernatur in
        dignissimos pariatur? Asperiores nobis eum esse id repudiandae tenetur
        ratione aliquid.
      </GridRow>
      <GridRow xxs="span 4" sm="span 2" md="span 3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        provident pariatur ducimus veniam distinctio minima ullam sint numquam
        rem, corrupti earum at perferendis dolorum est, repellat voluptates
        repellendus soluta. Deleniti?
      </GridRow>
    </LayoutMaxWidth>
  );
};
