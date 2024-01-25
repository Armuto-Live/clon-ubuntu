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
        main: "red",
      },
    },
  },
  typography: {
    fontFamily:'ubuntu',
    color:"#000",
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
      "@media (min-width: 620px)": {
        fontSize: "2.1rem",
      },
      "@media (min-width: 1037px)": {
        fontSize: "2.61rem",
        lineHeight: "3rem",
      },
    },
    h3: {
      fontSize: "1.5rem",
      fontStyle: "normal",
      fontWeight: "550",
      lineHeight: "2rem",
      marginBottom: "1.05rem",
      marginTop: "0",
      maxWidth: "40em",
      paddingTop: ".45rem",
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
      "@media (min-width: 620px)": {
        fontSize: "1.54rem",
      },
    },
    subtitle1:{
      marginBottom:"1.1rem",
      lineHeight:"1.5rem",
      marginTop:"0",
      paddingTop:".4rem",
      "@media (min-width:620px)":{
        fontSize:"1.03rem",
      }
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
        ul:{
          listStyleType:"none",
          padding:"0",
          margin:"0",
          marginBottom:"1.5rem",
        }
      },
    },
  },
});

export default theme;
