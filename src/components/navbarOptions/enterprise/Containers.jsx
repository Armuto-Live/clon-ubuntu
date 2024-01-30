import {
  GridRow,
} from "../../global/index";
import { TitleMobile, TextListSmallItem, TextListSmall } from "../index";
export const Containers = () => {
  return (
    <GridRow xxs="span 4" sm="span 6" md="span 2">
      <TitleMobile text="Containers ›" />
      <TextListSmall>
        <TextListSmallItem text="Install and operate Kubernetes" />
        <TextListSmallItem text="Run system containers with LXD" />
      </TextListSmall>
    </GridRow>
  );
};
