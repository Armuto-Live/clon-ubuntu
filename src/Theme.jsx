import { createTheme } from "@mui/material";

let theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0,
      xs: 460,
      sm: 620,
      md: 1037,
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
  typography: {
    fontFamily:'"Segoe UI"',
    h2: {
      fontSize: "2rem",
      fontStyle: "normal",
      fontWeight: "180",
      lineHeight: "2.5rem",
      marginBottom: ".95rem",
      marginTop: "0",
      maxWidth: "40em",
      paddingTop: ".55rem",
      letterSpacing: "0",
      "@media (min-width: 1037px)": {
        fontSize: "2.6rem",
        lineHeight:"3rem",
      },
    },
    body2:{
      fontSize:"1.5rem",
      fontStyle:"normal",
      fontWeight:"350",
      lineHeight:"2rem",
      marginBottom:"1.05rem",
      marginTop:"0",
      maxWidth:"40em",
      paddingTop:".45rem",
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          fontSize: "1rem",
          "@media (min-width: 1681px)": {
            fontSize: "1.125rem",
            fontWeigth: "400",
          },
        },
      },
    },
  },
});

export default theme;
