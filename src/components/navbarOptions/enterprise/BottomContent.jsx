import { styled } from "@mui/material";
import {
  PStrip,
  LayoutMaxWidth,
  GridRow,
  LinkItem,
  ParagraphSmall,
  Button,
  Line,
} from "../../global/index";
import { HeadingSmall,TextListSmallItem} from "../index";

const ListItem= styled('li')(({theme})=>({
    display:"inline",
    
}))

export const BottomContent = () => {
  return (
    <>
      <GridRow xxs="span 4" sm="span 6" md="span 4">
        <HeadingSmall text="Sectors"/>
      </GridRow>
      <GridRow xxs="span 4" sm="span 6" md="span 4" sx={{ padding: "1rem 0" }}>
        <ul>
            <TextListSmallItem text="Telco"/>
            <TextListSmallItem text="Telco"/>
            <TextListSmallItem text="Telco"/>
            <TextListSmallItem text="Telco"/>
        </ul>
      </GridRow>
    </>
  );
};
