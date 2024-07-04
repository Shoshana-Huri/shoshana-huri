import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#E2BFB3",
    },
    secondary: {
      main: "#895737",
    },
    background: {
      default: "#fdfcfb",
    },
    text: {
      primary: "#1a1a1a",
    },
  },
  typography: {
    fontFamily: "garet",
  },
});

export default theme;
