import { Link as RouterLink, Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Container from "./common/Container";
import { SnackbarProvider } from "notistack";
import { ThemeProvider } from "@mui/system";
import { baseTheme } from "../styles/theme";
import {
  CssBaseline,
  List,
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  Toolbar,
  Box,
} from "@mui/material";
import BookOnlineRoundedIcon from "@mui/icons-material/BookOnlineRounded";
import MeetingRoomRoundedIcon from "@mui/icons-material/MeetingRoomRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import routes from "../constants/routes";
import { ListItemButtonForSideBar } from "../components/common/ListItemForSidear";

const pages = [
  { name: "Брони", path: routes.HOME, icon: <BookOnlineRoundedIcon /> },
  { name: "Комнаты", path: routes.ROOMS, icon: <MeetingRoomRoundedIcon /> },
  { name: "Новости", path: routes.NEWS, icon: <CampaignRoundedIcon /> },
  { name: "Вопросы", path: routes.QUESTIONS, icon: <HelpOutlineRoundedIcon /> },
  { name: "Польователи", path: routes.USERS, icon: <PeopleAltRoundedIcon /> },
  { name: "Статистика", path: routes.STATISTIC, icon: <InsightsRoundedIcon /> },
];

const Layout = () => {
  return (
    <ThemeProvider theme={baseTheme}>
      <SnackbarProvider maxSnack={3}>
        <CssBaseline />
        <Header />
        <Grid container spacing={2} sx={{ mt: "100px" }}>
          <Grid item xs={1.5}>
            <Drawer
              variant="permanent"
              sx={{
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                  overflow: "hidden",
                  boxSizing: "border-box",
                },
              }}
            >
              <Toolbar />
              <Box sx={{ overflow: "auto" }}>
                <List>
                  {pages.map((item) => (
                    <ListItem
                      key={item.path}
                      component={RouterLink}
                      to={item.path}
                      disablePadding
                    >
                      <ListItemButtonForSideBar>
                        <ListItemIcon sx={{ minWidth: "30px" }}>
                          {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.name} />
                      </ListItemButtonForSideBar>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </Grid>
          <Grid item xs={10.5}>
            <Outlet />
          </Grid>
        </Grid>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default Layout;
