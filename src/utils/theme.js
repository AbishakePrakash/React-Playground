import { createTheme } from "@mui/material/styles";
import themeTypography from "./typography";

// Base theme
const baseTheme = createTheme({
  palette: {
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
  },
  background: {
    primary: {
      main: "#000000",
    },
  },
  dashboard: {
    primary: "#808080",
  },
  // shadows: {
  //   primary: "#808080",
  // },
  typography: themeTypography,

  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "100%", // Example of overriding TextField component style
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#23A499",
          color: "inherit",
          "&:hover": {
            backgroundColor: "#53CD95",
          },
        },
      },
    },
  },
});

// Light theme
const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "light",
  },
  background: {
    primary: "#FFFFFF",
  },
  boxShadow: {
    primary: "0px 0px 6px rgba(0, 0, 0, 0.3)",
    secondary: "0px 0px 6px rgba(30, 144, 255, 0.5)",
  },
  dashboard: {
    primary: "#FFFFFF",
  },
  dashboardText: {
    primary: "#000000",
  },
  banner: {
    primary: "#B3DBFF",
  },
});

// Dark theme
const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "dark",
  },
  background: {
    primary: "#000000",
  },
  boxShadow: {
    primary: "0px 0px 6px rgba(30, 144, 255, 0.5  )",
    secondary: "0px 0px 6px rgba(255, 255, 255, 0.5)",
  },
  dashboard: {
    primary: "#000000",
  },
  dashboardText: {
    primary: "#FFFFFF",
  },
  banner: {
    primary: "#808080",
  },
});

export { lightTheme, darkTheme };
