import { createTheme } from "@mui/material";

let theme = createTheme({
  breakpoints: {
    values: {
      xxs:0,
      xs: 460,
      sm: 620,
      md: 1036,
      lg: 1376,
      xl: 1681,
    },
    palette: {
      primary: {
        main: "#FFFFFF",
      },
      secondary: {
        main: "#7A7A7A",
      },
    },
  },
});

export default theme;