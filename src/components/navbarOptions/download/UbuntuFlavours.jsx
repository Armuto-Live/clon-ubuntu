import { Box,styled } from "@mui/material";
import { GridRow,LinkItem } from "../../global/index";
import { HeadingSmall, HeadingSmallListItem,TextListSmall,TextListSmallItem } from "../index";
import { Description } from "./Description";


export const UbuntuFlavours = () => {
  return (
    <GridRow xxs="span 4" sm="span 6" md="span 3">
      <Box>
        <HeadingSmall text="UBUNTU FLAVOURS" />
      </Box>
      <Box>
        <Description>
          Find new ways to experience Ubuntu, each with their own choice of
          default applications and settings.
        </Description>
      </Box>
      <TextListSmall sx={{paddingTop:".55rem",margin:"0",columnGap:{xxs:"0",md:"2rem"},columns:{xxs:"1",md:"2"}}}>
        <TextListSmallItem  text="Edubuntu"/> 
        <TextListSmallItem  text="Kubuntu"/>
        <TextListSmallItem  text="Lubuntu"/>
        <TextListSmallItem  text="Ubuntu Budgie"/>
        <TextListSmallItem  text="Ubuntu Cinnamon"/>
        <TextListSmallItem  text="Ubuntu Kylin"/> 
        <TextListSmallItem  text="Ubuntu MATE"/>
        <TextListSmallItem  text="Ubuntu Studio "/>
        <TextListSmallItem  text="Ubuntu Unity"/>
        <TextListSmallItem  text="Xubuntu"/>
      </TextListSmall>
      <LinkItem sx={{fontSize:"14px"}}>Learn more about Ubuntu flavours</LinkItem>
    </GridRow>
  );
};
