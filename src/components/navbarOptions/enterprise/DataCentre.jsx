import {
  GridRow,
} from "../../global/index";

import { TitleMobile, TextListSmallItem, TextListSmall } from "../index";
export const DataCentre = () => {
  return (
    <GridRow xxs="span 4" sm="span 6" md="span 2">
      <TitleMobile text="Data centre ›" />
      <TextListSmall>
        <TextListSmallItem text="MAAS - fast server provisioning" />
        <TextListSmallItem text="Ceph storage on Ubuntu" />
        <TextListSmallItem text="Certified hardware" />
        <TextListSmallItem text="Ubuntu Server docs" />
        <TextListSmallItem text="Anbox Cloud - Android in the cloud" />
      </TextListSmall>
    </GridRow>
  );
};
