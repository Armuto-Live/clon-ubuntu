import { Box, Typography } from "@mui/material";
import {
  GridRow,
  LinkItem,
  ParagraphSmall,
  Button,
} from "../../global/index";
import { TitleMobile, TextListSmallItem, TextListSmall } from "../index";

export const UbuntuDesktop = () => {
  return (
    <GridRow xxs="span 4" sm="span 6" md="span 3">
    <Box >
      <Typography variant="body2">
        <LinkItem>Ubuntu Desktop ›</LinkItem>
      </Typography>
      <ParagraphSmall
        text="Download Ubuntu desktop and replace your current operating system whether it's Windows or Mac OS, or, run Ubuntu alongside it."
      />
    </Box>
      <Button text="Get Ubuntu Desktop" isStart="true" noMarginBotton="true" />
  </GridRow>
  )
}
