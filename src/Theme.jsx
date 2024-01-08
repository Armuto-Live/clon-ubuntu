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
  components:{
    MuiButtonBase:{
      defaultProps:{
        disableRipple:true,
      }
    },
    MuiCssBaseline:{
      styleOverrides:{
        html:{
          fontSize:"1rem",
          // fontFamily:'"Ubuntu variable", "Ubuntu", -apple-system, "Segoe UI", "Roboto", "Oxygen", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
          '@media (min-width: 1681px)':{
            fontSize:"1.125rem",
            fontWeigth:"400",
          }
        }
      }
    }
  }
});

export default theme;