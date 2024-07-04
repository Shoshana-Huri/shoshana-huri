import { ThemeProvider } from "@mui/material/styles";
import { Outlet } from "react-router-dom";

import theme from "./theme";
import "./App.css";

import NavBar from "./components/NavBar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar>
        <Outlet />
      </NavBar>
    </ThemeProvider>
  );
}

export default App;
