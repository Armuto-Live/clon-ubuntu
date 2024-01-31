import { Box, Typography } from "@mui/material";
import { GridRow, LinkItem, ParagraphSmall, Button } from "../../global/index";
import { TitleMobile, TextListSmallItem, TextListSmall } from "../index";

export const UbuntuForIoT = () => {
  return (
    <GridRow xxs="span 4" sm="span 6" md="span 3">
      <Box >
        <Typography variant="body2">
          <LinkItem>Ubuntu for IoT ›</LinkItem>
        </Typography>
        <ParagraphSmall text="Are you a developer who wants to try snappy Ubuntu Core or classic Ubuntu on an IoT board?" />
      </Box>
      <TextListSmall>
        <TextListSmallItem text="Raspberry Pi" />
        <TextListSmallItem text="Intel IoT platforms" />
        <TextListSmallItem text="Intel NUC" />
        <TextListSmallItem text="KVM" />
        <TextListSmallItem text="Qualcomm Dragonboard 410c" />
        <TextListSmallItem text="Intel IEI TANK 870" />
        <TextListSmallItem text="AMD Evaluation kits & SOMs" />
        <TextListSmallItem text="RISC-V platforms" />
        <TextListSmallItem text="MediaTek Genio" />
      </TextListSmall>
    </GridRow>
  )
}
