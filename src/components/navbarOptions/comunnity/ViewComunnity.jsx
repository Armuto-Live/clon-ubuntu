import { PStrip, LayoutMaxWidth, GridRow, Line } from "../../global/index";
import {Contribute, Ethos, Follow, Governance, Learn, Meet,Connect} from "./index";

export const ViewComunnity = () => {
  return (
    <PStrip
      nopaddingbottom="true"
      nopaddingtop="true"
      sx={{ paddingTop: { xxs: "24px" } }}
    >
      <LayoutMaxWidth>
        <Learn/>
        <Meet/>
        <Ethos/>
        <GridRow xxs="span 4" sm="span 6" md="span 12">
          <Line/>
        </GridRow>
        <Contribute/>
        <Follow/>
        <Governance/>
        <Connect/>
      </LayoutMaxWidth>
    </PStrip>
  )
}
