import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ru } from "date-fns/locale";

const LinkBehavior = React.forwardRef((props, ref) => {
  const { href, ...other } = props;
  return (
    <RouterLink data-testid="custom-link" ref={ref} to={href} {...other} />
  );
});

export let baseTheme = createTheme({
  ru,
  // palette: {
  //   primary: { main: "#FF7300" },
  //   secondary: { main: "#ffffff" },
  //   third: { main: "#222222" },
  //   background: {
  //     default: "#ffffff",
  //     secondary: "#f1f6fa",
  //   },
  //   text: {
  //     primary: "#333333",
  //     second: "#ffffff",
  //     warning: "#FF7300",
  //     lightWarning: "#f80",
  //     notes: "#5C5C5C",
  //   },
  // },
  breakpoints: {
    values: {
      xs: 0,
      ssm: 420,
      sm: 640,
      md: 1024,
      lg: 1366,
      xl: 1536,
    },
  },
  //   typography: {
  //     fontFamily: "Open Sans",
  //     fontSize: 16,
  //     fontWeightLight: 300,
  //     h1: {
  //       fontSize: "3em",
  //       lineHeight: 1.2,
  //       fontWeight: 400,
  //     },
  //     h2: {
  //       fontSize: "2.5em",
  //       fontWeight: 400,
  //     },
  //     h3: {
  //       fontSize: "2em",
  //       fontWeight: 400,
  //     },
  //     h4: {
  //       fontSize: "1.6em",
  //       fontWeight: 400,
  //     },
  //     h6: {
  //       fontSize: "1.3em",
  //       fontWeight: 400,
  //     },
  //     button: {
  //       fontWeight: 500,
  //     },
  //   },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
    MuiCardActionArea: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
    // MuiTypography: {
    //   defaultProps: {
    //     align: "center",
    //   },
    // },
  },
});

baseTheme = responsiveFontSizes(baseTheme);
