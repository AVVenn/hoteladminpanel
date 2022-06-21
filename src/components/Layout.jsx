import { Outlet } from "react-router-dom";
import Container from "./common/Container";
// import { ThemeProvider } from "@mui/system";
// import theme from "../styles/theme";
import { CssBaseline } from "@mui/material";
import Header from "./Header/Header";

const Layout = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
