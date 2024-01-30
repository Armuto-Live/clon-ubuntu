import {
    GridRow,
  } from "../../global/index";
  import { TitleMobile, TextListSmallItem, TextListSmall } from "../index";

export const Cloud = () => {
  return (
    <GridRow xxs="span 4" sm="span 6" md="span 2">
        <TitleMobile text="Cloud ›"/>
        <TextListSmall>
            <TextListSmallItem text="Public cloud" />
            <TextListSmallItem text="Private cloud" />
            <TextListSmallItem text="Hybrid cloud" />
            <TextListSmallItem text="Multi-cloud" />
            <TextListSmallItem text="Use Ubuntu on AWS, Azure, Google, Oracle and IBM clouds" />
        </TextListSmall>
    </GridRow>
  )
}
