import { PStrip, LayoutMaxWidth, GridRow, Line } from "../../global/index";
import {
  DevelopOnUbuntu,
  PublishApps,
  DevOps,
  MakeDevices,
  AIAndMachineLearning,
  CloudPackages,
  Containers,
  Tutorials,
  Download,
  Resources,
  Support,
  Security,
  Tools,
} from "./index";

export const ViewDeveloper = () => {
  return (
    <PStrip
      nopaddingbottom="true"
      nopaddingtop="true"
      sx={{ paddingTop: { xxs: "24px" } }}
    >
      <LayoutMaxWidth>
        <DevelopOnUbuntu />
        <PublishApps />
        <DevOps />
        <MakeDevices />
        <GridRow
          xxs="span 4"
          sm="span 6"
          md="span 12"
          sx={{ display: { xxs: "none", sm: "block" } }}
        >
          <Line />
        </GridRow>
        <AIAndMachineLearning />
        <CloudPackages />
        <Containers />
        <Tutorials />
      </LayoutMaxWidth>
      <LayoutMaxWidth>
      <Download/>
      <Resources/>
      <Support/>
      <Security/>
      <Tools/>
      </LayoutMaxWidth>
    </PStrip>
  );
};
