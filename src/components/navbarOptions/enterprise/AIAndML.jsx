import {
  GridRow,
} from "../../global/index";

import { TitleMobile, TextListSmallItem, TextListSmall } from "../index";
export const AIAndML = () => {
  return (
    <GridRow xxs="span 4" sm="span 6" md="span 2">
    <TitleMobile text="AI & ML ›" />
    <TextListSmall>
      <TextListSmallItem text="What is Kubeflow" />
      <TextListSmallItem text="Try out Kubeflow on MicroK8s" />
      <TextListSmallItem text="MLOps services and training" />
    </TextListSmall>
  </GridRow>
  )
}
