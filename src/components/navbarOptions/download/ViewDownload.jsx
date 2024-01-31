import { PStrip, LayoutMaxWidth, GridRow, Line } from "../../global/index";
import {
  UbuntuDesktop,
  UbuntuServer,
  UbuntuForIoT,
  UbuntuCloud,
  Tutorials,
  ReadTheDocs,
  OtherWays,
  UbuntuFlavours,
} from "./index";

export const ViewDownload = () => {
  return (
    <PStrip
      nopaddingbottom="true"
      nopaddingtop="true"
      sx={{ paddingTop: { xxs: "24px" } }}
    >
      <LayoutMaxWidth>
        <UbuntuDesktop />
        <UbuntuServer />
        <UbuntuForIoT />
        <UbuntuCloud />
        <GridRow xxs="span 4" sm="span 6" md="span 12">
          <Line />
        </GridRow>
      </LayoutMaxWidth>
      <LayoutMaxWidth>
        <Tutorials />
        <ReadTheDocs />
        <OtherWays />
        <UbuntuFlavours />
      </LayoutMaxWidth>
    </PStrip>
  );
};
