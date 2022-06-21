import { Outlet } from "react-router-dom";
import Container from "./common/Container";
import { ThemeProvider } from "@mui/system";
import { baseTheme } from "../styles/theme";
import { CssBaseline } from "@mui/material";
import Header from "./Header/Header";

const Layout = () => {
  return (
    <ThemeProvider theme={baseTheme}>
      <CssBaseline />
      <Header />
      <Container>
        <Outlet />
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
